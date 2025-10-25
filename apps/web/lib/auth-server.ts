import { headers } from "next/headers"

export async function getServerSession() {
  try {
    const headersList = await headers()
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/get-session`,
      {
        headers: {
          cookie: headersList.get("cookie") || "",
        },
      }
    )

    if (!response.ok) {
      return null
    }

    const session = await response.json()
    return session
  } catch (error) {
    console.error("Error getting server session:", error)
    return null
  }
}

export async function getServerCookieHeaders() {
  const headersList = await headers()
  return {
    cookie: headersList.get("cookie") || "",
  }
}
