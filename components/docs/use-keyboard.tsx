"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Keyboard } from "lucide-react"

export function UseKeyboardDoc() {
  return (
    <article className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10">
            <Keyboard className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">useKeyboard</h1>
            <p className="text-gray-500 text-sm">Handle keyboard events and key press callbacks</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Description</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="bg-surface px-2 py-1 rounded text-primary">useKeyboard</code> hook is a custom React hook designed to simplify the handling of keyboard events within your React applications. With this hook, you can easily listen for specific keyboard inputs and execute callback functions in response to those inputs.
        </p>
      </div>

      {/* Parameters */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Parameters</h2>
        <div className="border border-border rounded-lg overflow-hidden bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left font-semibold text-white">Parameter</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Type</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">key</td>
                <td className="px-6 py-3 text-primary">string</td>
                <td className="px-6 py-3 text-gray-400">The keyboard key to listen for (e.g., 'Enter', 'Escape', 'a')</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-300">callback</td>
                <td className="px-6 py-3 text-primary">() =&gt; void</td>
                <td className="px-6 py-3 text-gray-400">Function to execute when the specified key is pressed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Usage Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Usage Example</h2>
        <CodeBlock
          language="tsx"
          code={`import { useKeyboard } from "react-mkx-toolkit";

const MyComponent = () => {
  const handleKeyPress = () => {
    console.log("The Enter key was pressed!");
  };

  useKeyboard("Enter", handleKeyPress);

  return <div>Press Enter to trigger the callback</div>;
};

export default MyComponent;`}
        />
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Features</h2>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Simple API</h3>
            <p className="text-gray-400 text-sm">Easy-to-use interface for listening to specific keyboard keys</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Multiple Keys</h3>
            <p className="text-gray-400 text-sm">Support for all standard keyboard keys including special keys</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Auto Cleanup</h3>
            <p className="text-gray-400 text-sm">Automatically removes event listeners on component unmount</p>
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Common Use Cases</h2>
        <ul className="space-y-2 text-gray-400">
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Keyboard shortcuts for common actions (Ctrl+S to save)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Modal dialogs (Escape key to close)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Search bars (Enter to submit)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Navigation with arrow keys</span>
          </li>
        </ul>
      </div>
    </article>
  )
}
