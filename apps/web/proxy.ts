import { NextResponse, NextRequest } from "next/server"
import { getServerSession } from "@/lib/auth-server"

export async function proxy(request: NextRequest) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/questions", "/profile"],
}
