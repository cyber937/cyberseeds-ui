import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  it("shows the placeholder when no date is selected", () => {
    render(<DatePicker placeholder="Pick a date" />);
    expect(
      screen.getByRole("button", { name: "Pick a date" }),
    ).toBeInTheDocument();
  });

  it("formats the selected date on the trigger", () => {
    render(<DatePicker defaultValue={new Date(2026, 5, 15)} />);
    expect(
      screen.getByRole("button", { name: "Jun 15, 2026" }),
    ).toBeInTheDocument();
  });

  it("opens the calendar and selecting a day fires onChange and closes", () => {
    const onChange = vi.fn();
    render(<DatePicker defaultValue={new Date(2026, 5, 10)} onChange={onChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Jun 10, 2026" }));
    expect(screen.getByRole("grid")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "20" }));

    expect(onChange).toHaveBeenCalledTimes(1);
    const picked = onChange.mock.calls[0][0] as Date;
    expect(picked.getFullYear()).toBe(2026);
    expect(picked.getMonth()).toBe(5);
    expect(picked.getDate()).toBe(20);
    expect(screen.queryByRole("grid")).not.toBeInTheDocument();
  });

  it("navigates months with the arrows", () => {
    render(<DatePicker defaultValue={new Date(2026, 5, 10)} />);
    fireEvent.click(screen.getByRole("button", { name: "Jun 10, 2026" }));
    const month = () => screen.getByLabelText("Month") as HTMLSelectElement;
    expect(month().value).toBe("5"); // June
    fireEvent.click(screen.getByRole("button", { name: "Next month" }));
    expect(month().value).toBe("6"); // July
    fireEvent.click(screen.getByRole("button", { name: "Previous month" }));
    fireEvent.click(screen.getByRole("button", { name: "Previous month" }));
    expect(month().value).toBe("4"); // May
  });

  it("jumps to a month and year via the dropdowns", () => {
    render(<DatePicker defaultValue={new Date(2026, 5, 10)} />);
    fireEvent.click(screen.getByRole("button", { name: "Jun 10, 2026" }));
    const targetYear = String(new Date().getFullYear() + 2);

    fireEvent.change(screen.getByLabelText("Month"), { target: { value: "0" } });
    fireEvent.change(screen.getByLabelText("Year"), { target: { value: targetYear } });

    expect((screen.getByLabelText("Month") as HTMLSelectElement).value).toBe("0");
    expect((screen.getByLabelText("Year") as HTMLSelectElement).value).toBe(targetYear);
    // January of the target year is now in view.
    expect(
      screen.getByRole("grid", { name: `January ${targetYear}` }),
    ).toBeInTheDocument();
  });

  it("clears the selection", () => {
    const onChange = vi.fn();
    render(<DatePicker defaultValue={new Date(2026, 5, 10)} onChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Jun 10, 2026" }));
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    expect(onChange).toHaveBeenCalledWith(null);
  });

  describe("invalid state and aria wiring", () => {
    it("isInvalid marks the trigger with aria-invalid and a red border", () => {
      render(<DatePicker isInvalid placeholder="Pick" />);
      const trigger = screen.getByRole("button", { name: "Pick" });
      expect(trigger).toHaveAttribute("aria-invalid", "true");
      expect(trigger.className).toContain("border-red-500");
    });

    it("does not set aria-invalid or red border by default", () => {
      render(<DatePicker placeholder="Pick" />);
      const trigger = screen.getByRole("button", { name: "Pick" });
      expect(trigger).not.toHaveAttribute("aria-invalid");
      expect(trigger.className).not.toContain("border-red-500");
    });

    it("forwards id and aria-describedby to the trigger", () => {
      render(
        <DatePicker id="start" aria-describedby="start-error" placeholder="Pick" />,
      );
      const trigger = screen.getByRole("button", { name: "Pick" });
      expect(trigger).toHaveAttribute("id", "start");
      expect(trigger).toHaveAttribute("aria-describedby", "start-error");
    });
  });
});
