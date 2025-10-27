import { z } from "zod"
import { zValidator } from "@hono/zod-validator"

const createQuestionSchema = z
  .object({
    content: z.string().min(1, "Content is required"),
    temperature: z.number().min(0).max(2),
    topP: z.number().min(0).max(1),
  })
  .strict() // Ensure that if any extra fields are provided, an error is thrown

const generateAnswerSchema = z
  .object({
    temperature: z.number().min(0).max(2),
    topP: z.number().min(0).max(1),
  })
  .strict()

export const createQuestionValidator = zValidator(
  "json",
  createQuestionSchema,
  (result, c) => {
    if (!result.success) {
      return c.json(
        { errors: result.error.issues.map((issue) => issue.message) },
        400
      )
    }
  }
)

export const generateAnswerValidator = zValidator(
  "json",
  generateAnswerSchema,
  (result, c) => {
    if (!result.success) {
      return c.json(
        { errors: result.error.issues.map((issue) => issue.message) },
        400
      )
    }
  }
)
