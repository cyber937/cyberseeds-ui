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
- Global color theming via `UIColorProvider` context
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
import { Button, Input, Checkbox } from 'cyberseeds-ui';

export default function Page() {
  return (
    <form>
      <Input label="Email" type="email" require />
      <Checkbox label="Remember me" color="blue" />
      <Button variant="primary">Submit</Button>
    </form>
  );
}
```

## Components

| Component | Description |
| --- | --- |
| `Accordion` / `AccordionItem` | Collapsible content panels with smooth animations and ARIA support |
| `Button` | Versatile button with `primary` / `secondary` variants and `Button.Icon` compound component |
| `Checkbox` | Accessible checkbox with custom SVG checkmark and indeterminate state support |
| `GroupBox` | Labeled container to group related form inputs |
| `Input` | Text input with label integration, validation styling, and auto-generated id |
| `Label` | Semantic `<label>` element with required indicator (`*`) support |
| `Modal` | Dialog with `Modal.Header`, `Modal.Body`, `Modal.Footer` compound components, ESC key and backdrop click handling |
| `PhoneInput` | Formatted 10-digit US phone number input with cursor-aware formatting |
| `Pillbox` | Capsule-style tag/badge component |
| `Radio` | Single radio input with label association |
| `RadioGroup` | Radio group wrapper with `RadioGroup.Option` for controlled selection via context |
| `Select` / `SelectOption` | Styled select dropdown with custom chevron icon |
| `Switch` | Toggle switch with on/off labels and animated transitions |
| `TextArea` | Multiline text input with label integration and validation styling |

All form components support `scale` (`"sm"` | `"md"`) and `color` props using the Tailwind v4 color palette.

## Color Theming

### Per-component color

```tsx
<Button color="emerald">Confirm</Button>
<Checkbox color="red" />
<Pillbox color="blue" label="Tag" />
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

### Available colors

`red` `orange` `amber` `yellow` `lime` `green` `emerald` `teal` `cyan` `sky` `blue` `indigo` `violet` `purple` `fuchsia` `pink` `rose` `slate` `gray` `zinc` `neutral` `stone`

## Type Exports

```tsx
import type { Color, Scale, Variant } from 'cyberseeds-ui';
```

| Type | Values |
| --- | --- |
| `Color` | `"red"` \| `"orange"` \| `"amber"` \| ... (22 colors) |
| `Scale` | `"sm"` \| `"md"` |
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
    Button/           # Button, Button.Icon
    Checkbox/         # Checkbox
    Constants/        # Color maps
    DesignSystemUtils.tsx  # Type definitions (Color, Scale, Variant)
    GroupBox/         # GroupBox
    Input/            # Input
    Label/            # Label
    Modal/            # Modal, Modal.Header, Modal.Body, Modal.Footer
    PhoneInput/       # PhoneInput
    PillBox/          # PillBox (exported as Pillbox)
    Radio/            # Radio
    RadioGroup/       # RadioGroup, RadioGroup.Option
    Select/           # Select, SelectOption
    Switch/           # Switch
    TextArea/         # TextArea
    UIColorContext.tsx # UIColorProvider, useUIColor
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
