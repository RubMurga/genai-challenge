import "dotenv/config"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
})

const answerQuestion = async (
  question: string,
  temperature: number,
  topP: number
) => {
  const messages = [
    {
      role: "system" as const,
      content:
        "You are a helpful assistant that answers questions based on the user's question and the context provided.",
    },
    { role: "user" as const, content: question },
  ]

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    temperature,
    top_p: topP,
  })
  return response.choices[0].message.content
}

export { answerQuestion }
