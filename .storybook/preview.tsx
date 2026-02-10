import { useEffect } from "react";
import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

function ThemeWrapper({ isDark, children }: { isDark: boolean; children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={isDark ? "dark" : ""} style={{ padding: "1rem", minHeight: "100px", backgroundColor: isDark ? "#1a1a2e" : "transparent" }}>
      {children}
    </div>
  );
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: "Light", value: "#F7F9F2" },
        dark: { name: "Dark", value: "#1a1a2e" },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
  globalTypes: {
    theme: {
      description: "Theme mode",
      toolbar: {
        title: "Theme",
        icon: "moon",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      const bgValue = context.globals.backgrounds?.value;
      const isDark = theme === "dark" || bgValue === "dark" || bgValue === "#1a1a2e";
      return (
        <ThemeWrapper isDark={isDark}>
          <Story />
        </ThemeWrapper>
      );
    },
  ],
  initialGlobals: {
    backgrounds: { value: "light" },
    theme: "light",
  },
};

export default preview;
