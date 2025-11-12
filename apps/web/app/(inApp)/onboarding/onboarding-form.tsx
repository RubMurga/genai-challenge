"use client"

import { useState, useActionState, startTransition, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { createOnboardingAction } from "./actions"

type OnboardingData = {
  businessType?: "small-business" | "business" | "solopreneur"
  platform?: "instagram" | "twitter" | "facebook" | "tiktok" | "linkedin"
  adBudget?: "0-100" | "100-500" | "500-1000" | "1000-5000" | "5000+"
  productType?: "app" | "platform" | "physical-product" | "service"
}

export function OnboardingForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<OnboardingData>({})
  const [state, action, isPending] = useActionState(createOnboardingAction, {
    errors: {},
    success: false,
  })

  // Handle success state
  useEffect(() => {
    if (state.success) {
      router.push("/waitlist")
    }
  }, [state.success, router])

  const steps = [
    {
      id: "businessType",
      title: "What are you?",
      description: "Help us understand your business type",
      options: [
        { value: "solopreneur", label: "Solopreneur" },
        { value: "small-business", label: "Small Business" },
        { value: "business", label: "Business" },
        { value: "agency", label: "Agency" },
        { value: "content_creator", label: "Content Creator" },
      ],
    },
    {
      id: "platform",
      title: "Which platform do you want to post the most?",
      description: "Select your primary social media platform",
      options: [
        { value: "instagram", label: "Instagram" },
        { value: "twitter", label: "Twitter / X" },
        { value: "facebook", label: "Facebook" },
        { value: "tiktok", label: "TikTok" },
      ],
    },
    {
      id: "adBudget",
      title: "Do you want to spend money on ads?",
      description: "Select your monthly advertising budget",
      options: [
        { value: "0-100", label: "$0 - $100" },
        { value: "100-500", label: "$100 - $500" },
        { value: "500-1000", label: "$500 - $1,000" },
        { value: "1000-5000", label: "$1,000 - $5,000" },
        { value: "5000+", label: "$5,000+" },
      ],
    },
    {
      id: "productType",
      title: "What do you want to create marketing for?",
      description: "Tell us what you're promoting",
      options: [
        { value: "app", label: "App" },
        { value: "platform", label: "Platform" },
        { value: "physical-product", label: "Physical Product" },
        { value: "service", label: "Service" },
      ],
    },
  ]

  const handleSelect = (stepId: string, value: string) => {
    setData((prev) => ({ ...prev, [stepId]: value }))

    // Auto-advance to next step after a short delay (but don't submit on last step)
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    }, 300)
  }

  const handleComplete = () => {
    const formData = new FormData()
    formData.append("businessType", data.businessType!)
    formData.append("platform", data.platform!)
    formData.append("adBudget", data.adBudget!)
    formData.append("productType", data.productType!)
    startTransition(() => {
      action(formData)
    })
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = steps[currentStep]
  const currentValue = data[currentStepData.id as keyof OnboardingData]
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-background md:flex md:items-center">
      <div className="container mx-auto px-4 py-8 md:py-12 w-full">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Step Indicators */}
          <ScrollAnimation direction="up" delay={0.15}>
            <div className="flex items-center justify-center gap-1.5 mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  {index > 0 && (
                    <div
                      className={`h-0.5 w-6 transition-colors ${
                        index <= currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                  <div
                    className={`flex items-center justify-center w-6 h-6 rounded-full transition-all ${
                      index < currentStep
                        ? "bg-primary text-primary-foreground"
                        : index === currentStep
                        ? "bg-primary text-primary-foreground ring-2 ring-primary/20"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <span className="text-[10px] font-semibold">
                        {index + 1}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Main Card Section */}
          <section className="relative bg-card rounded-2xl my-6 border border-border shadow-lg">
            <div className="p-5 md:p-6">
              <ScrollAnimation direction="up" delay={0.2}>
                <div className="text-center mb-5">
                  <h1 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                    {currentStepData.title}
                  </h1>
                  <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                    {currentStepData.description}
                  </p>
                </div>
              </ScrollAnimation>

              {!state.success && Object.keys(state.errors).length > 0 && (
                <div className="mb-4 p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm text-center">
                  {Object.values(state.errors).flat().join(", ")}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
                {currentStepData.options.map((option, idx) => {
                  const isSelected = currentValue === option.value
                  return (
                    <ScrollAnimation
                      key={option.value}
                      direction="up"
                      delay={0.25 + idx * 0.05}
                    >
                      <button
                        onClick={() =>
                          handleSelect(currentStepData.id, option.value)
                        }
                        disabled={isPending}
                        className={`relative p-3 rounded-md border transition-all duration-200 group hover:scale-[1.01] w-full flex items-center justify-center ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary/20"
                            : "border-border bg-transparent hover:border-primary/50"
                        } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <h3
                            className={`font-medium text-sm text-center ${
                              isSelected ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {option.label}
                          </h3>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all shrink-0 ${
                              isSelected
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                            )}
                          </div>
                        </div>
                      </button>
                    </ScrollAnimation>
                  )
                })}
              </div>

              {/* Navigation Buttons */}
              <div
                className={`flex items-center pt-4 border-t border-border ${
                  currentStep === steps.length - 1
                    ? "justify-between"
                    : "justify-start"
                }`}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleBack}
                  disabled={currentStep === 0 || isPending}
                >
                  Back
                </Button>
                {currentStep === steps.length - 1 && (
                  <Button
                    size="sm"
                    onClick={handleComplete}
                    disabled={!currentValue || isPending}
                    className="min-w-[100px]"
                  >
                    {isPending ? "Saving..." : "Complete"}
                  </Button>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
