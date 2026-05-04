import { Metadata } from "next"
import { Sidebar } from "@/components/docs/sidebar"
import { Header } from "@/components/header"
import { DocNav } from "@/components/docs/doc-nav"

export const metadata: Metadata = {
  title: "Documentation - react-mkx-toolkit",
  description: "Complete documentation for react-mkx-toolkit custom hooks with examples and API reference.",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col selection:bg-primary/30 selection:text-white">
      <Header />
      <div className="flex flex-1 gap-10 max-w-[1340px] mx-auto w-full px-6 py-8">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {children}
          <DocNav />
        </main>
      </div>
    </div>
  )
}
