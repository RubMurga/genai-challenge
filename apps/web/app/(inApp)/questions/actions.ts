"use server"

import { createQuestion } from "@/lib/api"
import { revalidatePath } from "next/cache"

export const createQuestionAction = async (
  _prevState: { errors: Record<string, string[]>; success: boolean },
  formData: FormData
) => {
  const content = formData.get("content") as string
  const createdQuestion = await createQuestion(content)
  revalidatePath("/questions")
  return { success: true }
}
