"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"

export default function LearnMore() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                AI
              </span>
            </div>
            <span className="text-xl font-bold">AI Lab</span>
          </Link>
          <Button variant="outline" size="sm" onClick={() => router.back()}>
            Back
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Learn More About AI Lab
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover how AI Lab empowers you to experiment with artificial
            intelligence through customizable parameters and intelligent
            question management.
          </p>
        </div>
      </section>

      {/* What is AI Lab Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is AI Lab?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI Lab is a powerful platform designed for AI experimentation and
              learning
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Your AI Experimentation Hub
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    AI Lab provides a comprehensive environment for testing,
                    learning, and experimenting with artificial intelligence.
                    Whether you&apos;re a researcher, developer, student, or AI
                    enthusiast, our platform gives you the tools to explore AI
                    capabilities with full control over the parameters that
                    shape responses.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Create and manage custom question libraries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Fine-tune AI behavior with advanced parameters
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compare responses across different settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Learn through hands-on experimentation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      Experiment & Learn
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Hands-on learning through AI parameter experimentation
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Deep Dive */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features Explained
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the powerful capabilities that make AI Lab unique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Question Management</CardTitle>
                <CardDescription>
                  Build comprehensive libraries of questions for systematic
                  testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Create, organize, and manage your questions with ease. Build
                    different categories for various testing scenarios, from
                    technical queries to creative prompts.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Systematic testing across question types</li>
                      <li>• Easy organization and categorization</li>
                      <li>• Reusable question libraries</li>
                      <li>• Consistent evaluation metrics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Instant AI Responses</CardTitle>
                <CardDescription>
                  Get immediate AI responses to your custom questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Submit your questions and receive AI responses instantly.
                    Experience the power of modern AI with your custom queries
                    and see how different parameters affect the quality and
                    style of responses.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Real-time response generation</li>
                      <li>• High-quality AI models</li>
                      <li>• Response history tracking</li>
                      <li>• Export capabilities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parameter Control Deep Dive */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Understanding AI Parameters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to control AI behavior through advanced parameter
              settings
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Temperature Control
                </CardTitle>
                <CardDescription>
                  Control creativity and randomness in AI responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Conservative (0.1)</span>
                      <span>Balanced (0.7)</span>
                      <span>Creative (1.0)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">How it works:</h4>
                      <p className="text-sm text-muted-foreground">
                        Temperature controls the randomness of token selection.
                        Lower values make the AI more deterministic and focused,
                        while higher values increase creativity and variety.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          Low Temperature
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          More predictable, consistent responses
                        </p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          High Temperature
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          More creative, varied responses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  Top-T Control
                </CardTitle>
                <CardDescription>
                  Limit vocabulary diversity in AI responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Focused (10)</span>
                      <span>Balanced (50)</span>
                      <span>Diverse (100)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full w-1/2"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">How it works:</h4>
                      <p className="text-sm text-muted-foreground">
                        Top-T limits the AI to consider only the top T most
                        likely tokens at each step. This controls vocabulary
                        diversity and response quality.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          Low Top-T
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          More focused vocabulary choices
                        </p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          High Top-T
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          More diverse word selection
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Can Benefit from AI Lab?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI Lab is designed for a wide range of users and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <CardTitle>Researchers & Academics</CardTitle>
                <CardDescription>
                  Perfect for AI research and academic studies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Test AI model performance</li>
                  <li>• Compare parameter effects</li>
                  <li>• Generate research data</li>
                  <li>• Validate hypotheses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <CardTitle>Developers & Engineers</CardTitle>
                <CardDescription>
                  Ideal for AI application development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Prototype AI features</li>
                  <li>• Test prompt engineering</li>
                  <li>• Optimize model parameters</li>
                  <li>• Debug AI responses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <CardTitle>Students & Learners</CardTitle>
                <CardDescription>
                  Great for learning AI concepts hands-on
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Understand AI behavior</li>
                  <li>• Learn parameter effects</li>
                  <li>• Practice prompt design</li>
                  <li>• Explore AI capabilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Challenge Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Challenge Project
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI Lab is a demonstration of modern web development technologies
              and AI integration
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Built with Modern Technologies
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    This AI Lab application showcases a comprehensive technical
                    challenge combining cutting-edge web technologies with
                    artificial intelligence. Built by{" "}
                    <strong>Ruben Murga</strong>, this project demonstrates
                    expertise in modern full-stack development and AI
                    integration.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-primary">
                        Frontend
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Next.js 16 with App Router</li>
                        <li>• TypeScript for type safety</li>
                        <li>• Tailwind CSS for styling</li>
                        <li>• Server-Side Rendering (SSR)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-primary">
                        AI Integration
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Custom AI parameter controls</li>
                        <li>• Temperature & Top-T tuning</li>
                        <li>• Question management system</li>
                        <li>• Real-time AI responses</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Ruben Murga</strong>
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      Technical Excellence
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Demonstrating proficiency in Next.js, TypeScript, SSR, and
                      AI integration
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
