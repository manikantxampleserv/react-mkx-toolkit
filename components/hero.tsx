"use client"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install react-mkx-toolkit")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-full border-b border-border">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-surface mb-8">
          <span className="size-2 bg-primary rounded-full animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            v1.0.0 Production Ready
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 text-balance">
          React Custom <span className="text-gray-500">Hooks Toolkit</span>
        </h1>

        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          A comprehensive collection of production-ready React custom hooks designed to simplify common tasks.{" "}
          <br className="hidden md:block" />
          Write <span className="text-gray-300">cleaner, more maintainable code</span> with zero configuration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
          <div className="flex items-center border border-border bg-black pl-3 pr-1 h-10 w-full max-w-xs group transition-colors hover:border-gray-600">
            <span className="text-primary mr-2 font-mono">$</span>
            <input
              className="bg-transparent border-none text-gray-300 text-sm font-mono w-full focus:ring-0 focus:outline-none p-0 placeholder-gray-700"
              readOnly
              value="npm install react-mkx-toolkit"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="ml-2 p-1.5 hover:bg-white/10 text-gray-500 hover:text-white transition-colors h-8 w-8"
            >
              {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
              <span className="sr-only">Copy installation command</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
