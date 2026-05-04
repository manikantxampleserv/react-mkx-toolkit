import { Keyboard, MapPin, MousePointer2, Bell, Hash, ShieldCheck } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Keyboard,
      title: "Keyboard Events",
      description: "Effortlessly manage keyboard interactions with useKeyboard hook for shortcuts and commands."
    },
    {
      icon: MapPin,
      title: "Geolocation",
      description: "Access user location with reverse geocoding. Perfect for location-based services and maps."
    },
    {
      icon: MousePointer2,
      title: "Scroll Management",
      description: "Programmatic scrolling utilities with smooth animations and element targeting."
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Browser notifications made easy with permission handling and clean API integration."
    },
    {
      icon: Hash,
      title: "Array Utilities",
      description: "Generate and manipulate random arrays for test data and pagination needs."
    },
    {
      icon: ShieldCheck,
      title: "Type Safe",
      description: "Full TypeScript support with complete type definitions for better developer experience."
    }
  ]

  return (
    <div id="features" className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-border bg-background">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`group relative flex flex-col border-b border-border p-8 md:p-12 transition-colors hover:bg-surface`}
        >
          <div className="mb-6 p-3 w-fit bg-primary/10">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-sm font-mono font-medium text-white mb-3 uppercase tracking-wide">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
