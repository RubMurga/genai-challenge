import { Hono } from "hono"
import { authMiddleware } from "@/middlewares/auth.middleware"
import { createOnboarding, getOnboarding } from "@/queries/onboarding.queries"
import { HonoEnv } from "@/types/global"
import { updateUserOnboardingCompleted } from "@/queries/user.queries"
import { createOnboardingValidator } from "@/validators/onboarding.validator"
const onboardingRouter = new Hono<HonoEnv>()

  .use(authMiddleware)
  .post("/", createOnboardingValidator, async (c) => {
    const userId = c.get("user").id
    const {
      businessType,
      platform,
      adBudget,
      productType,
      mainGoal,
      currentFollowers,
    } = c.req.valid("json")

    const onboarding = await createOnboarding(
      userId,
      businessType,
      platform,
      adBudget,
      productType,
      mainGoal,
      currentFollowers
    )
    await updateUserOnboardingCompleted(userId)
    return c.json(onboarding)
  })

export { onboardingRouter }
