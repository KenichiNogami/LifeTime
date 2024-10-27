import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { GraphAI, agentInfoWrapper, AgentFunction } from "graphai";
import { vanillaFetchAgent } from "@graphai/vanilla";
import { dataObjectMergeTemplateAgent } from "@graphai/data_agents";

export async function httpTrigger1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  try {
    const Body = await request.json() as any;

    const Data = Body.healthcheckAllData;
    const letters = Body.letters;
    const maxindex = Body.maxindex;

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
    const createFetchAgentNode1 = (prefix: string, index: number) => ({
      agent: "vanillaFetchAgent",
      inputs: {
        body: `:${prefix.toUpperCase()}${index}`, 
        method: "POST",
        url: "https://node2gpt2025.azurewebsites.net/api/httpTrigger?",
      }
    });
    
    const createFetchAgentNode2 = (prefix: string, index: number) => ({
      agent: "vanillaFetchAgent",
      inputs: {
        when: `:R${prefix.toUpperCase()}${index-1}`,
        body: `:${prefix.toUpperCase()}${index}`, 
        method: "POST",
        url: "https://node2gpt2025.azurewebsites.net/api/httpTrigger?",
      }
    });

    // Dynamically generate nodes
    const nodes = {};
    letters.forEach(letter => {
        nodes[`${letter.toUpperCase()}${1}`] = createNode(letter, 1);
        nodes[`R${letter.toUpperCase()}${1}`] = createFetchAgentNode1(letter, 1);
      for (let i = 2; i <= maxindex; i++) {
        nodes[`${letter.toUpperCase()}${i}`] = createNode(letter, i);
        nodes[`R${letter.toUpperCase()}${i}`] = createFetchAgentNode2(letter, i);
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
      concurrency: 3,
      nodes
    };
    console.log(graphData);

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
    console.log("responded!!"+res);
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
