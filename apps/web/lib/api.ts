import { hc } from "hono/client"
import type { AppType } from "@genai/api/dist/app"

const client = hc<AppType>(process.env.NEXT_PUBLIC_SERVER_URL + "/api")

export const getMessages = async () => {
  const response = await client.api.questions.$get()
  const questions = await response.json()
  return questions
}

export const createMessage = async (content: string) => {
  const response = await client.api.questions.$post({
    json: { content },
  })

  return response.json()
}
