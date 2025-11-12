import { OnboardingForm } from "./onboarding-form"
import { getOnboarding } from "@/lib/api"
import { redirect } from "next/navigation"
export default async function OnBoarding() {
  const onboarding = await getOnboarding()
  if (onboarding.length > 0) {
    redirect("/waitlist")
  }
  return <OnboardingForm />
}
