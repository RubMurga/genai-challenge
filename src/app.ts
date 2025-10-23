import { Hono } from "hono"
import { auth } from "@/lib/auth"
import { messageRouter } from "./routes/message.router"
const app = new Hono()

app
  .on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw))
  .route("/api/messages", messageRouter)
  .get("/", (c) => {
    return c.text("All Systems operational.")
  })

app.onError((err, c) => {
  console.error(err)
  return c.json({ error: "Internal server error" }, 500)
})

export { app }
