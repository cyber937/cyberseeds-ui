import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// Per-component subpath entries. Each one becomes:
//   dist/<Name>.js      — the per-component ESM bundle
//   dist/<Name>.d.ts    — its rolled-up type declarations
// Wired in package.json#exports so consumers can write
//   import { Button } from "cyberseeds-ui/Button";
// and only pay for the components they actually import. The "index" entry keeps
// the barrel (cyberseeds-ui.js) shipping for backward compat.
const componentEntries = {
  index: "src/components/index.tsx",
  Accordion: "src/components/Accordion/Accordion.tsx",
  Alert: "src/components/Alert/Alert.tsx",
  Avatar: "src/components/Avatar/Avatar.tsx",
  Badge: "src/components/Badge/Badge.tsx",
  Breadcrumb: "src/components/Breadcrumb/Breadcrumb.tsx",
  Button: "src/components/Button/Button.tsx",
  ButtonGroup: "src/components/ButtonGroup/index.tsx",
  ButtonTabs: "src/components/ButtonTabs/index.tsx",
  Card: "src/components/Card/Card.tsx",
  Checkbox: "src/components/Checkbox/Checkbox.tsx",
  Combobox: "src/components/Combobox/Combobox.tsx",
  DatePicker: "src/components/DatePicker/DatePicker.tsx",
  Drawer: "src/components/Drawer/Drawer.tsx",
  EmptyState: "src/components/EmptyState/EmptyState.tsx",
  FileUpload: "src/components/FileUpload/FileUpload.tsx",
  FormField: "src/components/FormField/FormField.tsx",
  GroupBox: "src/components/GroupBox/GroupBox.tsx",
  Input: "src/components/Input/Input.tsx",
  Label: "src/components/Label/Label.tsx",
  Menu: "src/components/Menu/Menu.tsx",
  Modal: "src/components/Modal/Modal.tsx",
  NavMenu: "src/components/NavMenu/NavMenu.tsx",
  Pagination: "src/components/Pagination/Pagination.tsx",
  PhoneInput: "src/components/PhoneInput/PhoneInput.tsx",
  PillBox: "src/components/PillBox/PillBox.tsx",
  Popover: "src/components/Popover/Popover.tsx",
  Progress: "src/components/Progress/Progress.tsx",
  Radio: "src/components/Radio/Radio.tsx",
  RadioGroup: "src/components/RadioGroup/RadioGroup.tsx",
  Select: "src/components/Select/Select.tsx",
  Skeleton: "src/components/Skeleton/Skeleton.tsx",
  Slider: "src/components/Slider/Slider.tsx",
  Spinner: "src/components/Spinner/Spinner.tsx",
  Stepper: "src/components/Stepper/Stepper.tsx",
  Switch: "src/components/Switch/Switch.tsx",
  Table: "src/components/Table/Table.tsx",
  Tabs: "src/components/Tabs/Tabs.tsx",
  TagInput: "src/components/TagInput/TagInput.tsx",
  TextArea: "src/components/TextArea/TextArea.tsx",
  ThemeProvider: "src/components/ThemeProvider/ThemeProvider.tsx",
  Toast: "src/components/Toast/Toast.tsx",
  Tooltip: "src/components/Tooltip/Tooltip.tsx",
  UIColorProvider: "src/components/UIColorProvider/UIColorContext.tsx",
};

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: Object.fromEntries(
        Object.entries(componentEntries).map(([name, file]) => [
          name,
          path.resolve(__dirname, file),
        ]),
      ),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "clsx"],
      output: {
        // Per-entry chunks live at dist/<name>.js. Shared code (Constants/,
        // hooks/, etc.) gets hoisted into dist/chunks/* automatically by
        // Rollup so each per-component entry stays small.
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: (assetInfo) =>
          assetInfo.name === "style.css" ? "style.css" : "assets/[name][extname]",
      },
    },
  },
  esbuild: {
    banner: '"use client";',
  },
  plugins: [
    tailwindcss(),
    react(),
    dts({
      tsconfigPath: "./tsconfig.json",
      include: [path.resolve(__dirname, "src")],
      exclude: ["vite.config.ts"],
      // Per-entry rollup: one .d.ts per entry, mirroring the .js layout.
      rollupTypes: true,
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
});
