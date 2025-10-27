import "dotenv/config"
import { serve } from "@hono/node-server"
import { app } from "@/app"

// Re-export AppType for client-side usage
export type { AppType } from "@/app"

serve(
  {
    fetch: app.fetch,
    port: parseInt(process.env.PORT || "3001"),
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)
