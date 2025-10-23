import { z } from "zod"
import { zValidator } from "@hono/zod-validator"

const createMessageSchema = z
  .object({
    content: z.string().min(1, "Content is required"),
  })
  .strict() // Ensure that if any extra fields are provided, an error is thrown

export const createMessageValidator = zValidator(
  "json",
  createMessageSchema,
  (result, c) => {
    if (!result.success) {
      return c.json(
        { errors: result.error.issues.map((issue) => issue.message) },
        400
      )
    }
  }
)
