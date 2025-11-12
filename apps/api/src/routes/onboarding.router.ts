import { Hono } from "hono"
import { authMiddleware } from "@/middlewares/auth.middleware"
import {
  createOnboarding,
  getOnboarding,
  getOnboardingCount,
} from "@/queries/onboarding.queries"
import { HonoEnv } from "@/types/global"
import { updateUserOnboardingCompleted } from "@/queries/user.queries"
import { createOnboardingValidator } from "@/validators/onboarding.validator"
const onboardingRouter = new Hono<HonoEnv>()

  .use(authMiddleware)
  .post("/", createOnboardingValidator, async (c) => {
    const userId = c.get("user").id
    const { businessType, platform, adBudget, productType } =
      c.req.valid("json")

    const onboarding = await createOnboarding(
      userId,
      businessType,
      platform,
      adBudget,
      productType
    )
    await updateUserOnboardingCompleted(userId)
    return c.json(onboarding)
  })
  .get("/", async (c) => {
    const userId = c.get("user").id
    const onboarding = await getOnboarding(userId)
    return c.json(onboarding)
  })
  .get("/count", async (c) => {
    const count = await getOnboardingCount()
    return c.json({ count })
  })

export { onboardingRouter }
