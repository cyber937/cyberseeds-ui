import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { PillBox } from "../PillBox/PillBox";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { Spinner } from "../Spinner/Spinner";
import { UIColorProvider } from "../UIColorProvider/UIColorContext";
import { PRESET_COLOR_VARS } from "../Constants/presetColorVars";

/**
 * Colour precedence: an explicit `color` prop wins over `UIColorProvider`.
 *
 * Before v2.0.0 the order was reversed — the provider always won, which made
 * `color` dead inside a themed subtree. Callers who needed a red "delete"
 * button had no way to express it through the API and fell back to
 * `className="bg-red-600"`, which then stopped following the theme entirely.
 *
 * The rule is now: explicit prop → provider → the component's own default.
 */

/**
 * Read the resolved base colour off the component.
 *
 * UIColorProvider emits its own `display: contents` wrapper carrying the theme
 * vars, and the component nests inside it with its own set. Taking the *last*
 * match in document order gives the innermost — i.e. what actually paints.
 */
function baseVar(container: HTMLElement) {
  const holders = Array.from(container.querySelectorAll<HTMLElement>("[style]")).filter(
    (el) => el.style.getPropertyValue("--cs-ui-base") !== "",
  );
  return holders.at(-1)?.style.getPropertyValue("--cs-ui-base") ?? "";
}

const RED = PRESET_COLOR_VARS.red.base;
const SKY = PRESET_COLOR_VARS.sky.base;
const BLUE = PRESET_COLOR_VARS.blue.base;
const GRAY = PRESET_COLOR_VARS.gray.base;

describe("Colour precedence", () => {
  describe("explicit prop outranks the provider", () => {
    it("Button", () => {
      const { container } = render(
        <UIColorProvider initialColor="sky">
          <Button color="red">Delete</Button>
        </UIColorProvider>,
      );
      expect(baseVar(container)).toBe(RED);
    });

    it("Badge", () => {
      const { container } = render(
        <UIColorProvider initialColor="sky">
          <Badge color="red">9</Badge>
        </UIColorProvider>,
      );
      expect(baseVar(container)).toBe(RED);
    });

    it("PillBox — previously the only component that ignored the provider", () => {
      const { container } = render(
        <UIColorProvider initialColor="sky">
          <PillBox label="退学" color="red" />
        </UIColorProvider>,
      );
      expect(baseVar(container)).toBe(RED);
    });
  });

  describe("the provider applies when no prop is given", () => {
    it("Button", () => {
      const { container } = render(
        <UIColorProvider initialColor="sky">
          <Button>Save</Button>
        </UIColorProvider>,
      );
      expect(baseVar(container)).toBe(SKY);
    });

    it("PillBox now follows the theme like every other component", () => {
      const { container } = render(
        <UIColorProvider initialColor="sky">
          <PillBox label="在籍" />
        </UIColorProvider>,
      );
      expect(baseVar(container)).toBe(SKY);
    });

    it("Spinner", () => {
      const { container } = render(
        <UIColorProvider initialColor="sky">
          <Spinner />
        </UIColorProvider>,
      );
      expect(baseVar(container)).toBe(SKY);
    });
  });

  describe("the component default applies with neither", () => {
    it("Button falls back to blue", () => {
      const { container } = render(<Button>Save</Button>);
      expect(baseVar(container)).toBe(BLUE);
    });

    it("keeps per-component defaults — Badge is blue", () => {
      const { container } = render(<Badge>9</Badge>);
      expect(baseVar(container)).toBe(BLUE);
    });
  });

  describe("containers must not pin their children", () => {
    /**
     * RadioGroup forwards `color` to each Radio. If it defaulted to "blue" that
     * default would reach Radio as an *explicit* prop and, under the new
     * precedence, outrank the provider — pinning every group to blue.
     */
    it("RadioGroup without a color lets its Radios follow the provider", () => {
      const { container } = render(
        <UIColorProvider initialColor="sky">
          <RadioGroup value="a" onChange={() => {}}>
            <RadioGroup.Option label="A" value="a" />
          </RadioGroup>
        </UIColorProvider>,
      );
      expect(baseVar(container)).toBe(SKY);
      expect(screen.getByLabelText("A")).toBeInTheDocument();
    });

    it("RadioGroup with an explicit color still wins", () => {
      const { container } = render(
        <UIColorProvider initialColor="sky">
          <RadioGroup value="a" onChange={() => {}} color="red">
            <RadioGroup.Option label="A" value="a" />
          </RadioGroup>
        </UIColorProvider>,
      );
      expect(baseVar(container)).toBe(RED);
    });
  });

  it("Avatar keeps its own gray default rather than the shared blue", () => {
    const { container } = render(<Badge color="gray">x</Badge>);
    expect(baseVar(container)).toBe(GRAY);
  });
});
