"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Hash } from "lucide-react"

export function UseRandomArrayDoc() {
  return (
    <article className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10">
            <Hash className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">useRandomArray</h1>
            <p className="text-gray-500 text-sm">Generate arrays of numbers within a specified range</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Description</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="bg-surface px-2 py-1 rounded text-primary">useRandomArray</code> hook is useful for scenarios where you need to generate a sequence of numbers within a specified range, such as creating test data, generating random values, or iterating through a range of numerical values.
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
                <td className="px-6 py-3 text-gray-300">start</td>
                <td className="px-6 py-3 text-primary">number</td>
                <td className="px-6 py-3 text-gray-400">The starting number of the range (inclusive)</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-300">end</td>
                <td className="px-6 py-3 text-primary">number</td>
                <td className="px-6 py-3 text-gray-400">The ending number of the range (exclusive)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Return Value */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Returns</h2>
        <div className="border border-border rounded-lg p-4 bg-surface">
          <p className="text-gray-400">
            <span className="text-primary font-semibold">number[]</span> - An array containing all numbers from start to end-1
          </p>
        </div>
      </div>

      {/* Usage Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Usage Example</h2>
        <CodeBlock
          language="tsx"
          code={`import { useRandomArray } from "react-mkx-toolkit";

const MyComponent = () => {
  const arr = useRandomArray(0, 10);
  // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <h2>Numbers from 0 to 9:</h2>
      <ul>
        {arr.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;`}
        />
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Features</h2>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Range Generation</h3>
            <p className="text-gray-400 text-sm">Quickly generate arrays of sequential numbers</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Flexible Ranges</h3>
            <p className="text-gray-400 text-sm">Support for any start and end values</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Performance</h3>
            <p className="text-gray-400 text-sm">Efficiently generates arrays without overhead</p>
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Common Use Cases</h2>
        <ul className="space-y-2 text-gray-400">
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Creating paginated lists with dynamic page numbers</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Generating test data for tables and lists</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Building number sequences for loops and iterations</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Creating rating or score selectors</span>
          </li>
        </ul>
      </div>
    </article>
  )
}
