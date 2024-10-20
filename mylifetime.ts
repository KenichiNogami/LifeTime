import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { GraphAI, agentInfoWrapper, AgentFunction } from "graphai";
import { vanillaFetchAgent } from "@graphai/vanilla";
import { dataObjectMergeTemplateAgent } from "@graphai/data_agents";

interface RequestBody {
  yage: number;
  ylt: number;
  nlt: number;
  e65: number;
  e70: number;
  e80: number;
  e90: number;
  e100: number;
  gfr: number;
  lifestyle: number;
  physical: string;
  bloodpr: string;
  liverdis: string;
  fatmetabo: string;
  sugarmetabo: string;
  blooddis: string;
  kidneydis: string;
  currentill: string;
  medication: string;
  green: string;
  agenda: string;
  healthcheck: {};
  myjumyoid: string;
  medicationsprompt: string;
  lifestylesprompt: string;
  healthcheckprompt: string;
  lifestylesadvise: string;
  wineadvise: string;
  smokeadvise: string;
}

interface node2gpt {
  prompt: string;
  system: string;
  maxtokens: number;
  skip: string;
  agenda: string;
  model: string;
  task: string;
}

export async function httpTrigger1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  try {
      // リクエストボディを型付きで取得
      const Body =  await request.json()as RequestBody;

      const medicationsprompt = Body.medicationsprompt;
      const lifestylesprompt = Body.lifestylesprompt;
      const healthcheckprompt = Body.healthcheckprompt;
      const medication = Body.medication;

      const medicationsInput = {
        prompt: medicationsprompt, 
        system: "あなたは一流の薬剤師です。薬に詳しくない人にわかりやすく、丁寧に説明できます。", 
        maxtokens: 1000, 
        skip: medication, 
        agenda: "medicationAdvice",
        model: "OpenAI", 
        task: "Advice"};
      const lifestylesInput = {
        prompt: lifestylesprompt, 
        system: "あなたは健康管理士、理学療法士かつ生活アドバイさーです。健康やライフスタイル、理学療法に関するアドバイスを行います。", 
        maxtokens: 1000, 
        skip: "no skip",
        agenda: "lifestyleAdvice",
        model: "OpenAI", 
        task: "Advice"};
      const healthcheckInput = {
        prompt: healthcheckprompt, 
        system: "あなたは医師です。健康診断結果に基づいてアドバイスを行います。", 
        maxtokens: 1000, 
        skip: "no skip",
        agenda: "healthcheckAdvice", 
        model: "OpenAI", 
        task: "Advice"};
    
    const graphData = {
      version: 0.5,
      nodes: {
        medication: {
          agent: "vanillaFetchAgent",
          inputs: {
            body: "medicationsInput",
            method: "POST",
            url: "https://node2gpt2025.azurewebsites.net/api/httpTrigger?",
          }
        },
        lifestyle: {
          agent: "vanillaFetchAgent",
          inputs: {
            body: "lifestylesInput",
            method: "POST",
            url: "https://node2gpt2025.azurewebsites.net/api/httpTrigger?",
          }
        },
        healthcheck: {
          agent: "vanillaFetchAgent",
          inputs: {
            body: "healthcheckInput",
            method: "POST",
            url: "https://node2gpt2025.azurewebsites.net/api/httpTrigger?",
          }
        },
        mergeData: {
          agent: "dataObjectMergeTemplateAgent",
          inputs: [":medication", ":lifestyle", ":healthcheck"],
        },
      },
    };
  
      const main = async () => {
        const graph = new GraphAI(graphData, {
          vanillaFetchAgent, dataObjectMergeTemplateAgent
        });
        const res = await graph.run(true);
        console.log(res);
        return {
          status: 200,
          body: JSON.stringify(res), 
        };
      }
  
    const res = await main();
        console.log(res);
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

