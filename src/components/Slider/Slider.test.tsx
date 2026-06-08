import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders a labelled range input", () => {
    render(<Slider label="Volume" defaultValue={20} />);
    const input = screen.getByRole("slider", { name: "Volume" });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("20");
  });

  it("calls onChange with the numeric value", () => {
    const onChange = vi.fn();
    render(<Slider aria-label="vol" value={30} onChange={onChange} />);
    fireEvent.change(screen.getByRole("slider"), { target: { value: "55" } });
    expect(onChange).toHaveBeenCalledWith(55);
  });

  it("shows the formatted value when showValue is set", () => {
    render(
      <Slider
        aria-label="budget"
        defaultValue={2500}
        showValue
        formatValue={(n) => `$${n}`}
      />,
    );
    expect(screen.getByText("$2500")).toBeInTheDocument();
  });

  it("respects disabled", () => {
    render(<Slider aria-label="vol" defaultValue={10} disabled />);
    expect(screen.getByRole("slider")).toBeDisabled();
  });

  it("forwards a ref to the range input", () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Slider aria-label="vol" defaultValue={10} ref={ref} />);
    expect(ref.current).toBe(screen.getByRole("slider"));
  });
});
