import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <div className="w-full border-b border-border bg-background py-24 px-6">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl font-medium text-white mb-4">Start using custom hooks today</h2>
        <p className="text-gray-500 mb-8">Install via npm, yarn, or pnpm. Zero configuration required.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link href="/docs?hook=intro#installation" className="contents">
            <Button className="h-10 px-8 bg-white hover:bg-gray-200 text-black font-medium text-sm border border-white rounded-none">
              Install Now
            </Button>
          </Link>
          <Link href="https://github.com/manikants98/react-mkx-toolkit" target="_blank" rel="noopener noreferrer" className="contents">
            <Button
              variant="outline"
              className="h-10 px-8 bg-transparent hover:bg-white/5 text-white font-medium text-sm border-border rounded-none"
            >
              View GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
