"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="bg-card border-border overflow-hidden">
        <CardHeader className="border-b bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 ml-2">
              <Image
                src="/logos/logo-dark.png"
                alt="Logo"
                width={82}
                height={82}
                className="object-contain"
              />
            </div>
            <Badge
              variant="outline"
              className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
            >
              Preview Demo
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Reached Users</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">18,489</p>
                <Badge
                  variant="outline"
                  className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                >
                  ↑ 8.2%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Total Impressions</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">5,678</p>
                <Badge
                  variant="outline"
                  className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                >
                  ↑ 12.5%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Ad Spend</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">$12,542</p>
                <Badge
                  variant="outline"
                  className="text-xs bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
                >
                  ↓ 4.3%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">ROAS</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">3.2x</p>
                <Badge
                  variant="outline"
                  className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                >
                  ↑ 12.5%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
          </div>

          {/* Live Posts Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                Live Posts
              </h3>
              <Button variant="ghost" size="sm" className="text-xs">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { likes: "2,143", views: "6,221", comments: "151" },
                {
                  cpi: "$2.79",
                  likes: "4,171",
                  views: "2,113",
                  comments: "99",
                },
                { likes: "1,562", views: "824", comments: "51" },
                {
                  cpi: "$2.99",
                  likes: "7,843",
                  views: "7,843",
                  comments: "451",
                },
                {
                  cpi: "$2.47",
                  likes: "3,178",
                  views: "6,120",
                  comments: "204",
                },
                { likes: "1,562", views: "824", comments: "65" },
              ].map((post, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <CardContent className="p-2 space-y-1">
                    {post.cpi && (
                      <p className="text-xs font-semibold text-primary">
                        {post.cpi} CPI
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.likes}</span>
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a1 1 0 001.477.89l4.2-2.1a1 1 0 00.323-.21l2.6-2.6a1 1 0 00.14-1.21l-1.818-3.636a.5.5 0 00-.722-.258L6 10.333z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.views}</span>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.comments}</span>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Activity
            </h3>
            <div className="space-y-3">
              {[
                {
                  action: "TikTok Post Created",
                  time: "2min ago",
                  logo: "/social_logos/tiktok.png",
                },
                {
                  action: "Ad Approved",
                  time: "37min ago",
                  logo: "/social_logos/facebook.png",
                },
                {
                  action: "TikTok Post Created",
                  time: "1hr ago",
                  logo: "/social_logos/tiktok.png",
                },
                {
                  action: "IG Post Created",
                  time: "3hrs ago",
                  logo: "/social_logos/instagram.webp",
                },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    {activity.logo && (
                      <div className="w-6 h-6 rounded bg-background flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image
                          src={activity.logo}
                          alt=""
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="text-sm">{activity.action}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Accounts */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Accounts
            </h3>
            <div className="space-y-2">
              {[
                {
                  platform: "TikTok",
                  handle: "@TryItOnAI",
                  status: "Connected",
                  logo: "/social_logos/tiktok.png",
                },
                {
                  platform: "Meta",
                  handle: "@TryItOnAI",
                  status: "Connected",
                  logo: "/social_logos/facebook.png",
                },
                {
                  platform: "Instagram",
                  handle: "@TryItOnAI",
                  status: "Connected",
                  logo: "/social_logos/instagram.webp",
                },
                {
                  platform: "X",
                  handle: "@TryItOnAI",
                  status: "Connect",
                  isAction: true,
                  logo: "/social_logos/x.png",
                },
              ].map((account, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-background flex items-center justify-center overflow-hidden">
                      <Image
                        src={account.logo}
                        alt={account.platform}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{account.platform}</p>
                      <p className="text-xs text-muted-foreground">
                        {account.handle}
                      </p>
                    </div>
                  </div>
                  {account.isAction ? (
                    <Button variant="outline" size="sm" className="text-xs">
                      {account.status}
                    </Button>
                  ) : (
                    <Badge
                      variant="outline"
                      className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                    >
                      {account.status}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
