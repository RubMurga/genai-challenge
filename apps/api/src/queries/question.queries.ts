import { answer, question } from "@/db/schema"
import { db } from "@/db"
import { and, eq } from "drizzle-orm"

export const createQuestion = async (content: string, userId: string) => {
  const newQuestion = await db
    .insert(question)
    .values({ content, userId })
    .returning()
  return newQuestion[0]
}

export const getQuestions = async (userId: string) => {
  const questions = await db
    .select()
    .from(question)
    .where(eq(question.userId, userId))
  return questions
}

export const deleteQuestion = async (id: string, userId: string) => {
  const deletedQuestion = await db
    .delete(question)
    .where(and(eq(question.id, id), eq(question.userId, userId)))
    .returning()
  return deletedQuestion
}

export const getQuestionWithAnswers = async (id: string, userId: string) => {
  const questionWithAnswers = await db
    .select()
    .from(question)
    .leftJoin(answer, eq(question.id, answer.questionId))
    .where(and(eq(question.id, id), eq(question.userId, userId)))
  return questionWithAnswers
}
