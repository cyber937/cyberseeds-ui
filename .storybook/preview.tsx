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
    layout: "padded",
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
    viewport: {
      options: {
        "small-mobile": { name: "Small Mobile", styles: { width: "320px", height: "568px" } },
        mobile: { name: "Mobile", styles: { width: "375px", height: "667px" } },
        tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
        desktop: { name: "Desktop", styles: { width: "1280px", height: "800px" } },
      },
    },
  },
  decorators: [
    (Story, context) => {
      const bgValue = context.globals.backgrounds?.value;
      const isDark = bgValue === "dark" || bgValue === "#1a1a2e";
      return (
        <ThemeWrapper isDark={isDark}>
          <Story />
        </ThemeWrapper>
      );
    },
  ],
  initialGlobals: {
    backgrounds: { value: "light" },
  },
};

export default preview;
