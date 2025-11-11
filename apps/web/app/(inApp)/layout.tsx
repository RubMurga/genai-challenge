import { Toaster } from "@/components/ui/sonner"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import AppSidebar from "./sideBar"
import { getServerSession } from "@/lib/auth-server"
import Link from "next/link"
import Image from "next/image"

export default async function InAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <SidebarProvider>
      <Toaster />
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 relative">
          <SidebarTrigger className="-ml-1" />
          <div className="flex-1" />
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logos/logo-dark.png"
              alt="Grammar Logo"
              width={110}
              height={64}
            />
          </Link>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">
                {session?.user?.name || "User"}
              </p>
              <p className="text-xs text-muted-foreground">
                {session?.user?.email || "user@example.com"}
              </p>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="text-xs">
                {session?.user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
