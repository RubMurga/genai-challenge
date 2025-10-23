import { message } from "@/db/schema"
import { db } from "@/db"
import { eq } from "drizzle-orm"

export const createMessage = async (content: string, userId: string) => {
  const newMessage = await db
    .insert(message)
    .values({ content, userId })
    .returning()
  return newMessage
}

export const getMessages = async (userId: string) => {
  const messages = await db
    .select()
    .from(message)
    .where(eq(message.userId, userId))
  return messages
}
