import { Hono } from "hono"
import { authMiddleware } from "@/middlewares/auth.middleware"
import { createMessageValidator } from "@/validators/message.validator"
import { createMessage, getMessages } from "@/queries/message.queries"
import { HonoEnv } from "@/types/global"
const messageRouter = new Hono<HonoEnv>()

  .use(authMiddleware)

  /* Get user messages */
  .get("/", async (c) => {
    const userId = c.get("user").id
    const messages = await getMessages(userId)
    return c.json(messages)
  })

  /* Create a new message */
  .post("/", createMessageValidator, async (c) => {
    const { content } = c.req.valid("json")
    const userId = c.get("user").id
    const message = await createMessage(content, userId)
    return c.json(message)
  })

type MessageRouterType = typeof messageRouter

export { messageRouter }
