import { hc } from "hono/client"
import type { AppType } from "@genai/api/dist/app"
import { getServerCookieHeaders } from "./auth-server"

// Helper function to create authenticated client
const createAuthenticatedClient = async () => {
  const headers = await getServerCookieHeaders()

  return hc<AppType>(process.env.NEXT_PUBLIC_SERVER_URL!, {
    init: {
      credentials: "include",
      headers: {
        cookie: headers.cookie,
        "Content-Type": "application/json",
      },
    },
  })
}

export const getQuestions = async () => {
  const client = await createAuthenticatedClient()
  const response = await client.api.questions.$get()
  return response.json()
}

export const createQuestion = async (content: string) => {
  const client = await createAuthenticatedClient()
  const response = await client.api.questions.$post({
    json: { content },
  })
  return response.json()
}

export const deleteQuestion = async (id: string) => {
  const client = await createAuthenticatedClient()
  const response = await client.api.questions[":id"].$delete({
    param: { id },
  })
  return response.json()
}
