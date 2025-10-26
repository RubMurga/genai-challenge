"use client"

import { useEffect, startTransition } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { deleteQuestionAction } from "./actions"
import { toast } from "sonner"

interface DeleteQuestionButtonProps {
  questionId: string
}

export function DeleteQuestionButton({
  questionId,
}: DeleteQuestionButtonProps) {
  const [state, action, isPending] = useActionState(deleteQuestionAction, {
    errors: {},
    success: false,
  })

  // Handle success state
  useEffect(() => {
    if (state.success) {
      toast.success("Question deleted successfully!")
    }
  }, [state.success])

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this question?")) {
      return
    }

    const formData = new FormData()
    formData.append("id", questionId)
    startTransition(() => {
      action(formData)
    })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleDelete}
      disabled={isPending}
      className="hover:text-destructive text-red-600"
    >
      <Trash2 className="w-4 h-4" />
      {isPending && <span className="ml-1 text-xs">Deleting...</span>}
    </Button>
  )
}
