# React Useful Custom Hooks

![NPM](https://img.shields.io/badge/Author-Mani%20Kant%20Sharma-blue) ![npm](https://img.shields.io/npm/v/react-mkx-toolkit?color=1C939D)
![npm](https://img.shields.io/npm/dt/react-mkx-toolkit) ![NPM](https://img.shields.io/npm/l/react-mkx-toolkit) ![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/react-mkx-toolkit)

## 📋 Description

A comprehensive collection of production-ready React custom hooks designed to simplify common tasks and encapsulate reusable logic across your React applications. These hooks abstract complex functionality into simple, intuitive APIs that help you write cleaner, more maintainable code.

## ✨ Features

- **Keyboard Event Handling** - Effortlessly manage keyboard interactions
- **Array Utilities** - Generate and manipulate random arrays
- **Geolocation Services** - Access user location with reverse geocoding
- **Scroll Management** - Programmatic scrolling utilities
- **Browser Notifications** - Easy notification API integration
- **Type Safe** - Full TypeScript support
- **Lightweight** - Minimal bundle size
- **Well Documented** - Comprehensive examples and documentation
- **Cross-Browser** - Works across all modern browsers

## 📦 Installation

You can install the package using npm:

```shell
npm install react-mkx-toolkit
```

Or using yarn:

```shell
yarn add react-mkx-toolkit
```

Or using pnpm:

```shell
pnpm add react-mkx-toolkit
```

## 🚀 Quick Start

```jsx
import { useKeyboard, useScroll, useNotification } from "react-mkx-toolkit";

function App() {
  const { scrollToTop } = useScroll();
  const { showNotification } = useNotification();

  useKeyboard("Escape", () => scrollToTop());

  return (
    <button onClick={() => showNotification("Welcome!")}>
      Click Me
    </button>
  );
}

export default App;
```

## 📚 Hooks API Reference

### useKeyboard

The `useKeyboard` hook simplifies handling keyboard events in your React applications. Listen for specific keyboard inputs and execute callback functions in response.

#### Usage

```jsx
import { useKeyboard } from "react-mkx-toolkit";

const MyComponent = () => {
  const handleKeyPress = () => {
    console.log("The Enter key was pressed!");
  };

  useKeyboard("Enter", handleKeyPress);
  return <div>MyComponent</div>;
};

export default MyComponent;
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | `string` | The keyboard key to listen for (e.g., "Enter", "Escape", "ArrowUp") |
| `callback` | `function` | Function to execute when the key is pressed |

---

### useRandomArray

Generate sequences of numbers within a specified range. Useful for creating test data, pagination, or iterating through ranges.

#### Usage

```jsx
import { useRandomArray } from "react-mkx-toolkit";

const MyComponent = () => {
  const arr = useRandomArray(0, 10);
  // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <ul>
      {arr.map((num) => <li key={num}>{num}</li>)}
    </ul>
  );
};

export default MyComponent;
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `start` | `number` | Starting number of the range |
| `end` | `number` | Ending number of the range |

#### Returns

| Value | Type | Description |
|-------|------|-------------|
| `array` | `number[]` | Array of numbers from start to end |

---

### useCurrentLocation

Retrieve the user's current geographic location with reverse geocoding. Perfect for location-based services and mapping applications.

#### Usage

```jsx
import { useCurrentLocation } from "react-mkx-toolkit";

const MyComponent = () => {
  const { display_name, address, latitude, longitude, loading, error } = useCurrentLocation();

  if (loading) return <p>Getting location...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>
        <span>Location: </span>
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

export default MyComponent;
```

#### Returns

| Value | Type | Description |
|-------|------|-------------|
| `display_name` | `string` | Human-readable location name |
| `latitude` | `number` | Geographic latitude coordinate |
| `longitude` | `number` | Geographic longitude coordinate |
| `address` | `object` | Detailed address components |
| `loading` | `boolean` | Loading state |
| `error` | `string \| null` | Error message if any |

---

### useScroll

A comprehensive hook providing utilities for programmatic scrolling. Control scroll position and smoothly navigate to specific elements.

#### Usage

```jsx
import { useScroll } from "react-mkx-toolkit";

function ScrollComponent() {
  const { scrollToTop, scrollToBottom, scrollById } = useScroll();

  return (
    <div>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <button onClick={handleScrollById}>Scroll to Element</button>

      <section id="myElementId" style={{ marginTop: "200vh" }}>
        Element to scroll to
      </section>
    </div>
  );

  function handleScrollToTop() {
    scrollToTop();
  }

  function handleScrollToBottom() {
    scrollToBottom();
  }

  function handleScrollById() {
    scrollById("myElementId", {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

export default ScrollComponent;
```

#### Methods

| Method | Parameters | Description |
|--------|-----------|-------------|
| `scrollToTop()` | - | Scroll to the top of the page |
| `scrollToBottom()` | - | Scroll to the bottom of the page |
| `scrollById(id, options)` | `id: string`, `options?: ScrollIntoViewOptions` | Scroll to element with specified ID |

---

### useNotification

Simplify browser notifications with a clean, intuitive interface. Request permissions and display notifications effortlessly.

#### Usage

```jsx
import { useNotification } from "react-mkx-toolkit";

const MyComponent = () => {
  const { requestPermission, showNotification, notificationPermission } =
    useNotification();

  const handleClick = () => {
    showNotification("Hello!", {
      body: "This is a notification from your web app.",
      icon: "/icon.png",
      tag: "app-notification",
    });
  };

  return (
    <div>
      <button onClick={requestPermission}>Request Permission</button>
      <button
        onClick={handleClick}
        disabled={notificationPermission !== "granted"}
      >
        Show Notification
      </button>
      <p>Status: {notificationPermission}</p>
    </div>
  );
};

export default MyComponent;
```

#### Returns

| Value | Type | Description |
|-------|------|-------------|
| `requestPermission()` | `function` | Requests permission from the user |
| `showNotification(title, options)` | `function` | Displays a notification with title and options |
| `notificationPermission` | `string` | Current permission state ("granted", "denied", or "default") |

#### Note

Always call `requestPermission()` before calling `showNotification()` to ensure the user has granted notification access.

---

## 🌐 Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
|:----:|:----:|:----:|:----:|:----:|
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## 💡 Examples

### Location-Based Service
```jsx
import { useCurrentLocation } from "react-mkx-toolkit";

function MapComponent() {
  const { latitude, longitude, display_name } = useCurrentLocation();

  return (
    <div>
      <h2>You are at {display_name}</h2>
      <p>Coordinates: {latitude}, {longitude}</p>
    </div>
  );
}
```

### Keyboard Shortcuts
```jsx
import { useKeyboard } from "react-mkx-toolkit";

function SearchBox() {
  useKeyboard("k", () => {
    document.getElementById("search").focus();
  });

  useKeyboard("Escape", () => {
    document.getElementById("search").blur();
  });

  return <input id="search" type="text" placeholder="Press Ctrl+K" />;
}
```

### Scroll Controls
```jsx
import { useScroll } from "react-mkx-toolkit";

function BackToTop() {
  const { scrollToTop } = useScroll();

  return (
    <button onClick={scrollToTop} className="back-to-top">
      ↑ Back to Top
    </button>
  );
}
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mani Kant Sharma**

- **LinkedIn**: [@manikants98](https://www.linkedin.com/in/manikants98)
- **GitHub**: [@manikants98](https://github.com/manikants98)
- **Email**: [manikants157@gmail.com](mailto:manikants157@gmail.com)

### Connect

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/manikants98)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/manikants98)
[![Gmail](https://img.shields.io/badge/-Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:manikants157@gmail.com)
[![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/manikantsharmaa/)

---

## 🆘 Support & Issues

If you encounter any issues or have questions, please [open an issue](https://github.com/manikants98/react-mkx-toolkit/issues) on GitHub.

## 📣 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a complete list of changes and version history.

## 🙏 Acknowledgments

Thanks to everyone who has contributed to this project!

---

**Made with ❤️ by Mani Kant Sharma**
