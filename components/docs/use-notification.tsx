"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Bell } from "lucide-react"

export function UseNotificationDoc() {
  return (
    <article className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10">
            <Bell className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">useNotification</h1>
            <p className="text-gray-500 text-sm">Browser notifications made simple and intuitive</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Description</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="bg-surface px-2 py-1 rounded text-primary">useNotification</code> hook simplifies the process of working with browser notifications in React applications. It provides a clean and intuitive interface for requesting permission and displaying notifications to users.
        </p>
      </div>

      {/* Return Values */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Returns</h2>
        <div className="border border-border rounded-lg overflow-hidden bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left font-semibold text-white">Property/Method</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Type</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">requestPermission</td>
                <td className="px-6 py-3 text-primary">() =&gt; void</td>
                <td className="px-6 py-3 text-gray-400">Function to request notification permission from user</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">showNotification</td>
                <td className="px-6 py-3 text-primary">(title, options) =&gt; void</td>
                <td className="px-6 py-3 text-gray-400">Function to display notifications</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-300">notificationPermission</td>
                <td className="px-6 py-3 text-primary">string</td>
                <td className="px-6 py-3 text-gray-400">Current permission state (granted, denied, default)</td>
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
          code={`import { useNotification } from "react-mkx-toolkit";

const MyComponent = () => {
  const { 
    requestPermission, 
    showNotification, 
    notificationPermission 
  } = useNotification();

  const handleClick = () => {
    showNotification("Hello!", {
      body: "This is a notification from your web app.",
      icon: "path/to/your/icon.png",
    });
  };

  return (
    <div>
      <button onClick={requestPermission}>
        Request Permission
      </button>
      <button
        onClick={handleClick}
        disabled={notificationPermission !== "granted"}
      >
        Show Notification
      </button>
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
            <h3 className="text-white font-semibold mb-2">Permission Handling</h3>
            <p className="text-gray-400 text-sm">Automatic permission request and state management</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Easy Configuration</h3>
            <p className="text-gray-400 text-sm">Customize notifications with title, body, icon, and more</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Cross-Browser Compatible</h3>
            <p className="text-gray-400 text-sm">Works reliably across modern browsers</p>
          </div>
        </div>
      </div>

      {/* Notification Options */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Notification Options</h2>
        <div className="border border-border rounded-lg overflow-hidden bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left font-semibold text-white">Option</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Type</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">body</td>
                <td className="px-6 py-3 text-primary">string</td>
                <td className="px-6 py-3 text-gray-400">The body text of the notification</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">icon</td>
                <td className="px-6 py-3 text-primary">string</td>
                <td className="px-6 py-3 text-gray-400">Path or URL to notification icon</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">badge</td>
                <td className="px-6 py-3 text-primary">string</td>
                <td className="px-6 py-3 text-gray-400">Badge image URL for the notification</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">tag</td>
                <td className="px-6 py-3 text-primary">string</td>
                <td className="px-6 py-3 text-gray-400">Notification tag for grouping</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-300">requireInteraction</td>
                <td className="px-6 py-3 text-primary">boolean</td>
                <td className="px-6 py-3 text-gray-400">Keep notification until user interacts with it</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Notes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Important Notes</h2>
        <div className="border-l-4 border-primary bg-surface px-6 py-4 rounded">
          <p className="text-gray-300 font-semibold mb-2">Permission Required</p>
          <p className="text-gray-400 text-sm">
            Call the <code className="bg-background px-2 py-1 rounded text-primary">requestPermission</code> function to request permission from the user before showing notifications. Users must grant permission for notifications to be displayed.
          </p>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Common Use Cases</h2>
        <ul className="space-y-2 text-gray-400">
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Real-time alerts and system notifications</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Message notifications in chat applications</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Task completion or status update alerts</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>User reminders and scheduled notifications</span>
          </li>
        </ul>
      </div>
    </article>
  )
}
