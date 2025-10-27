"use server"

import { createQuestion, deleteQuestion } from "@/lib/api"
import { revalidatePath } from "next/cache"

export const createQuestionAction = async (
  _prevState: { errors: Record<string, string[]>; success: boolean },
  formData: FormData
) => {
  const content = formData.get("content") as string
  const temperature = formData.get("temperature") as string
  const topP = formData.get("topP") as string

  if (!content) {
    return { errors: { content: ["Content is required"] }, success: false }
  }

  await createQuestion(content, Number(temperature), Number(topP))
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
