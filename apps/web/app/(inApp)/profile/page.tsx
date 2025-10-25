import { getServerSession } from "@/lib/auth-server"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Mail, Shield, User } from "lucide-react"
import { LogoutButton } from "./logout-button"

export default async function Profile() {
  const session = await getServerSession()

  if (!session?.user) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">
          Please log in to view your profile.
        </p>
      </div>
    )
  }

  const { user } = session

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">
          View your account information and settings
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </CardTitle>
          <CardDescription>
            Your basic account details and profile information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src={user.image || undefined}
                alt={user.name || "User"}
              />
              <AvatarFallback className="text-lg">
                {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">
                {user.name || "No name set"}
              </h3>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{user.email}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Email Status
              </label>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <Badge variant={user.emailVerified ? "default" : "secondary"}>
                  {user.emailVerified ? "Verified" : "Unverified"}
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                User ID
              </label>
              <p className="text-sm font-mono bg-muted px-2 py-1 rounded">
                {user.id}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Account Timeline
          </CardTitle>
          <CardDescription>
            Important dates and account activity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Account Created
              </label>
              <p className="text-sm">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Not available"}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Last Updated
              </label>
              <p className="text-sm">
                {user.updatedAt
                  ? new Date(user.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Not available"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Summary</CardTitle>
          <CardDescription>
            Overview of your account status and information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {user.emailVerified ? "✓" : "⚠"}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Email {user.emailVerified ? "Verified" : "Pending"}
              </div>
            </div>

            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {user.image ? "✓" : "○"}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {user.image ? "Profile Picture" : "No Picture"}
              </div>
            </div>

            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {user.name ? "✓" : "○"}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {user.name ? "Name Set" : "No Name"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <CardDescription>Manage your account and session</CardDescription>
        </CardHeader>
        <CardContent>
          <LogoutButton />
        </CardContent>
      </Card>
    </div>
  )
}
