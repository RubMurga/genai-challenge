"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react"
import { explainAnswersAction } from "@/app/(inApp)/questions/[id]/actions"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface ExplainAnswersButtonProps {
  questionId: string
}

export function ExplainAnswersButton({
  questionId,
}: ExplainAnswersButtonProps) {
  const [open, setOpen] = useState(false)
  const [explanation, setExplanation] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleExplain = async () => {
    setIsLoading(true)
    setOpen(true)
    try {
      const result = await explainAnswersAction(questionId)
      setExplanation(result.explanation)
    } catch (error) {
      toast.error("Failed to generate explanation")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button variant="outline" onClick={handleExplain}>
        <Brain className="w-4 h-4 mr-2" />
        Explain Answers
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto p-2">
          <SheetHeader>
            <SheetTitle>Answer Analysis</SheetTitle>
            <SheetDescription>
              Understanding how temperature and topP parameters affected the
              answers
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Spinner />
              </div>
            ) : explanation ? (
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap text-sm leading-relaxed">
                  {explanation}
                </p>
              </div>
            ) : null}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
