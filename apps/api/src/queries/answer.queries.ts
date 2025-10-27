import { db } from "@/db"
import { answer } from "@/db/schema"

export const createAnswer = async (
  content: string,
  temperature: number,
  topP: number,
  questionId: string
) => {
  const newAnswer = await db
    .insert(answer)
    .values({
      content: content,
      temperature: temperature.toString(),
      topP: topP.toString(),
      questionId: questionId,
    })
    .returning()
  return newAnswer
}
