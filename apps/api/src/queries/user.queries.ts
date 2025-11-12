import { db } from "@/db"
import { user } from "@/db/schema"
import { eq } from "drizzle-orm"

export const updateUserOnboardingCompleted = async (userId: string) => {
  return await db
    .update(user)
    .set({ onboardingCompleted: true })
    .where(eq(user.id, userId))
}
