import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import type { PresetColor } from "../DesignSystemUtils";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { colorToCSSVars, isPresetColor } from "../Constants/colorUtils";
import { PRESET_COLOR_VARS } from "../Constants/presetColorVars";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";
import { PillBox } from "../PillBox/PillBox";
import { Spinner } from "../Spinner/Spinner";
import { Progress } from "../Progress/Progress";
import { Switch } from "../Switch/Switch";
import { Stepper } from "../Stepper/Stepper";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { ButtonTabs } from "../ButtonTabs/ButtonTabs";

const ALL_PRESET_COLORS: PresetColor[] = [
  "red", "orange", "amber", "yellow",
  "lime", "green", "emerald", "teal",
  "cyan", "sky", "blue", "indigo",
  "violet", "purple", "fuchsia",
  "pink", "rose",
  "slate", "gray", "zinc", "neutral", "stone",
];

describe("Unified Color System (v1.0.0)", () => {
  describe("colorToCSSVars generates valid CSS vars for all 22 preset colors", () => {
    ALL_PRESET_COLORS.forEach((color) => {
      it(`generates CSS vars for "${color}"`, () => {
        const vars = colorToCSSVars(color) as Record<string, string>;
        expect(vars["--cs-ui-base"]).toBeTruthy();
        expect(vars["--cs-ui-hover"]).toBeTruthy();
        expect(vars["--cs-ui-active"]).toBeTruthy();
        expect(vars["--cs-ui-focus"]).toBeTruthy();
        expect(vars["--cs-ui-light"]).toBeTruthy();
        expect(vars["--cs-ui-lightText"]).toBeTruthy();
        expect(vars["--cs-ui-border"]).toBeTruthy();
      });
    });
  });

  describe("PRESET_COLOR_VARS covers all 22 colors", () => {
    it("has entries for every preset color", () => {
      ALL_PRESET_COLORS.forEach((color) => {
        expect(PRESET_COLOR_VARS[color]).toBeDefined();
        expect(PRESET_COLOR_VARS[color].base).toBeTruthy();
      });
    });

    it("has exactly 22 entries", () => {
      expect(Object.keys(PRESET_COLOR_VARS)).toHaveLength(22);
    });
  });

  describe("Light background colors get dark text for contrast", () => {
    const LIGHT_COLORS = Array.from(LIGHT_BG_COLORS) as PresetColor[];
    const DARK_COLORS = ALL_PRESET_COLORS.filter((c) => !LIGHT_BG_COLORS.has(c));

    LIGHT_COLORS.forEach((color) => {
      it(`Button with "${color}" has dark text class`, () => {
        render(<Button color={color}>Click</Button>);
        const btn = screen.getByRole("button");
        expect(btn.className).toContain("cs:text-gray-900");
      });

      it(`Badge solid with "${color}" has dark text class`, () => {
        const { container } = render(<Badge color={color}>1</Badge>);
        const badge = container.firstElementChild;
        expect(badge?.className).toContain("cs:text-gray-900");
      });
    });

    DARK_COLORS.slice(0, 3).forEach((color) => {
      it(`Button with "${color}" does NOT have forced dark text`, () => {
        render(<Button color={color}>Click</Button>);
        const btn = screen.getByRole("button");
        // Dark colors should have white text (the default) — NOT cs:text-gray-900
        expect(btn.className).not.toContain("cs:text-gray-900");
      });
    });
  });

  describe("All 22 preset colors render without errors", () => {
    ALL_PRESET_COLORS.forEach((color) => {
      it(`renders Button with "${color}"`, () => {
        render(<Button color={color}>OK</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();
      });
    });

    ALL_PRESET_COLORS.forEach((color) => {
      it(`renders Badge with "${color}"`, () => {
        const { container } = render(<Badge color={color}>1</Badge>);
        expect(container.firstElementChild).toBeInTheDocument();
      });
    });

    ALL_PRESET_COLORS.forEach((color) => {
      it(`renders Spinner with "${color}"`, () => {
        render(<Spinner color={color} />);
        expect(screen.getByRole("status")).toBeInTheDocument();
      });
    });

    ALL_PRESET_COLORS.forEach((color) => {
      it(`renders Progress with "${color}"`, () => {
        render(<Progress color={color} value={50} />);
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
      });
    });
  });

  describe("CSS variables are applied to component elements", () => {
    it("Button primary applies CSS vars to button element", () => {
      render(<Button color="red">Click</Button>);
      const btn = screen.getByRole("button") as HTMLElement;
      expect(btn.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });

    it("Switch checked applies CSS vars", () => {
      render(<Switch color="green" checked />);
      const sw = screen.getByRole("switch") as HTMLElement;
      expect(sw.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });

    it("Switch unchecked does NOT apply CSS vars", () => {
      render(<Switch color="green" checked={false} />);
      const sw = screen.getByRole("switch") as HTMLElement;
      expect(sw.style.getPropertyValue("--cs-ui-base")).toBe("");
    });

    it("Checkbox applies CSS vars", () => {
      render(<Checkbox color="purple" />);
      const cb = screen.getByRole("checkbox") as HTMLElement;
      expect(cb.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });

    it("Radio applies CSS vars", () => {
      render(<Radio color="teal" />);
      const radio = screen.getByRole("radio") as HTMLElement;
      expect(radio.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });

    it("PillBox applies CSS vars", () => {
      render(<PillBox color="amber" label="Tag" />);
      const pill = screen.getByText("Tag") as HTMLElement;
      expect(pill.style.getPropertyValue("--cs-ui-light")).toBeTruthy();
    });

    it("Stepper applies CSS vars to root element", () => {
      render(<Stepper steps={[{ label: "A" }, { label: "B" }]} currentStep={0} color="red" />);
      const container = screen.getByRole("group") as HTMLElement;
      expect(container.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });

    it("ButtonGroup active item applies CSS vars", () => {
      render(
        <ButtonGroup defaultValue="a" color="green">
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
        </ButtonGroup>
      );
      const btn = screen.getByText("A") as HTMLElement;
      expect(btn.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });

    it("ButtonTabs active trigger applies CSS vars", () => {
      render(
        <ButtonTabs defaultValue="a" color="purple">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="a">A</ButtonTabs.Trigger>
          </ButtonTabs.List>
        </ButtonTabs>
      );
      const trigger = screen.getByText("A") as HTMLElement;
      expect(trigger.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });
  });

  describe("New components render with all 22 preset colors", () => {
    ALL_PRESET_COLORS.forEach((color) => {
      it(`renders Stepper with "${color}"`, () => {
        render(<Stepper steps={[{ label: "A" }, { label: "B" }]} currentStep={0} color={color} />);
        expect(screen.getByRole("group")).toBeInTheDocument();
      });
    });
  });
});
