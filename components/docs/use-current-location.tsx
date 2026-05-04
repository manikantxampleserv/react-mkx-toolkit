import { CodeBlock } from "@/components/docs/code-block"
import { MapPin } from "lucide-react"

export function UseCurrentLocationDoc() {
  return (
    <article className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">useCurrentLocation</h1>
            <p className="text-gray-500 text-sm">Retrieve user's geographic location with reverse geocoding</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Description</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="bg-surface px-2 py-1 rounded text-primary">useCurrentLocation</code> hook retrieves the current geographic location of the user. This hook is useful for scenarios where you need to access the user's current location for various purposes such as location-based services, mapping applications, or any feature requiring the user's geographical coordinates.
        </p>
      </div>

      {/* Return Values */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Returns</h2>
        <div className="border border-border rounded-lg overflow-hidden bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left font-semibold text-white">Property</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Type</th>
                <th className="px-6 py-3 text-left font-semibold text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">display_name</td>
                <td className="px-6 py-3 text-primary">string</td>
                <td className="px-6 py-3 text-gray-400">Human-readable location name</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">latitude</td>
                <td className="px-6 py-3 text-primary">number</td>
                <td className="px-6 py-3 text-gray-400">Geographic latitude coordinate</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-3 text-gray-300">longitude</td>
                <td className="px-6 py-3 text-primary">number</td>
                <td className="px-6 py-3 text-gray-400">Geographic longitude coordinate</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-300">address</td>
                <td className="px-6 py-3 text-primary">object</td>
                <td className="px-6 py-3 text-gray-400">Detailed address information object</td>
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
          code={`import { useCurrentLocation } from "react-mkx-toolkit";

const MyComponent = () => {
  const { display_name, address, latitude, longitude } = 
    useCurrentLocation();

  return (
    <div>
      <p>
        <span>Display Name: </span>
        <span>{display_name}</span>
      </p>
      <p>
        <span>Latitude: </span>
        <span>{latitude}</span>
      </p>
      <p>
        <span>Longitude: </span>
        <span>{longitude}</span>
      </p>
      <p>
        <span>Address: </span>
        <span>{JSON.stringify(address)}</span>
      </p>
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
            <h3 className="text-white font-semibold mb-2">Reverse Geocoding</h3>
            <p className="text-gray-400 text-sm">Convert coordinates to human-readable addresses</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Geolocation API</h3>
            <p className="text-gray-400 text-sm">Leverages browser's Geolocation API for accuracy</p>
          </div>
          <div className="border border-border rounded-lg p-4 bg-surface hover:bg-surface-highlight transition-colors">
            <h3 className="text-white font-semibold mb-2">Detailed Info</h3>
            <p className="text-gray-400 text-sm">Provides comprehensive location details and coordinates</p>
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Common Use Cases</h2>
        <ul className="space-y-2 text-gray-400">
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Location-based service discovery (restaurants, stores nearby)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Weather applications showing local weather</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Mapping and navigation applications</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Delivery services and location tracking</span>
          </li>
        </ul>
      </div>
    </article>
  )
}
