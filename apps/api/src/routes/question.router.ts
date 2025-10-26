import { Hono } from "hono"
import { authMiddleware } from "@/middlewares/auth.middleware"
import { createQuestionValidator } from "@/validators/question.validator"
import {
  getQuestions,
  createQuestion,
  deleteQuestion,
} from "@/queries/question.queries"
import { HonoEnv } from "@/types/global"
const questionRouter = new Hono<HonoEnv>()

  .use(authMiddleware)
  /* Get user messages */
  .get("/", async (c) => {
    const userId = c.get("user").id
    const questions = await getQuestions(userId)
    return c.json(questions)
  })

  /* Create a new message */
  .post("/", createQuestionValidator, async (c) => {
    const { content } = c.req.valid("json")
    const userId = c.get("user").id
    const question = await createQuestion(content, userId)
    return c.json(question)
  })

  .delete("/:id", async (c) => {
    const { id } = c.req.param()
    const userId = c.get("user").id
    const deletedQuestion = await deleteQuestion(id, userId)
    return c.json(deletedQuestion)
  })

export { questionRouter }
