import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Radio } from "./Radio";

// Radio is otherwise tested via RadioGroup per the project convention; this
// file only covers the direct-API additions (ref / className) so changes to
// the underlying primitive don't drift unnoticed.
describe("Radio Component", () => {
  describe("API consistency", () => {
    it("forwards ref to the inner input", () => {
      const ref = createRef<HTMLInputElement>();
      render(<Radio ref={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current?.tagName).toBe("INPUT");
      expect(ref.current?.type).toBe("radio");
    });

    it("applies className to the outer wrapper", () => {
      const { container } = render(<Radio className="my-radio" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain("my-radio");
    });

    it("does not leak className onto the inner input", () => {
      render(<Radio className="my-radio" />);
      const input = screen.getByRole("radio");
      expect(input.className).not.toContain("my-radio");
    });
  });
});
