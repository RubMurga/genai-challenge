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
import { Footer } from "@/components/footer"
import { DashboardPreview } from "@/components/dashboard-preview"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/80 to-muted/60 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blur circles */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-4 w-96 h-96 bg-primary/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rotate-45 rounded-lg blur-xl"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/8 rotate-12 rounded-2xl blur-lg"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-primary/10 -rotate-12 rounded-full blur-2xl"></div>
        <div className="absolute top-3/4 left-1/3 w-28 h-28 bg-primary/8 rotate-45 rounded-lg blur-xl"></div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[size:40px_40px]"></div>

        {/* Additional decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-primary/6 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/5 w-12 h-12 bg-primary/7 rounded-full blur-lg"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center relative">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo-dark.png"
              alt="Grammar Logo"
              width={110}
              height={100}
            />
          </Link>
          <div className="flex items-center space-x-2 absolute right-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative bg-background/50">
        {/* Decorative shapes for hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2  mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-primary font-medium">
              AI-Powered Marketing Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Create Marketing from
            <br />
            <span className="text-primary">just words</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get users with natural language—no marketing degree required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all"
              asChild
            >
              <Link href="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-4 py-20 relative bg-gradient-to-br from-muted/90 via-muted/80 to-muted/70 rounded-3xl my-8 border-2 border-border shadow-lg overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <ScrollAnimation direction="right" delay={0.1}>
              <div className="text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mb-6">
                  The Challenge
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Built Your Product.{" "}
                  <span className="text-primary">Now What?</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    You just created an amazing product. But when it comes to
                    marketing, you&apos;re suddenly lost in a maze of unfamiliar
                    terms, endless options, and conflicting advice.
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    We change that.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Simple Input Interface */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="relative">
                <Card className="bg-card border-2 shadow-2xl">
                  <CardHeader className="border-b bg-muted/30">
                    <CardTitle className="text-lg">
                      Describe your product
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {/* User Input */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm font-semibold text-primary">
                            You
                          </span>
                        </div>
                        <div className="flex-1 bg-muted/50 rounded-lg p-4">
                          <p className="text-sm">
                            I built a fitness app that helps people track
                            workouts. I want to reach people aged 25-40 who are
                            interested in home fitness. Can you help me create
                            content for Instagram?
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 text-primary-foreground"
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
                        <div className="flex-1 bg-primary/5 border border-primary/20 rounded-lg p-4">
                          <p className="text-sm text-foreground mb-2">
                            <strong>
                              I&apos;ve created your marketing plan:
                            </strong>
                          </p>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>✓ 10 Instagram posts ready to publish</li>
                            <li>✓ Content calendar for the next month</li>
                            <li>✓ Hashtag strategy included</li>
                            <li>✓ Best posting times optimized</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="flex gap-1">
                        <div
                          className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                      <span>Creating your marketing content...</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 py-20 relative bg-muted/40 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See It In Action
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the power of our platform
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative">
                <DashboardPreview />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 relative bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits, Not Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform delivers outcomes that matter to you, not a list of
              technical capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Get Customers in Days, Not Months",
                description:
                  "Skip the months of marketing learning curve and start getting real customers within days of launching your product.",
              },
              {
                icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
                title: "Marketing That Speaks Your Language",
                description:
                  "No marketing jargon or buzzwords—just clear, straightforward guidance that makes sense to you.",
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "No Marketing Degree Required",
                description:
                  "Let our platform handle the complex marketing strategy while you focus on what you do best—building great products.",
              },
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Scale Without the Learning Curve",
                description:
                  "As your product grows, our platform grows with you, automatically adapting strategies to your changing needs.",
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
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Language Section */}
      <section className="container mx-auto px-4 py-20 relative bg-muted/40 rounded-3xl my-20 border border-border/50 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/5 rounded-lg blur-2xl rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-background text-sm font-medium mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Natural Language Marketing: As Simple as Talking
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The same conversational, intuitive approach that makes natural
              language powerful, now applied to creating marketing content for
              social networks.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="container mx-auto px-4 py-20 relative bg-gradient-to-br from-muted/40 via-muted/30 to-muted/30 rounded-3xl my-8 border-2 border-border shadow-lg overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/6 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/5 rounded-lg blur-xl rotate-12"></div>
        <div className="max-w-6xl mx-auto relative z-10">
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

      {/* Why Choose Our Platform Section */}
      <section className="container mx-auto px-4 py-20 relative bg-muted/30">
        <div className="max-w-6xl mx-auto">
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50"></div>
              <Card className="relative bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 border-border/50 shadow-2xl">
                <CardContent className="py-16 px-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium mb-6">
                    Ready to Get Started?
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Ready to Turn Products into Customers?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join hundreds of creators who&apos;ve transformed their
                    marketing approach with our platform. Create social media
                    marketing content with natural language—no marketing degree
                    required.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                      asChild
                    >
                      <Link href="/sign-up">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}
