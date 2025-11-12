import { Hono } from "hono"
import { auth } from "@/lib/auth"
import { cors } from "hono/cors"
import { onboardingRouter } from "./routes/onboarding.router"
const app = new Hono()

  // configuring cors

  .use(
    "/api/*",
    cors({
      origin: [
        "http://localhost:3000",
        "https://app.grammar.so",
        "https://api.grammar.so",
        "https://grammar.so",
      ],
      allowHeaders: ["Content-Type", "Authorization", "Cookie"],
      allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE"],
      exposeHeaders: ["Content-Length", "Set-Cookie"],
      maxAge: 600,
      credentials: true,
    })
  )

  .on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw))
  .get("/", (c) => {
    return c.text("All Systems operational.")
  })
  .route("/api/onboarding", onboardingRouter)
  .onError((err, c) => {
    console.error(err)
    return c.json({ error: "Internal server error" }, 500)
  })

type AppType = typeof app

export { app, AppType }
