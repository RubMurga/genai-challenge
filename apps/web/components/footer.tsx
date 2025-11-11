import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center mb-4 md:mb-0">
            <Image
              src="/logos/logo-dark.png"
              alt="Grammar Logo"
              width={110}
              height={100}
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            © 2024 Grammar by Harlan Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
