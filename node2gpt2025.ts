import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import * as dotenv from "dotenv";
import OpenAI from "openai";

const getOpenAIAdvice = async (prompt: string, maxTokens: number, system: string): Promise<string | null> => {
    try {
        const openai = new OpenAI();
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            max_tokens: maxTokens,
            temperature: 0,
            messages: [
                { role: "system", content: system },
                { role: "user", content: prompt }
            ]
        });

        const message = completion.choices[0].message;
        const generatedText = message?.content || "";
        return generatedText;
    } catch (error) {
        console.error(`OpenAI Unexpected error: ${error.message}`);
        return null;
    }
};

function horizonData(keys: string[]): { [key: string]: string } {
    const res: { [key: string]: string } = {};
    keys.forEach(key => {
        res[key] = "";  // Initialize all keys with empty string
    });
    return res;
}

dotenv.config();

interface RequestBody {
    system: string;
    prompt: string;
    skip: string;
    maxtokens: number;
    model: string;
    agenda: string;
    task: string;
}

export async function httpTrigger(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try {
        // リクエストボディを型付きで取得
        const Body = await request.json() as RequestBody;

        
        const system = Body.system;
        const maxtokens = Body.maxtokens;
        const model = Body.model;
        const agenda = Body.agenda;
        const prompt = Body.prompt;
        const skip = Body.skip;
        const task = Body.task;       
        console.log("prompt: " + prompt);
        console.log("system: " + system);
        console.log("maxtokens: " + maxtokens);
        console.log("skip: " + skip);
        console.log("model: " + model);
        console.log("agenda: " + agenda);
        console.log("task: " + task);

        if (skip !== "skip") {
            const advice = await getOpenAIAdvice(prompt, maxtokens, system);
            console.log(task+": " + advice);
            const result = horizonData([agenda,task]);
            result[agenda]=advice;
            return {
              status: 200,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(result),
            };
        }
        return {
            status: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "skiped" }),
      } ;
    }
    catch (error) {
        const errorMessage = error.message || String(error);
            return {
                status: 400,
                body: JSON.stringify({ error: `Invalid values. ${errorMessage}` }),
            };
        }
}

// Azure FunctionsでHTTPトリガーを登録
app.http('httpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpTrigger
});
