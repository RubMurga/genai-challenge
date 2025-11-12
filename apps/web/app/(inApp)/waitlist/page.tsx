import { CheckCircle2 } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { getOnboardingCount } from "@/lib/api"
export default async function Waitlist() {
  const count = await getOnboardingCount()

  return (
    <div className="min-h-screen bg-background md:flex md:items-center">
      <div className="container mx-auto px-4 py-8 md:py-12 w-full">
        <div className="max-w-2xl mx-auto">
          <section className="relative bg-card rounded-2xl my-6 border border-border shadow-lg">
            <div className="p-5 md:p-6">
              <ScrollAnimation direction="up" delay={0.1}>
                <div className="text-center mb-5">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h1 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                    Thank You!
                  </h1>
                  <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
                    We&apos;ve received your information and added you to our
                    waitlist.
                  </p>
                  <div className="flex flex-col items-center gap-2 px-6 py-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-muted-foreground">
                      You are person number
                    </p>
                    <div className="text-3xl font-bold text-primary">
                      {count.count}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      on our waitlist
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.2}>
                <div className="pt-4 border-t border-border">
                  <h2 className="text-base font-semibold mb-2 text-foreground">
                    What&apos;s Next?
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Thank you for your interest! We&apos;ll notify you as soon
                    as we have updates about your access. Stay tuned for more
                    information.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
