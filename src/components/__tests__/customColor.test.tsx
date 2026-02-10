import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { isPresetColor, isCustomColor } from "../Constants/colorUtils";
import { customColorToCSSVars } from "../Constants/colorUtils";
import type { CustomColor } from "../DesignSystemUtils";
import { Button } from "../Button/Button";
import { Switch } from "../Switch/Switch";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";
import { PillBox } from "../PillBox/PillBox";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { PhoneInput } from "../PhoneInput/PhoneInput";
import { UIColorProvider } from "../UIColorProvider/UIColorContext";

const testCustomColor: CustomColor = {
  base: "#4f46e5",
  hover: "#4338ca",
  active: "#3730a3",
  focus: "#4f46e5",
  light: "#e0e7ff",
  lightText: "#312e81",
  border: "#a5b4fc",
};

describe("Custom Color Support", () => {
  describe("isPresetColor / isCustomColor", () => {
    it("should identify preset colors", () => {
      expect(isPresetColor("blue")).toBe(true);
      expect(isPresetColor("red")).toBe(true);
      expect(isPresetColor("stone")).toBe(true);
    });

    it("should reject non-preset strings", () => {
      expect(isPresetColor("notacolor" as any)).toBe(false);
    });

    it("should identify custom color objects", () => {
      expect(isCustomColor(testCustomColor)).toBe(true);
    });

    it("should reject strings for isCustomColor", () => {
      expect(isCustomColor("blue")).toBe(false);
    });

    it("should reject null/undefined for isCustomColor", () => {
      expect(isCustomColor(null as any)).toBe(false);
    });
  });

  describe("customColorToCSSVars", () => {
    it("should generate correct CSS custom properties", () => {
      const vars = customColorToCSSVars(testCustomColor);
      expect(vars).toEqual({
        "--cs-ui-base": "#4f46e5",
        "--cs-ui-hover": "#4338ca",
        "--cs-ui-active": "#3730a3",
        "--cs-ui-focus": "#4f46e5",
        "--cs-ui-light": "#e0e7ff",
        "--cs-ui-lightText": "#312e81",
        "--cs-ui-border": "#a5b4fc",
      });
    });
  });

  describe("PresetColor backward compatibility", () => {
    it("Button renders with preset color", () => {
      render(<Button color="red">Click</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("Switch renders with preset color", () => {
      render(<Switch color="green" checked />);
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });

    it("Checkbox renders with preset color", () => {
      render(<Checkbox color="blue" label="Check me" />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("Radio renders with preset color", () => {
      render(<Radio color="purple" label="Option" />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
    });

    it("PillBox renders with preset color", () => {
      render(<PillBox color="amber" label="Tag" />);
      expect(screen.getByText("Tag")).toBeInTheDocument();
    });

    it("Input renders with preset color", () => {
      render(<Input color="indigo" label="Name" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("TextArea renders with preset color", () => {
      render(<TextArea color="teal" label="Description" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("PhoneInput renders with preset color", () => {
      render(<PhoneInput color="sky" label="Phone" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });

  describe("CustomColor rendering", () => {
    it("Button renders with custom color and applies CSS vars", () => {
      render(<Button color={testCustomColor}>Click</Button>);
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
      expect(btn.style.getPropertyValue("--cs-ui-base")).toBe("#4f46e5");
      expect(btn.style.getPropertyValue("--cs-ui-hover")).toBe("#4338ca");
      expect(btn.className).toContain("cs-custom-btn-primary");
    });

    it("Button secondary variant works with custom color (no custom bg)", () => {
      render(
        <Button color={testCustomColor} variant="secondary">
          Cancel
        </Button>
      );
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
      expect(btn.className).not.toContain("cs-custom-btn-primary");
    });

    it("Switch renders with custom color when checked", () => {
      render(<Switch color={testCustomColor} checked />);
      const switchEl = screen.getByRole("switch");
      expect(switchEl).toBeInTheDocument();
      expect(switchEl.style.getPropertyValue("--cs-ui-base")).toBe("#4f46e5");
      expect(switchEl.className).toContain("cs-custom-bg");
    });

    it("Switch does not apply custom style when unchecked", () => {
      render(<Switch color={testCustomColor} checked={false} />);
      const switchEl = screen.getByRole("switch");
      expect(switchEl.style.getPropertyValue("--cs-ui-base")).toBe("");
    });

    it("Checkbox renders with custom color", () => {
      render(<Checkbox color={testCustomColor} label="Check" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
      expect(checkbox.style.getPropertyValue("--cs-ui-base")).toBe("#4f46e5");
      expect(checkbox.className).toContain("cs-custom-checked");
    });

    it("Radio renders with custom color", () => {
      render(<Radio color={testCustomColor} label="Option" />);
      const radio = screen.getByRole("radio");
      expect(radio).toBeInTheDocument();
      expect(radio.style.getPropertyValue("--cs-ui-base")).toBe("#4f46e5");
      expect(radio.className).toContain("cs-custom-checked");
    });

    it("PillBox renders with custom color", () => {
      render(<PillBox color={testCustomColor} label="Custom Tag" />);
      const pill = screen.getByText("Custom Tag");
      expect(pill).toBeInTheDocument();
      expect(pill.style.getPropertyValue("--cs-ui-light")).toBe("#e0e7ff");
      expect(pill.style.getPropertyValue("--cs-ui-lightText")).toBe("#312e81");
      expect(pill.className).toContain("cs-custom-pill");
    });

    it("Input renders with custom color", () => {
      render(<Input color={testCustomColor} label="Name" />);
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
      expect(input.style.getPropertyValue("--cs-ui-focus")).toBe("#4f46e5");
      expect(input.className).toContain("cs-custom-focus");
    });

    it("TextArea renders with custom color", () => {
      render(<TextArea color={testCustomColor} label="Bio" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toBeInTheDocument();
      expect(textarea.style.getPropertyValue("--cs-ui-focus")).toBe("#4f46e5");
      expect(textarea.className).toContain("cs-custom-focus");
    });

    it("PhoneInput renders with custom color", () => {
      render(<PhoneInput color={testCustomColor} label="Phone" />);
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
      expect(input.style.getPropertyValue("--cs-ui-focus")).toBe("#4f46e5");
      expect(input.className).toContain("cs-custom-focus");
    });
  });

  describe("UIColorProvider with CustomColor", () => {
    it("injects CSS vars wrapper when given CustomColor", () => {
      const { container } = render(
        <UIColorProvider initialColor={testCustomColor}>
          <Button>Themed</Button>
        </UIColorProvider>
      );
      // The wrapper div should have CSS vars
      const wrapper = container.querySelector(
        "div[style]"
      ) as HTMLElement | null;
      expect(wrapper).not.toBeNull();
      expect(wrapper!.style.getPropertyValue("--cs-ui-base")).toBe("#4f46e5");
    });

    it("does not inject wrapper div when given PresetColor", () => {
      const { container } = render(
        <UIColorProvider initialColor="blue">
          <Button>Themed</Button>
        </UIColorProvider>
      );
      // Button should be rendered directly (no extra wrapper with style)
      const wrappers = container.querySelectorAll("div[style]");
      expect(wrappers.length).toBe(0);
    });

    it("children components pick up custom color from context", () => {
      render(
        <UIColorProvider initialColor={testCustomColor}>
          <Button>Themed Button</Button>
        </UIColorProvider>
      );
      const btn = screen.getByRole("button");
      expect(btn.className).toContain("cs-custom-btn-primary");
    });
  });
});
