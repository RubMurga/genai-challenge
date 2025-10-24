import { headers } from "next/headers"
import { authClient } from "@/lib/auth"
import { NextResponse, NextRequest } from "next/server"

export async function proxy(request: NextRequest) {
  /*
  const session = await authClient.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  */

  return NextResponse.next()
}

export const config = {
  runtime: "nodejs",
  matcher: ["/questions"],
}
