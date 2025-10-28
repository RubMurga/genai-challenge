import { describe, test, expect, vi, beforeEach } from "vitest"
import { Hono } from "hono"
import { questionRouter } from "../question.router"
import * as questionQueries from "@/queries/question.queries"
import * as answerQueries from "@/queries/answer.queries"
import * as openaiClient from "@/clients/openai.client"
import type { HonoEnv } from "@/types/global"

// Mock dependencies
vi.mock("@/queries/question.queries")
vi.mock("@/queries/answer.queries")
vi.mock("@/clients/openai.client")

// Mock auth middleware
vi.mock("@/middlewares/auth.middleware", () => ({
  authMiddleware: vi.fn((c, next) => {
    // Set mock user
    c.set("user", {
      id: "test-user-id",
      name: "Test User",
      email: "test@example.com",
      emailVerified: true,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return next()
  }),
}))

describe("Question Router", () => {
  let app: Hono<HonoEnv>
  const mockUserId = "test-user-id"

  beforeEach(() => {
    app = new Hono<HonoEnv>()
    app.route("/questions", questionRouter)
    vi.clearAllMocks()
  })

  describe("GET /questions", () => {
    test("should return all questions for the user", async () => {
      const now1 = new Date()
      const now2 = new Date()
      const mockQuestions = [
        {
          id: "question-1",
          content: "What is AI?",
          userId: mockUserId,
          createdAt: now1,
          updatedAt: now1,
        },
        {
          id: "question-2",
          content: "How does it work?",
          userId: mockUserId,
          createdAt: now2,
          updatedAt: now2,
        },
      ]

      vi.mocked(questionQueries.getQuestions).mockResolvedValue(
        mockQuestions as any
      )

      const res = await app.request("/questions")

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toHaveLength(2)
      expect(data[0]).toMatchObject({
        id: "question-1",
        content: "What is AI?",
        userId: mockUserId,
      })
      expect(data[1]).toMatchObject({
        id: "question-2",
        content: "How does it work?",
        userId: mockUserId,
      })
      expect(questionQueries.getQuestions).toHaveBeenCalledWith(mockUserId)
    })

    test("should return empty array when no questions exist", async () => {
      vi.mocked(questionQueries.getQuestions).mockResolvedValue([])

      const res = await app.request("/questions")

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toEqual([])
    })
  })

  describe("POST /questions", () => {
    test("should create a new question with answer", async () => {
      const now = new Date()
      const mockQuestion = {
        id: "question-1",
        content: "What is TypeScript?",
        userId: mockUserId,
        createdAt: now,
        updatedAt: now,
      }

      const mockQuestionWithAnswers = [
        {
          question: mockQuestion,
          answer: null,
        },
        {
          question: mockQuestion,
          answer: {
            id: "answer-1",
            content: "TypeScript is a typed superset of JavaScript",
            temperature: "0.7",
            topP: "0.9",
            questionId: "question-1",
            createdAt: now,
            updatedAt: now,
          },
        },
      ]

      const mockAnswer = "TypeScript is a typed superset of JavaScript"

      vi.mocked(questionQueries.createQuestion).mockResolvedValue(
        mockQuestion as any
      )
      vi.mocked(openaiClient.answerQuestion).mockResolvedValue(mockAnswer)
      vi.mocked(answerQueries.createAnswer).mockResolvedValue([] as any)
      vi.mocked(questionQueries.getQuestionWithAnswers).mockResolvedValue(
        mockQuestionWithAnswers as any
      )

      const res = await app.request("/questions", {
        method: "POST",
        body: JSON.stringify({
          content: "What is TypeScript?",
          temperature: 0.7,
          topP: 0.9,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toHaveLength(2)
      expect(data[0].question).toMatchObject({
        id: "question-1",
        content: "What is TypeScript?",
        userId: mockUserId,
      })
      expect(data[1].question).toMatchObject({
        id: "question-1",
        content: "What is TypeScript?",
        userId: mockUserId,
      })
      expect(data[1].answer).toMatchObject({
        id: "answer-1",
        content: "TypeScript is a typed superset of JavaScript",
        temperature: "0.7",
        topP: "0.9",
        questionId: "question-1",
      })
      expect(questionQueries.createQuestion).toHaveBeenCalledWith(
        "What is TypeScript?",
        mockUserId
      )
      expect(openaiClient.answerQuestion).toHaveBeenCalledWith(
        "What is TypeScript?",
        0.7,
        0.9
      )
      expect(answerQueries.createAnswer).toHaveBeenCalled()
      expect(questionQueries.getQuestionWithAnswers).toHaveBeenCalled()
    })

    test("should reject invalid temperature", async () => {
      const res = await app.request("/questions", {
        method: "POST",
        body: JSON.stringify({
          content: "Test question",
          temperature: 3, // Invalid: > 2
          topP: 0.9,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      expect(res.status).toBe(400)
    })

    test("should reject invalid topP", async () => {
      const res = await app.request("/questions", {
        method: "POST",
        body: JSON.stringify({
          content: "Test question",
          temperature: 0.7,
          topP: 2, // Invalid: > 1
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      expect(res.status).toBe(400)
    })

    test("should require content", async () => {
      const res = await app.request("/questions", {
        method: "POST",
        body: JSON.stringify({
          temperature: 0.7,
          topP: 0.9,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      expect(res.status).toBe(400)
    })
  })

  describe("GET /questions/:id", () => {
    test("should return question with answers", async () => {
      const now = new Date()
      const mockQuestionWithAnswers = [
        {
          question: {
            id: "question-1",
            content: "What is AI?",
            userId: mockUserId,
            createdAt: now,
            updatedAt: now,
          },
          answer: null,
        },
        {
          question: {
            id: "question-1",
            content: "What is AI?",
            userId: mockUserId,
            createdAt: now,
            updatedAt: now,
          },
          answer: {
            id: "answer-1",
            content: "AI is artificial intelligence",
            temperature: "0.7",
            topP: "0.9",
            questionId: "question-1",
            createdAt: now,
            updatedAt: now,
          },
        },
      ]

      vi.mocked(questionQueries.getQuestionWithAnswers).mockResolvedValue(
        mockQuestionWithAnswers as any
      )

      const res = await app.request("/questions/question-1")

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toHaveLength(2)
      expect(data[0].question).toMatchObject({
        id: "question-1",
        content: "What is AI?",
        userId: mockUserId,
      })
      expect(data[0].answer).toBeNull()
      expect(data[1].question).toMatchObject({
        id: "question-1",
        content: "What is AI?",
        userId: mockUserId,
      })
      expect(data[1].answer).toMatchObject({
        id: "answer-1",
        content: "AI is artificial intelligence",
        temperature: "0.7",
        topP: "0.9",
        questionId: "question-1",
      })
      expect(questionQueries.getQuestionWithAnswers).toHaveBeenCalledWith(
        "question-1",
        mockUserId
      )
    })
  })

  describe("POST /questions/:id/answers", () => {
    test("should generate answer for existing question", async () => {
      const now = new Date()
      const mockQuestionWithAnswers = [
        {
          question: {
            id: "question-1",
            content: "What is JavaScript?",
            userId: mockUserId,
            createdAt: now,
            updatedAt: now,
          },
          answer: null,
        },
      ]

      const mockAnswer = "JavaScript is a programming language"

      vi.mocked(questionQueries.getQuestionWithAnswers).mockResolvedValue(
        mockQuestionWithAnswers as any
      )
      vi.mocked(openaiClient.answerQuestion).mockResolvedValue(mockAnswer)
      vi.mocked(answerQueries.createAnswer).mockResolvedValue([] as any)

      const res = await app.request("/questions/question-1/answers", {
        method: "POST",
        body: JSON.stringify({
          temperature: 0.8,
          topP: 0.95,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toEqual({ success: true })
      expect(questionQueries.getQuestionWithAnswers).toHaveBeenCalledWith(
        "question-1",
        mockUserId
      )
      expect(openaiClient.answerQuestion).toHaveBeenCalledWith(
        "What is JavaScript?",
        0.8,
        0.95
      )
      expect(answerQueries.createAnswer).toHaveBeenCalled()
    })

    test("should return 404 for non-existent question", async () => {
      vi.mocked(questionQueries.getQuestionWithAnswers).mockResolvedValue([])

      const res = await app.request("/questions/non-existent/answers", {
        method: "POST",
        body: JSON.stringify({
          temperature: 0.7,
          topP: 0.9,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      expect(res.status).toBe(404)
      const data = await res.json()
      expect(data).toEqual({ error: "Question not found" })
    })

    test("should validate temperature and topP parameters", async () => {
      const res = await app.request("/questions/question-1/answers", {
        method: "POST",
        body: JSON.stringify({
          temperature: 3, // Invalid
          topP: 0.9,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      expect(res.status).toBe(400)
    })
  })

  describe("POST /questions/:id/answers/explain", () => {
    test("should explain differences between answers", async () => {
      const mockQuestionWithAnswers = [
        {
          question: {
            id: "question-1",
            content: "What is React?",
            userId: mockUserId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          answer: {
            id: "answer-1",
            content: "React is a UI library",
            temperature: "0.5",
            topP: "0.8",
            questionId: "question-1",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
        {
          question: {
            id: "question-1",
            content: "What is React?",
            userId: mockUserId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          answer: {
            id: "answer-2",
            content: "React is a JavaScript library for building UIs",
            temperature: "0.9",
            topP: "0.95",
            questionId: "question-1",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      ]

      const mockExplanation = "The temperature parameter affects randomness..."

      vi.mocked(questionQueries.getQuestionWithAnswers).mockResolvedValue(
        mockQuestionWithAnswers as any
      )
      vi.mocked(openaiClient.explainAnswers).mockResolvedValue(mockExplanation)
      vi.mocked(questionQueries.updateQuestionAnalysis).mockResolvedValue(
        mockQuestionWithAnswers[0].question as any
      )

      const res = await app.request("/questions/question-1/answers/explain", {
        method: "POST",
      })

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toEqual({ explanation: mockExplanation })
      expect(openaiClient.explainAnswers).toHaveBeenCalledWith(
        "What is React?",
        [
          { content: "React is a UI library", temperature: "0.5", topP: "0.8" },
          {
            content: "React is a JavaScript library for building UIs",
            temperature: "0.9",
            topP: "0.95",
          },
        ]
      )
      expect(questionQueries.updateQuestionAnalysis).toHaveBeenCalledWith(
        "question-1",
        mockExplanation
      )
    })

    test("should return existing analysis if available", async () => {
      const mockQuestionWithAnswers = [
        {
          question: {
            id: "question-1",
            content: "What is React?",
            analysis: "Existing explanation",
            userId: mockUserId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          answer: null,
        },
      ]

      vi.mocked(questionQueries.getQuestionWithAnswers).mockResolvedValue(
        mockQuestionWithAnswers as any
      )

      const res = await app.request("/questions/question-1/answers/explain", {
        method: "POST",
      })

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toEqual({ explanation: "Existing explanation" })
      expect(openaiClient.explainAnswers).not.toHaveBeenCalled()
    })

    test("should return 404 for non-existent question", async () => {
      vi.mocked(questionQueries.getQuestionWithAnswers).mockResolvedValue([])

      const res = await app.request("/questions/non-existent/answers/explain", {
        method: "POST",
      })

      expect(res.status).toBe(404)
      const data = await res.json()
      expect(data).toEqual({ error: "Question not found" })
    })

    test("should return 404 when no answers exist", async () => {
      const mockQuestionWithAnswers = [
        {
          question: {
            id: "question-1",
            content: "What is React?",
            userId: mockUserId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          answer: null,
        },
      ]

      vi.mocked(questionQueries.getQuestionWithAnswers).mockResolvedValue(
        mockQuestionWithAnswers as any
      )

      const res = await app.request("/questions/question-1/answers/explain", {
        method: "POST",
      })

      expect(res.status).toBe(404)
      const data = await res.json()
      expect(data).toEqual({ error: "No answers found" })
    })
  })

  describe("DELETE /questions/:id", () => {
    test("should delete question successfully", async () => {
      const now = new Date()
      const mockDeletedQuestion = [
        {
          id: "question-1",
          content: "What is TypeScript?",
          userId: mockUserId,
          createdAt: now.toISOString(),
          updatedAt: now.toISOString(),
        },
      ]

      vi.mocked(questionQueries.deleteQuestion).mockResolvedValue([
        {
          id: "question-1",
          content: "What is TypeScript?",
          userId: mockUserId,
          createdAt: now,
          updatedAt: now,
        },
      ] as any)

      const res = await app.request("/questions/question-1", {
        method: "DELETE",
      })

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toEqual(mockDeletedQuestion)
      expect(questionQueries.deleteQuestion).toHaveBeenCalledWith(
        "question-1",
        mockUserId
      )
    })
  })
})
