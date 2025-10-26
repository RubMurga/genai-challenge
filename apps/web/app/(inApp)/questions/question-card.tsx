import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { DeleteQuestionButton } from "./delete-question-button"

interface Question {
  id: string
  content: string
  createdAt: string
  updatedAt: string
  userId: string
}

interface QuestionCardProps {
  question: Question
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <p className="text-sm leading-relaxed whitespace-pre-wrap flex-1">
              {question.content}
            </p>
            <DeleteQuestionButton questionId={question.id} />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Created {formatDate(question.createdAt)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
