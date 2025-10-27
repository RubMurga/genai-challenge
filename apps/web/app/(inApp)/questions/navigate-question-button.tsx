"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface NavigateQuestionButtonProps {
  questionId: string
  children: React.ReactNode
}

export function NavigateQuestionButton({
  questionId,
  children,
}: NavigateQuestionButtonProps) {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => router.push(`/questions/${questionId}`)}
    >
      {children}
    </Button>
  )
}
