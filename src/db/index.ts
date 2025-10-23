import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "@/db/schema.js"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
})

const db = drizzle(pool, { schema, casing: "snake_case" })

export default db
