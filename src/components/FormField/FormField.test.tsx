import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormField } from "./FormField";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { Select, SelectOption } from "../Select/Select";
import { useFormField } from "./FormFieldContext";

// Helper component to inspect context values
function ContextInspector() {
  const ctx = useFormField();
  return (
    <div data-testid="ctx">
      <span data-testid="ctx-id">{ctx?.id}</span>
      <span data-testid="ctx-invalid">{String(ctx?.isInvalid)}</span>
      <span data-testid="ctx-required">{String(ctx?.isRequired)}</span>
      <span data-testid="ctx-disabled">{String(ctx?.isDisabled)}</span>
    </div>
  );
}

describe("FormField Component", () => {
  describe("Basic rendering", () => {
    it("renders children", () => {
      render(
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <Input placeholder="test" />
        </FormField>,
      );
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders with all sub-components", () => {
      render(
        <FormField isInvalid>
          <FormField.Label>Name</FormField.Label>
          <Input />
          <FormField.Error>Name is required</FormField.Error>
          <FormField.Help>Enter your full name</FormField.Help>
        </FormField>,
      );
      expect(screen.getByText("Name")).toBeInTheDocument();
      expect(screen.getByText("Name is required")).toBeInTheDocument();
      expect(screen.getByText("Enter your full name")).toBeInTheDocument();
    });
  });

  describe("Context propagation", () => {
    it("provides context to children", () => {
      render(
        <FormField isInvalid isRequired isDisabled>
          <ContextInspector />
        </FormField>,
      );
      expect(screen.getByTestId("ctx-invalid")).toHaveTextContent("true");
      expect(screen.getByTestId("ctx-required")).toHaveTextContent("true");
      expect(screen.getByTestId("ctx-disabled")).toHaveTextContent("true");
    });

    it("defaults to false for boolean context values", () => {
      render(
        <FormField>
          <ContextInspector />
        </FormField>,
      );
      expect(screen.getByTestId("ctx-invalid")).toHaveTextContent("false");
      expect(screen.getByTestId("ctx-required")).toHaveTextContent("false");
      expect(screen.getByTestId("ctx-disabled")).toHaveTextContent("false");
    });
  });

  describe("FormField.Label", () => {
    it("renders label with correct htmlFor", () => {
      render(
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <Input />
        </FormField>,
      );
      const label = screen.getByText("Email");
      const input = screen.getByRole("textbox");
      expect(label).toHaveAttribute("for", input.id);
    });

    it("shows required indicator when isRequired", () => {
      render(
        <FormField isRequired>
          <FormField.Label>Email</FormField.Label>
          <Input />
        </FormField>,
      );
      const label = screen.getByText("Email");
      expect(label).toHaveClass("cs:after:content-['*']");
    });
  });

  describe("FormField.Error", () => {
    it("renders error message when isInvalid", () => {
      render(
        <FormField isInvalid>
          <Input />
          <FormField.Error>This field is required</FormField.Error>
        </FormField>,
      );
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });

    it("hides error message when not invalid", () => {
      render(
        <FormField isInvalid={false}>
          <Input />
          <FormField.Error>This field is required</FormField.Error>
        </FormField>,
      );
      expect(screen.queryByText("This field is required")).not.toBeInTheDocument();
    });

    it("has role=alert and aria-live=polite", () => {
      render(
        <FormField isInvalid>
          <Input />
          <FormField.Error>Error</FormField.Error>
        </FormField>,
      );
      const error = screen.getByRole("alert");
      expect(error).toHaveAttribute("aria-live", "polite");
    });
  });

  describe("FormField.Help", () => {
    it("renders help text", () => {
      render(
        <FormField>
          <Input />
          <FormField.Help>Enter a valid email</FormField.Help>
        </FormField>,
      );
      expect(screen.getByText("Enter a valid email")).toBeInTheDocument();
    });

    it("has correct id for aria-describedby linkage", () => {
      render(
        <FormField>
          <Input />
          <FormField.Help>Help text</FormField.Help>
        </FormField>,
      );
      const input = screen.getByRole("textbox");
      const help = screen.getByText("Help text");
      const describedBy = input.getAttribute("aria-describedby");
      expect(describedBy).toContain(help.id);
    });
  });

  describe("Input integration", () => {
    it("associates input id with FormField context", () => {
      render(
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <Input />
        </FormField>,
      );
      const label = screen.getByText("Email");
      const input = screen.getByRole("textbox");
      expect(label.getAttribute("for")).toBe(input.id);
    });

    it("merges isInvalid from FormField", () => {
      render(
        <FormField isInvalid>
          <Input />
        </FormField>,
      );
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).toHaveClass("cs:text-red-400");
    });

    it("merges isDisabled from FormField", () => {
      render(
        <FormField isDisabled>
          <Input />
        </FormField>,
      );
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
    });

    it("component props take priority over FormField context", () => {
      render(
        <FormField isInvalid={false}>
          <Input isInvalid />
        </FormField>,
      );
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("sets aria-describedby when inside FormField", () => {
      render(
        <FormField>
          <Input />
        </FormField>,
      );
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-describedby");
    });

    it("does not set aria-describedby when outside FormField", () => {
      render(<Input />);
      const input = screen.getByRole("textbox");
      expect(input).not.toHaveAttribute("aria-describedby");
    });
  });

  describe("TextArea integration", () => {
    it("merges isInvalid from FormField", () => {
      render(
        <FormField isInvalid>
          <TextArea />
        </FormField>,
      );
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("aria-invalid", "true");
    });

    it("merges isDisabled from FormField", () => {
      render(
        <FormField isDisabled>
          <TextArea />
        </FormField>,
      );
      const textarea = screen.getByRole("textbox");
      expect(textarea).toBeDisabled();
    });
  });

  describe("Select integration", () => {
    it("merges isInvalid from FormField", () => {
      render(
        <FormField isInvalid>
          <Select>
            <SelectOption label="Option 1" value="1" />
          </Select>
        </FormField>,
      );
      const select = screen.getByRole("combobox");
      expect(select).toHaveAttribute("aria-invalid", "true");
    });

    it("merges isDisabled from FormField", () => {
      render(
        <FormField isDisabled>
          <Select>
            <SelectOption label="Option 1" value="1" />
          </Select>
        </FormField>,
      );
      const select = screen.getByRole("combobox");
      expect(select).toBeDisabled();
    });

    it("sets aria-describedby when inside FormField", () => {
      render(
        <FormField>
          <Select>
            <SelectOption label="Option 1" value="1" />
          </Select>
        </FormField>,
      );
      const select = screen.getByRole("combobox");
      expect(select).toHaveAttribute("aria-describedby");
    });
  });

  describe("Scale propagation", () => {
    it("applies sm scale gap", () => {
      const { container } = render(
        <FormField scale="sm">
          <FormField.Label>Label</FormField.Label>
          <Input />
        </FormField>,
      );
      const wrapper = container.firstElementChild;
      expect(wrapper).toHaveClass("cs:gap-0.5");
    });

    it("applies md scale gap", () => {
      const { container } = render(
        <FormField scale="md">
          <FormField.Label>Label</FormField.Label>
          <Input />
        </FormField>,
      );
      const wrapper = container.firstElementChild;
      expect(wrapper).toHaveClass("cs:gap-1");
    });
  });

  describe("Error boundary", () => {
    it("throws when FormField.Label used outside FormField", () => {
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      expect(() => {
        render(<FormField.Label>Label</FormField.Label>);
      }).toThrow("FormField.Label must be used within a FormField");
      consoleSpy.mockRestore();
    });

    it("throws when FormField.Error used outside FormField", () => {
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      expect(() => {
        render(<FormField.Error>Error</FormField.Error>);
      }).toThrow("FormField.Error must be used within a FormField");
      consoleSpy.mockRestore();
    });

    it("throws when FormField.Help used outside FormField", () => {
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      expect(() => {
        render(<FormField.Help>Help</FormField.Help>);
      }).toThrow("FormField.Help must be used within a FormField");
      consoleSpy.mockRestore();
    });
  });

  describe("useFormField hook", () => {
    it("returns undefined when outside FormField", () => {
      let result: any;
      function TestComponent() {
        result = useFormField();
        return null;
      }
      render(<TestComponent />);
      expect(result).toBeUndefined();
    });

    it("returns context when inside FormField", () => {
      let result: any;
      function TestComponent() {
        result = useFormField();
        return null;
      }
      render(
        <FormField isInvalid isRequired>
          <TestComponent />
        </FormField>,
      );
      expect(result).toBeDefined();
      expect(result.isInvalid).toBe(true);
      expect(result.isRequired).toBe(true);
    });
  });
});
