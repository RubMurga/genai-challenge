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
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function LearnMore() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
          <div className="flex-1" />
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <Image
              src="/logos/logo-dark.png"
              alt="Logo"
              width={110}
              height={100}
            />
          </Link>
          <div className="flex-1 flex justify-end">
            <Button variant="outline" size="sm" onClick={() => router.back()}>
              Back
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative bg-background/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Learn More About Our Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover how our platform empowers you to create marketing content
              for social networks using natural language—no marketing degree
              required.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* What is Platform Section */}
      <section className="container mx-auto px-4 py-20 relative bg-gradient-to-br from-muted/90 via-muted/80 to-muted/70 rounded-3xl my-8 border-2 border-border shadow-lg overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mb-4">
                Platform Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What is Our Platform?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A powerful platform designed to help you create marketing
                content for social networks using natural language
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <Card className="mb-12 border-2 bg-card shadow-xl">
              <CardContent className="py-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <ScrollAnimation direction="right" delay={0.3}>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Your Marketing Content Hub
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Our platform provides a comprehensive environment for
                        creating, managing, and launching marketing content on
                        social networks. Whether you&apos;re an entrepreneur,
                        small business owner, or creator, our platform gives you
                        the tools to create effective marketing content using
                        simple natural language—no marketing expertise required.
                      </p>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Create marketing content with natural language
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Generate tailored content for multiple social
                            networks
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Track performance and optimize your campaigns
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Scale successful content automatically</span>
                        </li>
                      </ul>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="left" delay={0.4}>
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
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                          Create & Launch
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Natural language marketing content creation made
                          simple
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="container mx-auto px-4 py-20 relative bg-gradient-to-br from-muted/40 via-muted/30 to-muted/30 rounded-3xl my-8 border-2 border-border shadow-lg overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/6 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/5 rounded-lg blur-xl rotate-12"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mb-4">
                For Everyone
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who Can Benefit?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform is designed for anyone with a product to market
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Entrepreneurs & Startups",
                description: "Perfect for launching new products and services",
                items: [
                  "Launch products quickly",
                  "Reach target audiences",
                  "Build brand awareness",
                  "Generate early customers",
                ],
              },
              {
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                title: "Small Business Owners",
                description: "Ideal for growing local and online businesses",
                items: [
                  "Expand online presence",
                  "Connect with customers",
                  "Promote products and services",
                  "Compete with larger brands",
                ],
              },
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "Creators & Content Makers",
                description:
                  "Great for promoting your creative work and projects",
                items: [
                  "Promote creative projects",
                  "Build an audience",
                  "Market digital products",
                  "Grow your brand",
                ],
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} direction="up" delay={idx * 0.1}>
                <Card
                  className={`hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20 group ${
                    idx % 2 === 0
                      ? "!bg-white dark:!bg-muted/20"
                      : "!bg-gradient-to-br !from-primary/10 !via-primary/5 !to-primary/10"
                  }`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-lg flex items-center justify-center mb-4">
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
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Deep Dive */}
      <section className="container mx-auto px-4 py-20 relative bg-muted/40 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-background text-sm font-medium mb-4">
                Key Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key Features Explained
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding the powerful capabilities that make our platform
                unique
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Natural Language Input",
                description:
                  "Describe your product and goals in plain language",
                content:
                  "Simply tell our platform about your product, target audience, and marketing goals using everyday language. No marketing jargon or technical expertise required—just describe what you want to achieve.",
                benefits: [
                  "No marketing degree needed",
                  "Intuitive and easy to use",
                  "Works for any product type",
                  "Clear, straightforward process",
                ],
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Automated Content Generation",
                description:
                  "Get tailored marketing content for social networks instantly",
                content:
                  "Our platform generates comprehensive marketing content tailored to your product and optimized for different social networks. Get ready-to-use posts, captions, and strategies that match your brand voice and target audience.",
                benefits: [
                  "Multi-platform content generation",
                  "Brand-consistent messaging",
                  "Audience-specific optimization",
                  "Ready-to-publish content",
                ],
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} direction="up" delay={idx * 0.1 + 0.2}>
                <Card
                  className={`hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group ${
                    idx % 2 === 0
                      ? "!bg-white dark:!bg-muted/20"
                      : "!bg-gradient-to-br !from-primary/10 !via-primary/5 !to-primary/10"
                  }`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
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
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{item.content}</p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          {idx === 0 ? "Benefits:" : "Features:"}
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {item.benefits.map((benefit, i) => (
                            <li key={i}>• {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Deep Dive */}
      <section className="container mx-auto px-4 py-20 relative bg-muted/40 rounded-3xl my-20 border border-border/50 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/5 rounded-lg blur-2xl rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-background text-sm font-medium mb-4">
                How It Works
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple, intuitive workflow that transforms your product vision
                into marketing success
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Describe",
                description: "Tell us about your product in plain language",
                content:
                  "Simply describe your product, who it's for, and what you want to achieve. No marketing jargon needed—just talk about your product naturally.",
                example:
                  'Example: "I have a fitness app for busy professionals who want quick workouts. I want to reach more users on Instagram and Twitter."',
              },
              {
                step: "2",
                title: "Generate",
                description: "Get tailored marketing content instantly",
                content:
                  "Our platform creates comprehensive marketing content tailored to your product and optimized for each social network. Get posts, captions, and strategies ready to use.",
                example:
                  "You'll receive platform-specific content, hashtag suggestions, posting schedules, and engagement strategies.",
              },
              {
                step: "3",
                title: "Execute",
                description: "Launch and track your campaigns",
                content:
                  "Launch your marketing content on social networks with step-by-step guidance. Track performance in real-time and optimize based on what works best.",
                example:
                  "Monitor engagement, identify top-performing content, and scale successful posts automatically.",
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} direction="up" delay={idx * 0.1 + 0.2}>
                <Card
                  className={`hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group ${
                    idx % 2 === 0
                      ? "!bg-white dark:!bg-muted/20"
                      : "!bg-gradient-to-br !from-primary/10 !via-primary/5 !to-primary/10"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {item.step}
                        </span>
                      </div>
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {item.content}
                      </p>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">
                          {item.example}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 relative bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mb-4">
                Platform Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real benefits that help you grow your business and reach more
                customers
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Save Time & Money",
                description:
                  "Skip expensive marketing agencies and time-consuming research",
                content:
                  "Create professional marketing content in minutes instead of spending hours or thousands on agencies. Get results fast without the learning curve.",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "No Marketing Experience Needed",
                description:
                  "Get professional results without marketing expertise",
                content:
                  "You don't need a marketing degree or years of experience. Just describe your product naturally, and we'll handle the rest.",
              },
              {
                icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                title: "Reach More Customers",
                description:
                  "Expand your reach across multiple social networks",
                content:
                  "Create optimized content for Instagram, Twitter, Facebook, and more. Reach your target audience wherever they are, all from one platform.",
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Track What Works",
                description:
                  "See which content performs best and optimize automatically",
                content:
                  "Monitor engagement and performance in real-time. Our platform automatically identifies successful content and helps you scale what works.",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Get Started Immediately",
                description:
                  "Start creating marketing content in minutes, not weeks",
                content:
                  "No lengthy onboarding or complex setup. Sign up, describe your product, and start generating marketing content right away.",
              },
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Grow With Your Business",
                description: "Scale your marketing as your product grows",
                content:
                  "Whether you're just starting or scaling up, our platform adapts to your needs. Create more content, reach more platforms, and grow your audience.",
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} direction="up" delay={idx * 0.1}>
                <Card
                  className={`hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20 group ${
                    idx % 2 === 0
                      ? "!bg-white dark:!bg-muted/20"
                      : "!bg-gradient-to-br !from-primary/10 !via-primary/5 !to-primary/10"
                  }`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-lg flex items-center justify-center mb-4">
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
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
