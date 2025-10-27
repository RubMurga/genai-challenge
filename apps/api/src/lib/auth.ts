import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@/db"
import { openAPI } from "better-auth/plugins"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [openAPI()],
  trustedOrigins: [
    "http://localhost:3000",
    "https://app.genai.harlanresearch.io",
    "https://genai.harlanresearch.io",
  ],
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: "app.genai.harlanresearch.io",
    },
  },
})
