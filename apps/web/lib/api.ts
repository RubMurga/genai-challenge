import { hc } from "hono/client"
import type { AppType } from "@genai/api/src/app"

const client = hc<AppType>(process.env.NEXT_PUBLIC_SERVER_URL + "/api")

export const getMessages = async () => {
  const response = await client.api.messages.$get()
  return response.json()
}
