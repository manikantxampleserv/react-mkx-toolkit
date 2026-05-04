"use client"

import { cn } from "@/lib/utils"
import { Bell, BookOpen, Hash, Keyboard, MapPin, MousePointer2 } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ReactLogo } from "../icons/react-logo"

export function Sidebar() {
  const searchParams = useSearchParams()
  const [activeHook, setActiveHook] = useState<string>("use-keyboard")

  useEffect(() => {
    const hook = searchParams.get("hook") || "use-keyboard"
    setActiveHook(hook)
  }, [searchParams])

  const hooks = [
    {
      id: "use-keyboard",
      name: "useKeyboard",
      description: "Handle keyboard events",
      icon: Keyboard
    },
    {
      id: "use-random-array",
      name: "useRandomArray",
      description: "Generate number arrays",
      icon: Hash
    },
    {
      id: "use-current-location",
      name: "useCurrentLocation",
      description: "Get user location",
      icon: MapPin
    },
    {
      id: "use-scroll",
      name: "useScroll",
      description: "Scroll utilities",
      icon: MousePointer2
    },
    {
      id: "use-notification",
      name: "useNotification",
      description: "Browser notifications",
      icon: Bell
    }
  ]

  return (
    <aside className="w-64 shrink-0 hidden md:block">
      <div className="sticky top-25 space-y-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-primary/70 mb-4">Documentation</h3>
          <div className="space-y-2">
            <Link
              href="/docs?hook=intro"
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors ${activeHook === "intro"
                ? "bg-primary text-black font-medium"
                : "text-gray-400 hover:text-white hover:bg-surface"
                }`}
            >
              <BookOpen className="w-4 h-4" />
              Getting Started
            </Link>

          </div>
        </div>

        {/* Hooks Navigation */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Hooks</h3>
          <nav className="space-y-2">
            {hooks.map((hook) => (
              <Link
                key={hook.id}
                href={`/docs?hook=${hook.id}`}
                className={`block px-4 py-3 rounded transition-all ${activeHook === hook.id
                  ? "bg-primary text-black font-medium"
                  : "text-gray-400 hover:text-white hover:bg-surface"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    activeHook === hook.id ? "bg-black/10" : "bg-surface-highlight/50"
                  )}>
                    <hook.icon className={cn(
                      "w-4 h-4",
                      activeHook === hook.id ? "text-black" : "text-primary"
                    )} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{hook.name}</div>
                    <div className={cn(
                      "text-xs line-clamp-1 transition-colors",
                      activeHook === hook.id ? "text-black/70" : "text-gray-500"
                    )}>
                      {hook.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        {/* External Links */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Resources</h3>
          <div className="space-y-2">
            <a
              href="https://github.com/manikants98/react-mkx-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-surface rounded transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/react-mkx-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-surface rounded transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 27.23 27.23" aria-hidden="true"><rect fill="#333333" width="27.23" height="27.23" rx="2"></rect><polygon fill="#fff" points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"></polygon></svg>
              NPM
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
