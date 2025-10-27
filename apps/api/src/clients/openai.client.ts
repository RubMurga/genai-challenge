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

const explainAnswers = async (
  question: string,
  answers: Array<{ content: string; temperature: string; topP: string }>
) => {
  const answersText = answers
    .map(
      (ans, idx) =>
        `Answer ${idx + 1}: Temperature=${ans.temperature}, TopP=${
          ans.topP
        }\n\n${ans.content}`
    )
    .join("\n\n---\n\n")

  const messages = [
    {
      role: "system" as const,
      content:
        "You are an AI expert providing brief, concise explanations. Keep responses to 2-3 short paragraphs maximum.",
    },
    {
      role: "user" as const,
      content: `In 2-3 short paragraphs, explain how temperature and topP parameters likely affected these answers to the question:

      Question: ${question}

      Answers:
      ${answersText}

      Be very concise - only highlight the key differences.`,
    },
  ]

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    temperature: 0.7,
  })
  return response.choices[0].message.content
}

export { answerQuestion, explainAnswers }
