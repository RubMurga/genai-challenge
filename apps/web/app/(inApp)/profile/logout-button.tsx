"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { authClient } from "@/lib/auth"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
export function LogoutButton() {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      toast.success("Signed out successfully")
      await authClient.signOut()
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <Button variant="outline" onClick={handleLogout} className="w-full">
      <LogOut className="w-4 h-4 mr-2" />
      Sign Out
    </Button>
  )
}
