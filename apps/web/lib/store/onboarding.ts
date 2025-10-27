import { createSlice } from "@reduxjs/toolkit"

export type OnboardingStep = {
  title: string
  description: string
}

export type OnboardingState = {
  isComplete: boolean
  currentStep: number
  steps: OnboardingStep[]
}

const onboardingSteps: OnboardingStep[] = [
  {
    title: "Welcome to AI Lab",
    description:
      "Discover how AI models respond to different parameters. Your journey into understanding AI behavior starts here.",
  },
  {
    title: "Ask Questions",
    description:
      "Create questions and see how AI models generate answers based on different temperature and top_p settings.",
  },
  {
    title: "Experiment with Parameters",
    description:
      "Temperature controls randomness (higher = more creative), while top_p controls vocabulary diversity.",
  },
  {
    title: "Compare & Learn",
    description:
      "Generate multiple answers for the same question with different parameters to understand their impact.",
  },
  {
    title: "You're All Set!",
    description:
      "Start exploring and experimenting. Click 'Get Started' to begin your AI exploration journey!",
  },
]

const initialState: OnboardingState = {
  isComplete: false,
  currentStep: 0,
  steps: onboardingSteps,
}

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload
    },
    nextStep: (state) => {
      state.currentStep += 1
    },
    previousStep: (state) => {
      state.currentStep = Math.max(0, state.currentStep - 1)
    },
    completeOnboarding: (state) => {
      state.isComplete = true
      localStorage.setItem("onboardingComplete", "true")
    },
    checkOnboardingStatus: (state) => {
      const isComplete = localStorage.getItem("onboardingComplete") === "true"
      state.isComplete = isComplete
    },
  },
})

export const {
  setStep,
  nextStep,
  previousStep,
  completeOnboarding,
  checkOnboardingStatus,
} = onboardingSlice.actions

export default onboardingSlice.reducer
