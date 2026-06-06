import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormField } from "./FormField";
import { Input } from "../Input/Input";
import { Select, SelectOption } from "../Select/Select";
import { TextArea } from "../TextArea/TextArea";
import { PhoneInput } from "../PhoneInput/PhoneInput";

describe("FormField propagates isRequired to underlying form controls", () => {
  it("makes Input.required true when wrapped in <FormField isRequired />", () => {
    render(
      <FormField isRequired>
        <Input data-testid="i" />
      </FormField>,
    );
    expect(screen.getByTestId("i")).toBeRequired();
  });

  it("makes Select.required true when wrapped in <FormField isRequired />", () => {
    render(
      <FormField isRequired>
        <Select data-testid="s">
          <SelectOption label="A" value="a" />
        </Select>
      </FormField>,
    );
    expect(screen.getByTestId("s")).toBeRequired();
  });

  it("makes TextArea.required true when wrapped in <FormField isRequired />", () => {
    render(
      <FormField isRequired>
        <TextArea data-testid="t" />
      </FormField>,
    );
    expect(screen.getByTestId("t")).toBeRequired();
  });

  it("makes PhoneInput's underlying input required when wrapped in <FormField isRequired />", () => {
    render(
      <FormField isRequired>
        <PhoneInput data-testid="p" />
      </FormField>,
    );
    expect(screen.getByTestId("p")).toBeRequired();
  });

  it("does not require the control when FormField.isRequired is false", () => {
    render(
      <FormField>
        <Input data-testid="i" />
      </FormField>,
    );
    expect(screen.getByTestId("i")).not.toBeRequired();
  });

  it("still honours an explicit required prop on the control itself (no FormField)", () => {
    render(<Input required data-testid="i" />);
    expect(screen.getByTestId("i")).toBeRequired();
  });

  it("OR-merges: control.required OR FormField.isRequired wins", () => {
    // FormField says no, control says yes — control wins.
    render(
      <FormField>
        <Input required data-testid="i" />
      </FormField>,
    );
    expect(screen.getByTestId("i")).toBeRequired();
  });
});
