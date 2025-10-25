"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Plus } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function QuestionFormSheet() {
  const [content, setContent] = useState("")
  const [temperature, setTemperature] = useState([0.7])
  const [topT, setTopT] = useState("")
  const [open, setOpen] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission functionality
    console.log("Form submitted:", {
      content,
      temperature: temperature[0],
      topT,
    })
    // Close the sheet after successful submission
    setOpen(false)
  }

  const handleCancel = () => {
    // Reset form fields
    setContent("")
    setTemperature([0.7])
    setTopT("")
    // Close the sheet
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Ask Question
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <SheetTitle>Ask a New Question</SheetTitle>
          <SheetDescription>
            Create a new question with custom AI parameters to get the most
            relevant and helpful response. Adjust the settings below to control
            how the AI will process and respond to your question.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <form onSubmit={handleSubmit} className="px-4 space-y-4">
            {/* Content Field */}
            <div className="space-y-2">
              <Label htmlFor="content">Question Content *</Label>
              <Textarea
                id="content"
                placeholder="What would you like to know? Ask your question here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[120px] resize-none"
                required
              />
              <p className="text-xs text-muted-foreground">
                Be specific and include context to get better answers.
              </p>
            </div>

            {/* Temperature Slider */}
            <div className="space-y-3">
              <Label htmlFor="temperature">Temperature: {temperature[0]}</Label>
              <Slider
                id="temperature"
                value={temperature}
                onValueChange={setTemperature}
                min={0}
                max={2}
                step={0.1}
                className="w-full"
              />
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">
                  Controls creativity: 0 = focused, 2 = very creative
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>
                    • <strong>0.0-0.3:</strong> Focused, deterministic
                  </li>
                  <li>
                    • <strong>0.4-0.7:</strong> Balanced (recommended)
                  </li>
                  <li>
                    • <strong>0.8-1.2:</strong> Creative, varied
                  </li>
                  <li>
                    • <strong>1.3-2.0:</strong> Highly experimental
                  </li>
                </ul>
              </div>
            </div>

            {/* Top T Field */}
            <div className="space-y-4">
              <Label htmlFor="topT">Top T (Optional)</Label>
              <Input
                id="topT"
                type="number"
                placeholder="Enter top T value (0.0 - 1.0)"
                value={topT}
                onChange={(e) => setTopT(e.target.value)}
                min="0"
                max="1"
                step="0.01"
              />
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">
                  Controls word diversity: 0 = focused, 1 = varied
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>
                    • <strong>0.1-0.3:</strong> Focused, repetitive
                  </li>
                  <li>
                    • <strong>0.4-0.6:</strong> Balanced (recommended)
                  </li>
                  <li>
                    • <strong>0.7-0.9:</strong> Varied choices
                  </li>
                  <li>
                    • <strong>1.0:</strong> Maximum diversity
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic">
                  Leave empty for default (0.7)
                </p>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <h4 className="text-sm font-medium text-foreground">
                💡 Tips for Better Results
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Be specific and detailed in your questions</li>
                <li>• Include context about your background</li>
                <li>• Specify your experience level for technical questions</li>
                <li>• Higher temperature = more creative, less accurate</li>
                <li>• Lower temperature = more focused, consistent</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={!content.trim()}>
                Create Question
              </Button>
            </div>
          </form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
