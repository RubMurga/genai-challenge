import { getQuestionWithAnswers } from "@/lib/api"
import { notFound } from "next/navigation"
import { RequestAnswerButton } from "@/app/(inApp)/questions/[id]/request-answer-button"
import { ExplainAnswersButton } from "@/app/(inApp)/questions/[id]/explain-answers-button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PageProps {
  params: { id: string }
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

export default async function QuestionDetail({ params }: PageProps) {
  const { id } = await params
  const questionWithAnswers = await getQuestionWithAnswers(id)

  if (!questionWithAnswers || questionWithAnswers.length === 0) {
    notFound()
  }

  const question = questionWithAnswers[0].question
  const answers = questionWithAnswers
    .map((item: (typeof questionWithAnswers)[number]) => item.answer)
    .filter((answer): answer is NonNullable<typeof answer> => answer !== null)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/questions">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Question</h1>
          <p className="text-muted-foreground">
            View your question and answers
          </p>
        </div>
        <div className="flex gap-2">
          {answers.length > 0 && <ExplainAnswersButton questionId={id} />}
          <RequestAnswerButton questionId={id} />
        </div>
      </div>

      {/* Question */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <p className="text-base leading-relaxed whitespace-pre-wrap">
              {question.content}
            </p>
            <div className="text-xs text-muted-foreground">
              Created {formatDate(question.createdAt)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Answers */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Answers {answers.length > 0 && `(${answers.length})`}
        </h2>

        {answers.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              No answers yet. Click the button above to generate an answer.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {answers.map((answer) => (
              <Card key={answer.id}>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {answer.content}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex gap-4">
                        <span>Temperature: {answer.temperature}</span>
                        <span>Top P: {answer.topP}</span>
                      </div>
                      <span>Generated {formatDate(answer.createdAt)}</span>
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
