import { z } from "zod"
import { zValidator } from "@hono/zod-validator"

const createOnboardingSchema = z.object({
  businessType: z.enum([
    "small-business",
    "business",
    "solopreneur",
    "agency",
    "content_creator",
  ]),
  platform: z.enum(["instagram", "twitter", "facebook", "tiktok"]),
  adBudget: z.enum(["0-100", "100-500", "500-1000", "1000-5000", "5000+"]),
  productType: z.enum(["app", "platform", "physical-product", "service"]),
  mainGoal: z.enum(["brand-awareness", "sales", "engagement", "leads"]),
  currentFollowers: z.enum(["0-1000", "1000-10000", "10000-100000", "100000+"]),
})

export const createOnboardingValidator = zValidator(
  "json",
  createOnboardingSchema
)
