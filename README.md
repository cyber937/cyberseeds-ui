# cyberseeds-ui

Reusable React UI component library built with **Tailwind CSS v4**, **TypeScript 5.8**, and **React 19**.
Designed for clean, accessible, and maintainable interfaces in modern web applications.

[![Storybook](https://img.shields.io/badge/Storybook-online-orange?logo=storybook)](https://cyber937.github.io/cyberseeds-ui/?path=/docs/overview--docs)
[![npm](https://img.shields.io/npm/v/cyberseeds-ui)](https://www.npmjs.com/package/cyberseeds-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Built for **React 19** (concurrent mode compatible)
- Styled with **Tailwind CSS v4** (`cs:` namespace prefix)
- Developed using **Vite 6** for instant HMR
- Tree-shakable, TypeScript-friendly components with full type exports
- **WAI-ARIA** compliant accessibility across all components
- Global color theming via `UIColorProvider` context with custom color support
- Interactive component catalog with **Storybook 9**
- Tested with **Vitest**, **React Testing Library**, and **jest-axe**

## Installation

```bash
npm install cyberseeds-ui
```

### Peer Dependencies

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "clsx": "^2.1.1"
}
```

### CSS Setup

Import the stylesheet in your application entry point:

```tsx
import 'cyberseeds-ui/style.css';
```

This is required for Tailwind CSS utility classes to take effect.

## Usage

```tsx
import { Button, Input, FormField, Checkbox } from 'cyberseeds-ui';

export default function Page() {
  return (
    <form>
      <FormField label="Email" required>
        <Input type="email" />
      </FormField>
      <Checkbox label="Remember me" color="blue" />
      <Button variant="primary">Submit</Button>
    </form>
  );
}
```

## Components

### Form

| Component | Description |
| --- | --- |
| `FormField` | Label + Input + Error + Help integration wrapper with context-based `aria-describedby` |
| `Input` | Text input with label integration, validation styling, and auto-generated id |
| `TextArea` | Multiline text input with label integration and validation styling |
| `Select` / `SelectOption` | Styled select dropdown with custom chevron icon |
| `PhoneInput` | Formatted 10-digit US phone number input with cursor-aware formatting |
| `Checkbox` | Accessible checkbox with custom SVG checkmark and indeterminate state support |
| `Radio` | Single radio input with label association |
| `RadioGroup` | Radio group wrapper with `RadioGroup.Option` for controlled selection via context |
| `Switch` | Toggle switch with on/off labels and animated transitions |
| `Label` | Semantic `<label>` element with required indicator (`*`) support |

### Layout

| Component | Description |
| --- | --- |
| `Accordion` / `AccordionItem` | Collapsible content panels with smooth animations and ARIA support |
| `GroupBox` | Labeled container to group related form inputs |
| `Modal` | Dialog with `Modal.Header`, `Modal.Body`, `Modal.Footer` compound components |
| `Tabs` | Tab navigation with `Tabs.List`, `Tabs.Trigger`, `Tabs.Content`, WAI-ARIA keyboard navigation |

### Theming

| Component | Description |
| --- | --- |
| `UIColorProvider` | Global color context for all child components, supports preset/custom/semantic colors |
| `ThemeProvider` | Dark mode management with `"light"` / `"dark"` / `"system"` modes |

### Feedback

| Component | Description |
| --- | --- |
| `Toast` | Notification toasts with 4 variants (`success` / `error` / `warning` / `info`), auto-dismiss |
| `Spinner` | SVG-based loading indicator with `role="status"` |
| `Progress` | Progress bar with percentage display and stripe animation |

### Data Display

| Component | Description |
| --- | --- |
| `Badge` | Notification count / status with `solid` / `outline` / `dot` variants and `Badge.Wrapper` |
| `Pillbox` | Capsule-style tag/badge component |
| `Button` | Versatile button with `primary` / `secondary` variants and `Button.Icon` compound component |

### Overlay

| Component | Description |
| --- | --- |
| `Tooltip` | Hover/focus tooltip with auto-flip positioning, delay, and `role="tooltip"` |

All components support `scale` (`"xs"` | `"sm"` | `"md"` | `"lg"`) and `color` props using the Tailwind v4 color palette, custom color objects, or semantic color names.

## Color Theming

### Per-component color

```tsx
<Button color="emerald">Confirm</Button>
<Checkbox color="red" />
<Pillbox color="blue" label="Tag" />
```

### Custom color objects

```tsx
import { Button } from 'cyberseeds-ui';

// Full specification
const brand = {
  base: '#6D28D9',
  hover: '#5B21B6',
  active: '#4C1D95',
  focus: '#7C3AED',
};

// Or just specify base — shades are auto-generated via OKLCH
const simple = { base: '#6D28D9' };

<Button color={brand}>Custom Brand</Button>
<Button color={simple}>Auto Shades</Button>
```

### Semantic colors

Use semantic color names that map to preset colors:

```tsx
<Button color="success">OK</Button>   {/* → green */}
<Button color="error">Delete</Button> {/* → red */}
<Button color="warning">Caution</Button> {/* → amber */}
<Button color="info">Details</Button> {/* → blue */}
```

### Global color via context

Use `UIColorProvider` to set a default color for all child components:

```tsx
import { UIColorProvider, Button, Input, Switch } from 'cyberseeds-ui';

function App() {
  return (
    <UIColorProvider initialColor="indigo">
      <Input label="Name" />
      <Switch />
      <Button>Save</Button>
    </UIColorProvider>
  );
}
```

Individual components can override the context color with an explicit `color` prop.

### Dark mode

Use `ThemeProvider` for system-aware or manual dark mode:

```tsx
import { ThemeProvider, useTheme } from 'cyberseeds-ui';

function App() {
  return (
    <ThemeProvider mode="system">
      <MyApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { mode, setMode, resolvedTheme } = useTheme();
  return <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>Toggle</button>;
}
```

### Available preset colors

`red` `orange` `amber` `yellow` `lime` `green` `emerald` `teal` `cyan` `sky` `blue` `indigo` `violet` `purple` `fuchsia` `pink` `rose` `slate` `gray` `zinc` `neutral` `stone`

## Toast Notifications

```tsx
import { ToastProvider, useToast, Button } from 'cyberseeds-ui';

function App() {
  return (
    <ToastProvider position="top-right">
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const toast = useToast();

  return (
    <Button onClick={() => toast.success('Saved!')}>
      Save
    </Button>
  );
}
```

## Type Exports

```tsx
import type { Color, PresetColor, CustomColor, SemanticColor, Scale, Variant } from 'cyberseeds-ui';
```

| Type | Values |
| --- | --- |
| `PresetColor` | `"red"` \| `"orange"` \| `"amber"` \| ... (22 colors) |
| `SemanticColor` | `"success"` \| `"warning"` \| `"error"` \| `"info"` |
| `CustomColor` | `{ base, hover?, active?, focus?, light?, lightText?, border?, dark? }` |
| `Color` | `PresetColor \| CustomColor \| SemanticColor` |
| `Scale` | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` |
| `Variant` | `"primary"` \| `"secondary"` |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run Storybook
npm run storybook

# Run tests
npm run test

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage

# Build library
npm run build

# Lint
npm run lint
```

## Project Structure

```text
src/
  components/
    Accordion/        # Accordion, AccordionItem
    Badge/            # Badge, Badge.Wrapper
    Button/           # Button, Button.Icon
    Checkbox/         # Checkbox
    Constants/        # Color maps, color utilities, design tokens, shade generator
    FormField/        # FormField, FormField.Label/Error/Help, useFormField
    GroupBox/         # GroupBox
    Input/            # Input
    Label/            # Label
    Modal/            # Modal, Modal.Header/Body/Footer
    PhoneInput/       # PhoneInput
    PillBox/          # PillBox (exported as Pillbox)
    Progress/         # Progress
    Radio/            # Radio
    RadioGroup/       # RadioGroup, RadioGroup.Option
    Select/           # Select, SelectOption
    Spinner/          # Spinner
    Switch/           # Switch
    Tabs/             # Tabs, Tabs.List/Trigger/Content
    TextArea/         # TextArea
    Toast/            # Toast, ToastProvider, useToast
    Tooltip/          # Tooltip
    ThemeProvider/    # ThemeProvider, useTheme (dark mode)
    UIColorProvider/  # UIColorProvider, useUIColor
    __tests__/        # Integration and accessibility tests
    index.tsx         # Library entry point
  style.css           # Tailwind CSS v4 utilities
```

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS v4 |
| Build | Vite 6 |
| Testing | Vitest 3.2, React Testing Library, jest-axe |
| Documentation | Storybook 9 |

## License

[MIT](https://opensource.org/licenses/MIT)
