"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { MousePointer2 } from "lucide-react"

export function UseScrollDoc() {
  return (
    <article className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10">
            <MousePointer2 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">useScroll</h1>
            <p className="text-gray-500 text-sm">Programmatic scrolling utilities with smooth animations</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Description</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="bg-surface px-2 py-1 rounded text-primary">useScroll</code> hook is a custom React hook designed to provide a set of utilities for scrolling within a web application. Its main purpose is to encapsulate common scrolling functionality, making it easier to manage and reuse scrolling behavior across different components.
        </p>
      </div>

      {/* Return Values */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Returns</h2>
        <div className="border border-border rounded-lg overflow-hidden bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left font-semibold text-white">Method</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Parameters</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">scrollToTop</td>
                <td className="px-6 py-3 text-primary">none</td>
                <td className="px-6 py-3 text-gray-400">Scroll to the top of the page</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">scrollToBottom</td>
                <td className="px-6 py-3 text-primary">none</td>
                <td className="px-6 py-3 text-gray-400">Scroll to the bottom of the page</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-300">scrollById</td>
                <td className="px-6 py-3 text-primary">id, options</td>
                <td className="px-6 py-3 text-gray-400">Scroll to element by ID with animation options</td>
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
          code={`import React from "react";
import { useScroll } from "react-mkx-toolkit";

function ScrollComponent() {
  const { scrollToTop, scrollToBottom, scrollById } = 
    useScroll();

  const handleScrollToTop = () => {
    scrollToTop();
  };

  const handleScrollToBottom = () => {
    scrollToBottom();
  };

  const handleScrollById = () => {
    scrollById("myElementId", {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <button onClick={handleScrollById}>Scroll to Element</button>
      <div id="myElementId">Element to scroll to</div>
    </div>
  );
}

export default ScrollComponent;`}
        />
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Features</h2>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Multiple Methods</h3>
            <p className="text-gray-400 text-sm">scrollToTop, scrollToBottom, and scrollById utilities</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Smooth Animations</h3>
            <p className="text-gray-400 text-sm">Customizable scroll behavior with smooth animations</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Flexible Options</h3>
            <p className="text-gray-400 text-sm">Configure behavior, block, and inline options</p>
          </div>
        </div>
      </div>

      {/* Scroll Options */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">scrollById Options</h2>
        <div className="border border-border rounded-lg overflow-hidden bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left font-semibold text-white">Option</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Values</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">behavior</td>
                <td className="px-6 py-3 text-primary">'auto' | 'smooth'</td>
                <td className="px-6 py-3 text-gray-400">'auto'</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">block</td>
                <td className="px-6 py-3 text-primary">'start' | 'center' | 'end' | 'nearest'</td>
                <td className="px-6 py-3 text-gray-400">'start'</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-300">inline</td>
                <td className="px-6 py-3 text-primary">'start' | 'center' | 'end' | 'nearest'</td>
                <td className="px-6 py-3 text-gray-400">'nearest'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Common Use Cases</h2>
        <ul className="space-y-2 text-gray-400">
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Back-to-top button on long pages</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Anchor links for table of contents</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Form validation - scroll to error messages</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Infinite scroll implementations</span>
          </li>
        </ul>
      </div>
    </article>
  )
}
