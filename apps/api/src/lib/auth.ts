import "dotenv/config"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@/db"
import { openAPI } from "better-auth/plugins"

export const auth = betterAuth({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.grammar.so"
      : "http://localhost:3001",
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [openAPI()],
  trustedOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://app.grammar.so",
    "https://api.grammar.so",
    "https://grammar.so",
  ],
  advanced: {
    crossSubDomainCookies: {
      enabled: process.env.NODE_ENV === "production",
      domain: ".grammar.so",
    },
  },
})
