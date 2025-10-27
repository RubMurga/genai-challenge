import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector, useStore } from "react-redux"
import onboardingReducer from "./onboarding"

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Type-safe hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<typeof store>()

// Business logic hooks
export const useOnboarding = () => {
  const { isComplete, currentStep, steps } = useAppSelector(
    (state) => state.onboarding
  )

  return {
    isComplete,
    currentStep,
    steps,
  }
}
