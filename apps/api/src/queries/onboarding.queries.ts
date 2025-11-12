import { db } from "@/db"
import { onboarding } from "@/db/schema"
import { count, eq } from "drizzle-orm"

export const createOnboarding = async (
  userId: string,
  businessType: string,
  platform: string,
  adBudget: string,
  productType: string,
  mainGoal: string,
  currentFollowers: string
) => {
  return await db
    .insert(onboarding)
    .values({
      userId,
      businessType,
      platform,
      adBudget,
      productType,
      mainGoal,
      currentFollowers,
    })
    .returning()
}

export const getOnboarding = async (userId: string) => {
  return await db.select().from(onboarding).where(eq(onboarding.userId, userId))
}

export const getOnboardingCount = async () => {
  const result = await db.select({ count: count() }).from(onboarding)
  return result[0]?.count || 0
}
