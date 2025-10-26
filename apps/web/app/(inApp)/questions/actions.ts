"use server"

import { createQuestion, deleteQuestion } from "@/lib/api"
import { revalidatePath } from "next/cache"

export const createQuestionAction = async (
  _prevState: { errors: Record<string, string[]>; success: boolean },
  formData: FormData
) => {
  const content = formData.get("content") as string

  await createQuestion(content)
  revalidatePath("/questions")
  return { errors: {} as Record<string, string[]>, success: true }
}

export const deleteQuestionAction = async (
  _prevState: { errors: Record<string, string[]>; success: boolean },
  formData: FormData
) => {
  const id = formData.get("id") as string
  await deleteQuestion(id)
  revalidatePath("/questions")
  return { errors: {} as Record<string, string[]>, success: true }
}
