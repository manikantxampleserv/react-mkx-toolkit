"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy!", err)
    }
  }

  return (
    <div className={cn("relative group rounded-lg overflow-hidden border border-border bg-surface", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface-highlight/50">
        <span className="text-xs font-medium text-muted-foreground uppercase">{language || "code"}</span>
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-md hover:bg-surface-highlight transition-colors text-muted-foreground hover:text-white"
          title="Copy to clipboard"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="text-sm font-mono leading-relaxed">
        <SyntaxHighlighter
          language={language || "tsx"}
          style={vscDarkPlus}
          showLineNumbers={true}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "1em",
            color: "#4B5563",
            textAlign: "right",
            userSelect: "none",
          }}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "transparent",
            fontSize: "0.875rem",
          }}
          codeTagProps={{
            className: "font-mono",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

