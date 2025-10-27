"use server"

import { requestAnswer, explainAnswers } from "@/lib/api"
import { revalidatePath } from "next/cache"

export const requestAnswerAction = async (
  _prevState: { errors: Record<string, string[]>; success: boolean },
  formData: FormData
) => {
  const questionId = formData.get("questionId") as string
  const temperature = formData.get("temperature") as string
  const topT = formData.get("topT") as string

  if (!questionId) {
    return {
      errors: { general: ["Question ID is required"] } as Record<
        string,
        string[]
      >,
      success: false,
    }
  }

  // If this is a reset call (no questionId), return success: false
  if (!temperature) {
    return {
      errors: {} as Record<string, string[]>,
      success: false,
    }
  }

  await requestAnswer(
    questionId,
    parseFloat(temperature),
    topT ? parseFloat(topT) : 0.7
  )
  revalidatePath(`/questions/${questionId}`)
  return { errors: {} as Record<string, string[]>, success: true }
}

export const explainAnswersAction = async (questionId: string) => {
  const result = await explainAnswers(questionId)
  return result
}
