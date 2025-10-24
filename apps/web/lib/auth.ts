import { createAuthClient } from "better-auth/client"

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth",
})

export { authClient }
