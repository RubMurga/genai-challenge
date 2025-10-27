"use client"

import { useOnboarding, useAppDispatch } from "@/lib/store/store"
import {
  nextStep,
  previousStep,
  completeOnboarding,
} from "@/lib/store/onboarding"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { toast } from "sonner"

interface OnboardingModalProps {
  userCreatedAt?: string | Date
}

export function OnboardingModal({ userCreatedAt }: OnboardingModalProps) {
  const [show, setShow] = useState(false)

  const { currentStep, steps } = useOnboarding()
  const dispatch = useAppDispatch()
  const [isExiting, setIsExiting] = useState(false)

  // Check if onboarding should be shown after mount
  useEffect(() => {
    // Don't show if user already completed onboarding
    const completed = localStorage.getItem("onboardingComplete") === "true"
    if (completed) {
      setShow(false)
      return
    }

    // Show onboarding if account was created less than 10 seconds ago
    if (userCreatedAt) {
      const createdAt = new Date(userCreatedAt).getTime()
      const now = Date.now()
      const tenSecondsAgo = now - 10 * 1000
      setShow(createdAt > tenSecondsAgo)
    } else {
      setShow(false)
    }
  }, [userCreatedAt])

  // Don't render if user has completed onboarding or account is old
  if (!show) return null

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      dispatch(nextStep())
    } else {
      handleComplete()
    }
  }

  const handleComplete = () => {
    setIsExiting(true)
    setTimeout(() => {
      dispatch(completeOnboarding())
      toast.success("Welcome to AI Lab! ", {
        description: "Let's start exploring together.",
        duration: 3000,
      })
    }, 300)
  }

  const handleSkip = () => {
    handleComplete()
  }

  const handlePrevious = () => {
    dispatch(previousStep())
  }

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <Card
        className={`w-full max-w-2xl mx-4 transition-all duration-300 ${
          isExiting ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div
              className="flex-1 animate-in fade-in duration-300"
              key={currentStep}
            >
              <h2 className="text-3xl font-bold mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {steps[currentStep].description}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSkip}
              className="ml-4 shrink-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={isFirstStep}
              className="transition-all hover:scale-105"
            >
              Previous
            </Button>
            <div className="flex gap-2">
              {steps.map((_, index: number) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? "bg-primary w-8 scale-110"
                      : index < currentStep
                      ? "bg-primary w-2"
                      : "bg-secondary w-2"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={handleNext}
              className="transition-all hover:scale-105"
            >
              {isLastStep ? "Get Started" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
