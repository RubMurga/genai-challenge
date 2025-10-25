import { question } from "@/db/schema"
import { db } from "@/db"
import { eq } from "drizzle-orm"

export const createQuestion = async (content: string, userId: string) => {
  const newQuestion = await db
    .insert(question)
    .values({ content, userId })
    .returning()
  return newQuestion
}

export const getQuestions = async (userId: string) => {
  const questions = await db
    .select()
    .from(question)
    .where(eq(question.userId, userId))
  return questions
}
