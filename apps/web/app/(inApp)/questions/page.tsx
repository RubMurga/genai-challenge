import { getQuestions } from "@/lib/api"
import { Card, CardContent } from "@/components/ui/card"
import {
  Empty,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"
import { MessageCircle, Calendar } from "lucide-react"

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

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
              <Card
                key={question.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {question.content}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>Created {formatDate(question.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
