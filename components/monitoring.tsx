export function Monitoring() {
  const hookExamples = [
    { hook: "useKeyboard", category: "Input", description: "Ctrl+K to focus search, Esc to blur" },
    { hook: "useCurrentLocation", category: "Geolocation", description: "Get lat, long, and reverse geocoding" },
    { hook: "useScroll", category: "DOM", description: "scrollToTop(), scrollToBottom(), scrollById()" },
    { hook: "useNotification", category: "Browser API", description: "Request permission and show notifications" },
    { hook: "useRandomArray", category: "Utilities", description: "Generate number arrays from range" },
  ]

  return (
    <div className="w-full border-b border-border bg-surface">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left content */}
        <div className="p-8 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
          <div className="font-mono text-xs text-primary mb-4">⚛ MKX HOOKS</div>
          <h2 className="text-3xl font-medium text-white mb-6">Production-Ready Hooks</h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Lightweight, fully typed, and battle-tested in production. Each hook encapsulates complex functionality into simple, intuitive APIs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border p-4 bg-background">
              <div className="text-xs text-gray-500 font-mono mb-1">NPM DOWNLOADS</div>
              <div className="text-2xl text-white font-mono">5K+</div>
            </div>
            <div className="border border-border p-4 bg-background">
              <div className="text-xs text-gray-500 font-mono mb-1">BUNDLE SIZE</div>
              <div className="text-2xl text-white font-mono">8.2KB</div>
            </div>
          </div>
        </div>

        {/* Right code examples */}
        <div className="bg-background p-8 md:p-12 relative overflow-hidden flex flex-col font-mono text-xs">
          <div className="flex items-center gap-2 mb-4 border-b border-border pb-2">
            <div className="size-2 rounded-full bg-red-500/50" />
            <div className="size-2 rounded-full bg-yellow-500/50" />
            <div className="size-2 rounded-full bg-green-500/50" />
            <span className="ml-auto text-gray-600">hooks.reference</span>
          </div>
          <div className="space-y-3 text-gray-500 opacity-80 overflow-hidden h-[300px]">
            {hookExamples.map((item, index) => (
              <div key={index} className="border-l border-gray-700 pl-3">
                <div className="text-primary font-semibold">{item.hook}</div>
                <div className="text-gray-600 text-[10px]">{item.category}</div>
                <div className="text-gray-500 text-[10px] mt-1">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent" />
        </div>
      </div>
    </div>
  )
}
