import { ReactLogo } from "./icons/react-logo"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-background pt-12 pb-6 border-t border-border">
      <div className="grid grid-cols-2 max-w-[1400px] px-6 md:px-8 mx-auto md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="size-5 flex items-center justify-center">
              <ReactLogo className="text-primary" />
            </div>
            <span className="text-white font-medium text-sm">react-mkx-toolkit</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            A collection of production-ready custom React hooks for modern apps.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-mono text-white uppercase tracking-wider">Resources</h4>
          <Link href="https://github.com/manikants98/react-mkx-toolkit" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</Link>
          <Link href="#documentation" className="text-sm text-gray-500 hover:text-white transition-colors">Documentation</Link>
          <Link href="https://www.npmjs.com/package/react-mkx-toolkit" className="text-sm text-gray-500 hover:text-white transition-colors">NPM Package</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-mono text-white uppercase tracking-wider">Author</h4>
          <Link href="https://github.com/manikants98" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</Link>
          <Link href="https://www.linkedin.com/in/manikants98" className="text-sm text-gray-500 hover:text-white transition-colors">LinkedIn</Link>
          <Link href="mailto:manikants157@gmail.com" className="text-sm text-gray-500 hover:text-white transition-colors">Email</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-mono text-white uppercase tracking-wider">License</h4>
          <p className="text-sm text-gray-500">MIT License</p>
          <p className="text-xs text-gray-600">Free to use in commercial projects</p>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="pt-6 border-t mx-auto border-border px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex justify-between w-full max-w-[1400px] mx-auto">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Mani Kant Sharma. All rights reserved.</p>
          <p className="text-xs text-gray-600">Open Source Library — MIT License</p>
        </div>

      </div>
    </footer>
  )
}
