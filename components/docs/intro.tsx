"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { ReactLogo } from "../icons/react-logo"

export function IntroDoc() {
  return (
    <article className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10">
            <ReactLogo className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Getting Started</h1>
            <p className="text-gray-500 text-sm">Start using react-mkx-toolkit in your project</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">About react-mkx-toolkit</h2>
        <p className="text-gray-400 leading-relaxed">
          React MKX Toolkit is a comprehensive collection of production-ready custom React hooks designed to simplify common development tasks. Each hook is thoroughly tested, fully typed with TypeScript, and optimized for performance.
        </p>
      </div>

      {/* Installation Section */}
      <div className="space-y-4" id="installation">
        <h2 className="text-2xl font-semibold text-white">Installation</h2>
        <p className="text-gray-400 leading-relaxed">
          Install the package using your preferred package manager:
        </p>

        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-300 mb-2">npm</p>
            <CodeBlock
              code={`npm install react-mkx-toolkit`}
              language="bash"
            />
          </div>

          <div>
            <p className="text-sm text-gray-300 mb-2">yarn</p>
            <CodeBlock
              code={`yarn add react-mkx-toolkit`}
              language="bash"
            />
          </div>

          <div>
            <p className="text-sm text-gray-300 mb-2">pnpm</p>
            <CodeBlock
              code={`pnpm add react-mkx-toolkit`}
              language="bash"
            />
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Quick Start</h2>
        <p className="text-gray-400 leading-relaxed">
          Import any hook and start using it immediately. Here's a simple example:
        </p>

        <CodeBlock
          code={`import { useKeyboard } from "react-mkx-toolkit";

function MyComponent() {
  const handleKeyPress = () => {
    console.log("Enter key was pressed!");
  };

  useKeyboard("Enter", handleKeyPress);

  return <div>Press Enter key...</div>;
}

export default MyComponent;`}
          language="tsx"
        />
      </div>

      {/* Available Hooks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Available Hooks</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          The toolkit includes the following hooks, each designed for a specific use case:
        </p>

        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⌨️</span>
              <div>
                <h3 className="text-white font-semibold">useKeyboard</h3>
                <p className="text-gray-400 text-sm mt-1">Handle keyboard events and key press callbacks with ease</p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="text-white font-semibold">useRandomArray</h3>
                <p className="text-gray-400 text-sm mt-1">Generate arrays of numbers within a specified range</p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="text-white font-semibold">useCurrentLocation</h3>
                <p className="text-gray-400 text-sm mt-1">Retrieve user's geographic location with reverse geocoding</p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📜</span>
              <div>
                <h3 className="text-white font-semibold">useScroll</h3>
                <p className="text-gray-400 text-sm mt-1">Programmatic scrolling utilities with smooth animations</p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔔</span>
              <div>
                <h3 className="text-white font-semibold">useNotification</h3>
                <p className="text-gray-400 text-sm mt-1">Browser notifications made simple and intuitive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Why Use react-mkx-toolkit?</h2>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4 bg-surface">
            <h3 className="text-white font-semibold mb-2">Type-Safe</h3>
            <p className="text-gray-400 text-sm">Full TypeScript support with complete type definitions for better developer experience</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface">
            <h3 className="text-white font-semibold mb-2">Production-Ready</h3>
            <p className="text-gray-400 text-sm">Thoroughly tested and battle-tested in production environments</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface">
            <h3 className="text-white font-semibold mb-2">Zero Dependencies</h3>
            <p className="text-gray-400 text-sm">Lightweight package with minimal bundle size impact</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface">
            <h3 className="text-white font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-400 text-sm">Simple, intuitive APIs that require zero configuration</p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Next Steps</h2>
        <p className="text-gray-400 leading-relaxed">
          Explore the detailed documentation for each hook by navigating through the sidebar. Each hook page includes comprehensive examples, parameters, and use cases to help you get the most out of the toolkit.
        </p>
      </div>
    </article>
  )
}
