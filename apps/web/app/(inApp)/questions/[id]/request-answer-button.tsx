"use client"

import { useState, useEffect, startTransition } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Sparkles } from "lucide-react"
import { requestAnswerAction } from "@/app/(inApp)/questions/[id]/actions"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"
import { useActionState } from "react"

interface RequestAnswerButtonProps {
  questionId: string
}

export function RequestAnswerButton({ questionId }: RequestAnswerButtonProps) {
  const [temperature, setTemperature] = useState([0.7])
  const [topT, setTopT] = useState("")
  const [open, setOpen] = useState(false)

  const [state, action, isPending] = useActionState(requestAnswerAction, {
    errors: {},
    success: false,
  })

  // Handle success
  useEffect(() => {
    if (state.success) {
      toast.success("Answer generated successfully!")
      startTransition(() => {
        setTemperature([0.7])
        setTopT("")
        setOpen(false)
        const resetFormData = new FormData()
        action(resetFormData)
      })
    }
  }, [state.success, action])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <Sparkles className="w-4 h-4 mr-2" />
          Request Answer
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <SheetTitle>Generate Answer</SheetTitle>
          <SheetDescription>
            Generate an answer with custom AI parameters. Adjust the settings
            below to control how the AI will respond.
          </SheetDescription>
        </SheetHeader>

        <form action={action} className="space-y-6 mt-6 p-2">
          <input type="hidden" name="questionId" value={questionId} />
          <input type="hidden" name="temperature" value={temperature[0]} />
          <input type="hidden" name="topT" value={topT} />

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
            </div>
          </div>

          {/* Top T Field */}
          <div className="space-y-3">
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
            <p className="text-xs text-muted-foreground">
              Controls word diversity: 0 = focused, 1 = varied
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <span className="flex items-center gap-2">
                  <Spinner />
                  Generating...
                </span>
              ) : (
                "Generate Answer"
              )}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
