"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

const pages = [
  { id: "intro", title: "Getting Started" },
  { id: "use-keyboard", title: "useKeyboard" },
  { id: "use-random-array", title: "useRandomArray" },
  { id: "use-current-location", title: "useCurrentLocation" },
  { id: "use-scroll", title: "useScroll" },
  { id: "use-notification", title: "useNotification" },
]

export function DocNav() {
  const searchParams = useSearchParams()
  const currentHook = searchParams.get("hook") || "use-keyboard"

  const currentIndex = pages.findIndex((p) => p.id === currentHook)
  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null
  const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null

  return (
    <div className="mt-12 pt-6 border-t border-border flex items-stretch justify-between gap-4">
      {/* Previous */}
      {prev ? (
        <Link
          href={`/docs?hook=${prev.id}`}
          className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border bg-surface hover:border-primary hover:bg-surface-highlight transition-all"
        >
          <span className="flex items-center gap-1 text-xs text-gray-500 uppercase tracking-widest font-mono group-hover:text-primary transition-colors">
            <ChevronLeft className="w-3 h-3" />
            Previous
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {/* Next */}
      {next ? (
        <Link
          href={`/docs?hook=${next.id}`}
          className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border bg-surface hover:border-primary hover:bg-surface-highlight transition-all items-end text-right"
        >
          <span className="flex items-center gap-1 text-xs text-gray-500 uppercase tracking-widest font-mono group-hover:text-primary transition-colors">
            Next
            <ChevronRight className="w-3 h-3" />
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  )
}
