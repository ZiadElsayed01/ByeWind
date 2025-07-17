import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number;
  text?: React.ReactNode;
}

function Progress({ className, value, text, ...props }: ProgressProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <ProgressPrimitive.Root
        data-slot="progress"
        className="bg-primary/10 h-full w-full overflow-hidden rounded-sm"
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-[#9f9ff8] h-full transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>

      {text && (
        <div className="absolute inset-0 flex items-center ml-1 font-semibold mx-1">
          {text}
        </div>
      )}
    </div>
  )
}

export { Progress }
