import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import { Combobox, type ComboboxOption } from "./Combobox";
import * as stories from "./Combobox.stories";

const { Primary, WithDefaultValue, Disabled, NotClearable } =
  composeStories(stories);

const FRUITS: ComboboxOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

const STATUSES: ComboboxOption[] = [
  { value: "active", label: "Active" },
  { value: "discontinued", label: "Discontinued", disabled: true },
  { value: "clearance", label: "Clearance" },
];

describe("Combobox Component", () => {
  describe("Storybook Stories", () => {
    it("renders Primary as a closed combobox", () => {
      render(<Primary />);
      const input = screen.getByRole("searchbox");
      expect(input).toBeInTheDocument();
      expect(screen.getByRole("combobox")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    it("renders WithDefaultValue showing the initial label", () => {
      render(<WithDefaultValue />);
      const input = screen.getByRole("searchbox") as HTMLInputElement;
      expect(input.value).toBe("Banana");
    });

    it("renders Disabled with the input disabled", () => {
      render(<Disabled />);
      expect(screen.getByRole("searchbox")).toBeDisabled();
    });

    it("hides the clear button when clearable=false", () => {
      render(<NotClearable />);
      expect(
        screen.queryByRole("button", { name: /clear/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe("Selection", () => {
    it("opens the dropdown on focus", () => {
      render(<Combobox options={FRUITS} />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      expect(screen.getByRole("combobox")).toHaveAttribute(
        "aria-expanded",
        "true",
      );
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("calls onChange with the selected option's value when clicked", () => {
      const onChange = vi.fn();
      render(<Combobox options={FRUITS} onChange={onChange} />);
      fireEvent.focus(screen.getByRole("searchbox"));
      fireEvent.mouseDown(screen.getByText("Banana"));
      expect(onChange).toHaveBeenCalledWith("banana");
    });

    it("updates the input to the selected label after selection", () => {
      render(<Combobox options={FRUITS} />);
      const input = screen.getByRole("searchbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.mouseDown(screen.getByText("Cherry"));
      expect(input.value).toBe("Cherry");
    });

    it("ignores clicks on disabled options", () => {
      const onChange = vi.fn();
      render(<Combobox options={STATUSES} onChange={onChange} />);
      fireEvent.focus(screen.getByRole("searchbox"));
      fireEvent.mouseDown(screen.getByText("Discontinued"));
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("Filtering", () => {
    it("filters by case-insensitive substring on input", () => {
      render(<Combobox options={FRUITS} />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "an" } });
      // "Banana" matches; "Apple"/"Cherry" don't.
      const options = screen.getAllByRole("option");
      expect(options).toHaveLength(1);
      expect(options[0]).toHaveTextContent("Banana");
    });

    it("shows the empty message when nothing matches", () => {
      render(<Combobox options={FRUITS} emptyMessage="Nothing!" />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "zzz" } });
      expect(screen.getByText("Nothing!")).toBeInTheDocument();
      expect(screen.queryByRole("option")).toBeNull();
    });

    it("respects a custom filter function", () => {
      // Starts-with filter
      const filter = (o: ComboboxOption, s: string) =>
        o.label.toLowerCase().startsWith(s.toLowerCase());
      render(<Combobox options={FRUITS} filter={filter} />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "ba" } });
      const options = screen.getAllByRole("option");
      expect(options).toHaveLength(1);
      expect(options[0]).toHaveTextContent("Banana");
    });
  });

  describe("Keyboard navigation", () => {
    it("ArrowDown opens the dropdown when closed", () => {
      render(<Combobox options={FRUITS} />);
      const input = screen.getByRole("searchbox");
      input.focus();
      // After focus the dropdown is already open via onFocus, so blur first.
      fireEvent.blur(input);
      // Force closed
      fireEvent.mouseDown(document.body);

      input.focus();
      fireEvent.keyDown(input, { key: "ArrowDown" });
      expect(screen.getByRole("combobox")).toHaveAttribute(
        "aria-expanded",
        "true",
      );
    });

    it("ArrowDown moves the active option down", () => {
      render(<Combobox options={FRUITS} />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "ArrowDown" });
      // Should have aria-activedescendant pointing at the second option.
      const activeId = input.getAttribute("aria-activedescendant");
      expect(activeId).toContain("banana");
    });

    it("ArrowUp moves the active option up", () => {
      render(<Combobox options={FRUITS} />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "ArrowUp" });
      const activeId = input.getAttribute("aria-activedescendant");
      expect(activeId).toContain("apple");
    });

    it("Enter commits the active option", () => {
      const onChange = vi.fn();
      render(<Combobox options={FRUITS} onChange={onChange} />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" }); // open + active 0
      fireEvent.keyDown(input, { key: "ArrowDown" }); // → banana
      fireEvent.keyDown(input, { key: "Enter" });
      expect(onChange).toHaveBeenCalledWith("banana");
    });

    it("Escape closes the dropdown and restores the input", () => {
      render(<Combobox options={FRUITS} defaultValue="apple" />);
      const input = screen.getByRole("searchbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "zz" } });
      fireEvent.keyDown(input, { key: "Escape" });
      expect(screen.getByRole("combobox")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
      expect(input.value).toBe("Apple");
    });

    it("Home jumps to the first option, End jumps to the last", () => {
      render(<Combobox options={FRUITS} />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "End" });
      expect(input.getAttribute("aria-activedescendant")).toContain("cherry");
      fireEvent.keyDown(input, { key: "Home" });
      expect(input.getAttribute("aria-activedescendant")).toContain("apple");
    });
  });

  describe("Clear button", () => {
    it("appears once a value is selected and clears via click", () => {
      const onChange = vi.fn();
      render(
        <Combobox
          options={FRUITS}
          defaultValue="apple"
          onChange={onChange}
        />,
      );
      const clearBtn = screen.getByRole("button", { name: /clear/i });
      expect(clearBtn).toBeInTheDocument();
      fireEvent.click(clearBtn);
      expect(onChange).toHaveBeenCalledWith(null);
      expect((screen.getByRole("searchbox") as HTMLInputElement).value).toBe(
        "",
      );
    });

    it("is hidden when clearable=false", () => {
      render(
        <Combobox
          options={FRUITS}
          defaultValue="apple"
          clearable={false}
        />,
      );
      expect(
        screen.queryByRole("button", { name: /clear/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe("Controlled mode", () => {
    it("uses the parent's value over internal state", () => {
      const { rerender } = render(
        <Combobox options={FRUITS} value="banana" />,
      );
      expect((screen.getByRole("searchbox") as HTMLInputElement).value).toBe(
        "Banana",
      );
      rerender(<Combobox options={FRUITS} value="cherry" />);
      expect((screen.getByRole("searchbox") as HTMLInputElement).value).toBe(
        "Cherry",
      );
    });

    it("does not mutate its own state when controlled", () => {
      const onChange = vi.fn();
      render(<Combobox options={FRUITS} value={null} onChange={onChange} />);
      fireEvent.focus(screen.getByRole("searchbox"));
      fireEvent.mouseDown(screen.getByText("Banana"));
      expect(onChange).toHaveBeenCalledWith("banana");
      // Input value is restored to the controlled value (null → "") because the
      // parent hasn't updated.
      waitFor(() => {
        expect((screen.getByRole("searchbox") as HTMLInputElement).value).toBe(
          "",
        );
      });
    });
  });

  describe("Form integration", () => {
    it("renders a hidden input when name is provided", () => {
      const { container } = render(
        <Combobox options={FRUITS} defaultValue="banana" name="fruit" />,
      );
      const hidden = container.querySelector('input[type="hidden"]');
      expect(hidden).toHaveAttribute("name", "fruit");
      expect(hidden).toHaveAttribute("value", "banana");
    });

    it("renders hidden input with empty value when nothing selected", () => {
      const { container } = render(
        <Combobox options={FRUITS} name="fruit" />,
      );
      const hidden = container.querySelector('input[type="hidden"]');
      expect(hidden).toHaveAttribute("value", "");
    });
  });

  describe("Accessibility", () => {
    it("sets aria-expanded based on open state", () => {
      render(<Combobox options={FRUITS} />);
      const combobox = screen.getByRole("combobox");
      expect(combobox).toHaveAttribute("aria-expanded", "false");
      fireEvent.focus(screen.getByRole("searchbox"));
      expect(combobox).toHaveAttribute("aria-expanded", "true");
    });

    it("sets aria-controls pointing at the listbox", () => {
      render(<Combobox options={FRUITS} />);
      fireEvent.focus(screen.getByRole("searchbox"));
      const combobox = screen.getByRole("combobox");
      const listbox = screen.getByRole("listbox");
      expect(combobox).toHaveAttribute("aria-controls", listbox.id);
    });

    it("sets aria-activedescendant when the user arrows down", () => {
      render(<Combobox options={FRUITS} />);
      const input = screen.getByRole("searchbox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });
      const activeId = input.getAttribute("aria-activedescendant");
      expect(activeId).toBeTruthy();
      const activeOption = document.getElementById(activeId ?? "");
      expect(activeOption).toHaveAttribute("role", "option");
    });

    it("marks selected options with aria-selected", () => {
      render(<Combobox options={FRUITS} defaultValue="banana" />);
      fireEvent.focus(screen.getByRole("searchbox"));
      const selected = screen.getByText("Banana").closest("li");
      expect(selected).toHaveAttribute("aria-selected", "true");
    });

    it("marks disabled options with aria-disabled", () => {
      render(<Combobox options={STATUSES} />);
      fireEvent.focus(screen.getByRole("searchbox"));
      const disabled = screen.getByText("Discontinued").closest("li");
      expect(disabled).toHaveAttribute("aria-disabled", "true");
    });

    it("sets aria-invalid when isInvalid", () => {
      render(<Combobox options={FRUITS} isInvalid />);
      expect(screen.getByRole("searchbox")).toHaveAttribute(
        "aria-invalid",
        "true",
      );
    });
  });

  describe("Scale variants", () => {
    it.each(["xs", "sm", "md", "lg"] as const)(
      "renders with scale=%s",
      (scale) => {
        render(<Combobox options={FRUITS} scale={scale} />);
        expect(screen.getByRole("searchbox")).toBeInTheDocument();
      },
    );
  });

  describe("ref", () => {
    it("forwards a ref to the search input", () => {
      const ref = createRef<HTMLInputElement>();
      render(<Combobox options={FRUITS} ref={ref} />);
      expect(ref.current).toBe(screen.getByRole("searchbox"));
    });
  });

  describe("onSearchChange (async/server-driven options)", () => {
    it("fires with the typed search text", () => {
      const onSearchChange = vi.fn();
      render(<Combobox options={FRUITS} onSearchChange={onSearchChange} />);
      fireEvent.change(screen.getByRole("searchbox"), {
        target: { value: "ap" },
      });
      expect(onSearchChange).toHaveBeenCalledWith("ap");
    });

    it("fires even when options is empty (server has not answered yet)", () => {
      const onSearchChange = vi.fn();
      render(<Combobox options={[]} onSearchChange={onSearchChange} />);
      fireEvent.change(screen.getByRole("searchbox"), {
        target: { value: "yamada" },
      });
      expect(onSearchChange).toHaveBeenCalledWith("yamada");
    });
  });

  describe("aria-describedby", () => {
    it("forwards aria-describedby to the search input", () => {
      render(
        <Combobox options={FRUITS} aria-describedby="parent-error" />,
      );
      expect(screen.getByRole("searchbox")).toHaveAttribute(
        "aria-describedby",
        "parent-error",
      );
    });
  });
});
