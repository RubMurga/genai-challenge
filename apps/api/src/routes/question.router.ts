import { Hono } from "hono"
import { authMiddleware } from "@/middlewares/auth.middleware"
import { createQuestionValidator } from "@/validators/question.validator"
import {
  getQuestions,
  createQuestion,
  deleteQuestion,
  getQuestionWithAnswers,
} from "@/queries/question.queries"
import { HonoEnv } from "@/types/global"
import { answerQuestion } from "@/clients/openai.client"
import { createAnswer } from "@/queries/answer.queries"
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
    const { content, temperature, topP } = c.req.valid("json")
    const userId = c.get("user").id
    const question = await createQuestion(content, userId)
    const answer = await answerQuestion(content, temperature, topP)
    await createAnswer(answer!, temperature, topP, question.id)
    const questionWithAnswers = await getQuestionWithAnswers(
      question.id,
      userId
    )
    return c.json(questionWithAnswers)
  })

  /* Get single question with answers */
  .get("/:id", async (c) => {
    const { id } = c.req.param()
    const userId = c.get("user").id
    const questionWithAnswers = await getQuestionWithAnswers(id, userId)
    return c.json(questionWithAnswers)
  })

  /* Generate answer for question */
  .post("/:id/answers", async (c) => {
    const { id } = c.req.param()
    const userId = c.get("user").id
    const { temperature, topP } = await c.req.json()
    const question = await getQuestionWithAnswers(id, userId)

    if (question.length === 0) {
      return c.json({ error: "Question not found" }, 404)
    }
    const questionContent = question[0].question.content
    const answer = await answerQuestion(questionContent, temperature, topP)
    await createAnswer(answer!, temperature, topP, id)
    return c.json({ success: true })
  })

  .delete("/:id", async (c) => {
    const { id } = c.req.param()
    const userId = c.get("user").id
    const deletedQuestion = await deleteQuestion(id, userId)
    return c.json(deletedQuestion)
  })

export { questionRouter }
