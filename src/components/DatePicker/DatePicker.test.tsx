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

  it("navigates months", () => {
    render(<DatePicker defaultValue={new Date(2026, 5, 10)} />);
    fireEvent.click(screen.getByRole("button", { name: "Jun 10, 2026" }));
    expect(screen.getByText("June 2026")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Next month" }));
    expect(screen.getByText("July 2026")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Previous month" }));
    fireEvent.click(screen.getByRole("button", { name: "Previous month" }));
    expect(screen.getByText("May 2026")).toBeInTheDocument();
  });

  it("clears the selection", () => {
    const onChange = vi.fn();
    render(<DatePicker defaultValue={new Date(2026, 5, 10)} onChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Jun 10, 2026" }));
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    expect(onChange).toHaveBeenCalledWith(null);
  });
});
