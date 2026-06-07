import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { TagInput } from "./TagInput";

function getField(): HTMLInputElement {
  return screen.getByRole("textbox") as HTMLInputElement;
}

describe("TagInput", () => {
  it("renders existing tags", () => {
    render(<TagInput defaultValue={["cars", "trucks"]} />);
    expect(screen.getByText("cars")).toBeInTheDocument();
    expect(screen.getByText("trucks")).toBeInTheDocument();
  });

  it("adds a tag on Enter and clears the field", () => {
    const onChange = vi.fn();
    render(<TagInput value={[]} onChange={onChange} />);
    const field = getField();
    fireEvent.change(field, { target: { value: "boats" } });
    fireEvent.keyDown(field, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith(["boats"]);
  });

  it("adds a tag on comma", () => {
    const onChange = vi.fn();
    render(<TagInput value={["a"]} onChange={onChange} />);
    fireEvent.change(getField(), { target: { value: "b" } });
    fireEvent.keyDown(getField(), { key: "," });
    expect(onChange).toHaveBeenCalledWith(["a", "b"]);
  });

  it("removes the last tag on Backspace when the field is empty", () => {
    const onChange = vi.fn();
    render(<TagInput value={["a", "b"]} onChange={onChange} />);
    fireEvent.keyDown(getField(), { key: "Backspace" });
    expect(onChange).toHaveBeenCalledWith(["a"]);
  });

  it("removes a tag via its × button", () => {
    const onChange = vi.fn();
    render(<TagInput value={["a", "b"]} onChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Remove a" }));
    expect(onChange).toHaveBeenCalledWith(["b"]);
  });

  it("dedupes case-insensitively by default", () => {
    const onChange = vi.fn();
    render(<TagInput value={["Cars"]} onChange={onChange} />);
    fireEvent.change(getField(), { target: { value: "cars" } });
    fireEvent.keyDown(getField(), { key: "Enter" });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("enforces maxTags", () => {
    const onChange = vi.fn();
    render(<TagInput value={["a", "b"]} maxTags={2} onChange={onChange} />);
    fireEvent.change(getField(), { target: { value: "c" } });
    fireEvent.keyDown(getField(), { key: "Enter" });
    expect(onChange).not.toHaveBeenCalled();
  });
});
