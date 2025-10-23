import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                AI
              </span>
            </div>
            <span className="font-semibold">AI Lab</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © 2024 AI Lab by Ruben Murga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
