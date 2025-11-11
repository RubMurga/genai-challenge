import { hc } from "hono/client"
import type { AppType } from "@grammar/api"
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
