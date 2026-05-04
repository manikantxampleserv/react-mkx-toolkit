"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { IntroDoc } from "@/components/docs/intro"
import { UseKeyboardDoc } from "@/components/docs/use-keyboard"
import { UseRandomArrayDoc } from "@/components/docs/use-random-array"
import { UseCurrentLocationDoc } from "@/components/docs/use-current-location"
import { UseScrollDoc } from "@/components/docs/use-scroll"
import { UseNotificationDoc } from "@/components/docs/use-notification"

export default function DocsPage() {
  const searchParams = useSearchParams()
  const [activeHook, setActiveHook] = useState<string>("intro")
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const hook = searchParams.get("hook") || "intro"
    setActiveHook(hook)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [searchParams])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderContent = () => {
    switch (activeHook) {
      case "intro":
      case "getting-started":
        return <IntroDoc />
      case "use-keyboard":
        return <UseKeyboardDoc />
      case "use-random-array":
        return <UseRandomArrayDoc />
      case "use-current-location":
        return <UseCurrentLocationDoc />
      case "use-scroll":
        return <UseScrollDoc />
      case "use-notification":
        return <UseNotificationDoc />
      default:
        return <IntroDoc />
    }
  }

  return (
    <div className="space-y-8">
      {renderContent()}
    </div>
  )
}
