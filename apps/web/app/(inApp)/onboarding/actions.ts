"use server"

import { createOnboarding } from "@/lib/api"

export const createOnboardingAction = async (
  _prevState: {
    errors: Record<string, string[]>
    success: boolean
  },
  formData: FormData
) => {
  try {
    const businessType = formData.get("businessType") as string
    const platform = formData.get("platform") as string
    const adBudget = formData.get("adBudget") as string
    const productType = formData.get("productType") as string
    const mainGoal = formData.get("mainGoal") as string
    const currentFollowers = formData.get("currentFollowers") as string
    
    await createOnboarding(
      businessType,
      platform,
      adBudget,
      productType,
      mainGoal,
      currentFollowers
    )

    return {
      errors: {},
      success: true,
    }
  } catch (error) {
    return {
      errors: {},
      success: false,
    }
  }
}
