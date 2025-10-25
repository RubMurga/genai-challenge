import { Hono } from "hono"
import { auth } from "@/lib/auth"
import { messageRouter } from "./routes/message.router"
import { cors } from "hono/cors"
const app = new Hono()

  // configuring cors

  .use(
    "/api/*",
    cors({
      origin: "http://localhost:3000", // replace with your origin
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    })
  )

  .on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw))
  .route("/api/messages", messageRouter)
  .get("/", (c) => {
    return c.text("All Systems operational.")
  })
  .onError((err, c) => {
    console.error(err)
    return c.json({ error: "Internal server error" }, 500)
  })

type AppType = typeof app

export { app, AppType }
