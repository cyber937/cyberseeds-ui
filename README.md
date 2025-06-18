# 🌱 cyberseeds-ui

Reusable React UI component library built with **Tailwind CSS v4**, **TypeScript**, and **React 19**.  
Designed for clean, accessible, and maintainable interfaces in modern web applications.

[![Storybook](https://img.shields.io/badge/Storybook-online-orange?logo=storybook)](https://cyber937.github.io/cyberseeds-ui/?path=/docs/overview--docs) Please check the interactive UI catalog 👉

## ✨ Features

- ⚛️ Built for React 19 (concurrent mode compatible)
- 🎨 Styled with Tailwind CSS v4
- 💻 Developed using Vite for instant HMR
- 📦 Tree-shakable, TypeScript-friendly components
- 🧪 Optional Storybook integration for visual testing (coming soon)

## 📦 Installation

```bash
npm install cyberseeds-ui
# or
yarn add cyberseeds-ui
```

## 🚀 Usage Example

```typescript
import { Button } from "cyberseeds-ui";

export default function Page() {
  return <Button variant="primary">Click me</Button>;
}
```

## 🎨 Color Customization

Some components in `cyberseeds-ui` support color customization using **Tailwind CSS default color tokens**.  
You can pass a `color` prop (or use classNames internally) with values like:

- `blue`
- `emerald`
- `red`
- `amber`
- `indigo`
- `gray`
- ...and more (based on [Tailwind v4 palette](https://tailwindcss.com/docs/colors)

```tsx
<Button color="emerald">Confirm</Button>
<Checkbox color="red" checked />
<Pillbox color="blue">Tag</Pillbox>
```

## 🧱 Components

| Component    | Description                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `Accordion`  | A simple accordion component supporting smooth open/close transitions and icon rotation.                                  |
| `Button`     | Versatile button component with support for multiple variants and sizes (**color with Tailwind color classes**)           |
| `Checkbox`   | Accessible checkbox with custom styling and states (**color with Tailwind color classes**)                                |
| `Groupbox`   | Labeled container to group related form inputs, styled consistently                                                       |
| `Input`      | Standard text input with full variant and validation support (**color with Tailwind color classes**)                      |
| `Label`      | Semantic label element for form fields with optional styling hooks                                                        |
| `Modal`      | Accessible modal dialog with focus trap and customizable layout                                                           |
| `PhoneInput` | Text input optimized for 10-digit US phone numbers, with formatting (**color with Tailwind color classes**)               |
| `Pillbox`    | Capsule-style tag component with variant-based styling and grouping support (**color with Tailwind color classes**)       |
| `Radio`      | Single radio input with styling variants and ARIA support (**color with Tailwind color classes**)                         |
| `RadioGroup` | Wrapper component to group multiple radio inputs with consistent spacing and layout                                       |
| `Select`     | Styled select dropdown with variant support and keyboard accessibility                                                    |
| `Switch`     | Toggle switch component with animated state transitions and customization options (**color with Tailwind color classes**) |
| `TextArea`   | Multiline text input with resizable behavior and full variant support (**color with Tailwind color classes**)             |

## 🎨 `UIColorProvider`

`UIColorProvider` is a React Context that enables **application-wide color control** for all components provided by `cyberseeds-ui`.

By wrapping your app in `UIColorProvider`, you can set a default UI color (such as `"blue"` or `"gray"`) that is automatically applied across all compatible components—such as `Button`, `Input`, `Switch`, and others—**without manually passing a `color` prop** to each.

### ✅ Key Features

- Global UI color setting using React Context
- All `cyberseeds-ui` components automatically reference this context
- Supports dynamic color changes at runtime via `setColor`

### 🧩 Example (TypeScript)

```tsx
import { UIColorProvider, useUIColor } from "cyberseeds-ui";

function App() {
  return (
    <UIColorProvider initialColor="blue">
      <Button />
    </UIColorProvider>
  );
}
```
