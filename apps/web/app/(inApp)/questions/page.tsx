import { getQuestions } from "@/lib/api"
import {
  Empty,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"
import { MessageCircle } from "lucide-react"
import { QuestionFormSheet } from "@/app/(inApp)/questions/question-form-sheet"
import { QuestionCard } from "@/app/(inApp)/questions/question-card"

export default async function Questions() {
  const questions = await getQuestions()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Questions</h1>
          <p className="text-muted-foreground">
            Ask questions and track your learning journey
          </p>
        </div>
        <QuestionFormSheet />
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Questions</h2>

        {questions.length === 0 ? (
          <Empty>
            <EmptyMedia variant="icon">
              <MessageCircle className="w-6 h-6" />
            </EmptyMedia>
            <EmptyTitle>No questions yet</EmptyTitle>
            <EmptyDescription>
              Start by asking your first question
            </EmptyDescription>
          </Empty>
        ) : (
          <div className="space-y-4">
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
