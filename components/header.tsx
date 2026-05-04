"use client";
import Link from "next/link"
import { ReactLogo } from "./icons/react-logo"
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-6 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="size-6 flex items-center justify-center">
            <ReactLogo className="text-[#58C4DC]" />
          </div>
          <span className="text-white font-medium tracking-tight text-xl cursor-pointer" onClick={() => router.push("/")}>react-mkx-toolkit</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/docs?hook=use-keyboard"
            className="text-xs text-muted-foreground hover:text-white transition-colors uppercase tracking-widest font-mono"
          >
            Docs
          </Link>
          <Link
            href="https://github.com/manikants98/react-mkx-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-white transition-colors uppercase tracking-widest font-mono"
          >
            GitHub
          </Link>
          <Link
            href="https://www.npmjs.com/package/react-mkx-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-white transition-colors uppercase tracking-widest font-mono"
          >
            NPM
          </Link>
        </nav>
      </div>
    </header>
  )
}
