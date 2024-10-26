import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { GraphAI, agentInfoWrapper, AgentFunction } from "graphai";
import { vanillaFetchAgent } from "@graphai/vanilla";
import { dataObjectMergeTemplateAgent } from "@graphai/data_agents";

export async function httpTrigger1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  try {
    const Body = await request.json() as any;
    const Data = Body.healthcheckAllData;

    // Function to create node structure for each Ia, Ib, Ic, etc.
    const createNode = (prefix: string, index: number) => ({
      value: {
        prompt: Data[`${prefix}${index}`].prompt,
        system: Data[`${prefix}${index}`].system,
        maxtokens: Data[`${prefix}${index}`].maxtokens,
        skip: Data[`${prefix}${index}`].skip,
        agenda: Data[`${prefix}${index}`].agenda,
        agent: Data[`${prefix}${index}`].agent,
      }
    });

    // Function to create vanillaFetchAgent nodes Ra, Rb, Rc
    const createFetchAgentNode = (prefix: string, index: number) => ({
      agent: "vanillaFetchAgent",
      inputs: {
        body: `:${prefix}${index}`,
        method: "POST",
        url: "https://node2gpt2025.azurewebsites.net/api/httpTrigger?",
      }
    });

    // Dynamically generate nodes
    const nodes = {};
    ['a', 'b', 'c'].forEach(letter => {
      for (let i = 1; i <= 3; i++) {
        nodes[`${letter.toUpperCase()}${i}`] = createNode(letter, i);
        nodes[`R${letter.toUpperCase()}${i}`] = createFetchAgentNode(letter, i);
      }
    });

    nodes['mergeData'] = {
      agent: "dataObjectMergeTemplateAgent",
      inputs: Object.keys(nodes)
        .filter(key => key.startsWith("R"))
        .map(key => `:${key}`)
    };

    const graphData = {
      version: 0.5,
      concurrency: 2,
      nodes
    };

    const main = async () => {
      const graph = new GraphAI(graphData, {
        vanillaFetchAgent,
        dataObjectMergeTemplateAgent
      });
      const res = await graph.run(true);
      return {
        status: 200,
        body: JSON.stringify(res),
      };
    };

    const res = await main();
    console.log("responded!!");
    return res;
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      body: JSON.stringify({
        message: err.message,
        stack: err.stack,
      }),
    };
  }
}

app.http('httpTrigger1', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: httpTrigger1
});
