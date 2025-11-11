"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="w-full max-w-7xl mx-auto">
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
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-[1fr_320px] divide-x divide-border">
            {/* Left Side: Dashboard */}
            <div className="p-6 space-y-6">
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
                  <p className="text-xs text-muted-foreground">
                    from last month
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    Total Impressions
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold">5,678</p>
                    <Badge
                      variant="outline"
                      className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                    >
                      ↑ 12.5%
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    from last month
                  </p>
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
                  <p className="text-xs text-muted-foreground">
                    from last month
                  </p>
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
                  <p className="text-xs text-muted-foreground">
                    from last month
                  </p>
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      likes: "2,143",
                      views: "6,221",
                      comments: "151",
                      image: "/landing-preview/IMG_6142.JPG",
                      platform: "TikTok",
                      platformLogo: "/social_logos/tiktok.png",
                    },
                    {
                      cpi: "$2.79",
                      likes: "4,171",
                      views: "2,113",
                      comments: "99",
                      image: "/landing-preview/IMG_6143.JPG",
                      platform: "Instagram",
                      platformLogo: "/social_logos/instagram.png",
                    },
                    {
                      likes: "1,562",
                      views: "824",
                      comments: "51",
                      image: "/landing-preview/IMG_6144.JPG",
                      platform: "TikTok",
                      platformLogo: "/social_logos/tiktok.png",
                    },
                    {
                      cpi: "$2.99",
                      likes: "7,843",
                      views: "7,843",
                      comments: "451",
                      image: "/landing-preview/IMG_6147.JPG",
                      platform: "Meta",
                      platformLogo: "/social_logos/facebook.png",
                    },
                  ].map((post, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <div className="aspect-[9/16] relative overflow-hidden bg-muted">
                        <Image
                          src={post.image}
                          alt={`Post ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-2 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src={post.platformLogo}
                              alt={post.platform}
                              width={16}
                              height={16}
                              className="object-contain"
                            />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">
                            {post.platform}
                          </span>
                        </div>
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
                <div className="grid grid-cols-2 gap-3">
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
                      logo: "/social_logos/instagram.png",
                    },
                  ].map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-2 p-3 rounded-lg bg-muted/30"
                    >
                      <div className="flex items-center gap-2">
                        {activity.logo && (
                          <div className="w-5 h-5 rounded bg-background flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src={activity.logo}
                              alt=""
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </div>
                        )}
                        <span className="text-xs font-medium truncate">
                          {activity.action}
                        </span>
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
                <div className="grid grid-cols-2 gap-3">
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
                      logo: "/social_logos/instagram.png",
                    },
                    {
                      platform: "X",
                      handle: "",
                      status: "Connect",
                      isAction: true,
                      logo: "/social_logos/x.png",
                    },
                  ].map((account, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-2 p-3 rounded-lg bg-muted/30"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-background flex items-center justify-center overflow-hidden shrink-0">
                          <Image
                            src={account.logo}
                            alt={account.platform}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium truncate">
                            {account.platform}
                          </p>
                          {account.handle && (
                            <p className="text-xs text-muted-foreground truncate">
                              {account.handle}
                            </p>
                          )}
                        </div>
                      </div>
                      {account.isAction ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs w-full"
                        >
                          {account.status}
                        </Button>
                      ) : (
                        <Badge
                          variant="outline"
                          className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 w-fit"
                        >
                          {account.status}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: AI Content Planner */}
            <div className="p-6 space-y-4 border-l border-border">
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-lg font-semibold">
                  Content Planner
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              {/* Product Overview Card */}
              <Card className="bg-muted/30 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    product_overview.md
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Create an organic TikTok content strategy to market our app.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 text-xs">
                    Restore Checkpoint
                  </Button>
                </CardContent>
              </Card>

              {/* AI Thought Process */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Thought for 3 seconds
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <svg
                      className="w-4 h-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Called Grammar backend</span>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                      load_social_platforms
                    </code>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <svg
                      className="w-4 h-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Called Grammar backend</span>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                      create_content_plan
                    </code>
                  </div>
                </div>
              </div>

              {/* AI Strategy Response */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-4">
                  <h4 className="text-sm font-semibold mb-3">
                    Organic TikTok Content Strategy
                  </h4>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>
                      Create video concepts and scripts for 2-3 posts targeting
                      college-age audiences, with engaging hooks and content
                      ideas tailored to TikTok&apos;s format.
                    </li>
                    <li>
                      Create ready-to-use content for 3-5 TikTok posts per week
                      with captions, hashtags, and posting recommendations.
                    </li>
                    <li>
                      Provide content variations and A/B testing suggestions to
                      help optimize your posts for better engagement.
                    </li>
                  </ol>
                  <p className="text-sm text-muted-foreground mt-3">
                    Give me the order and I&apos;ll get to work.
                  </p>
                </CardContent>
              </Card>

              {/* Input Area */}
              <div className="space-y-3 pt-2 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-foreground">
                    ∞ Agent I
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-sm opacity-50"></div>
                  <div className="relative flex items-end gap-2 bg-background rounded-lg p-1 border-2 border-primary/30">
                    <Textarea
                      placeholder="Tell me about your product and I'll create a marketing strategy..."
                      className="min-h-[100px] resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-sm"
                    />
                    <Button size="sm" className="mb-1 shrink-0">
                      Send →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
