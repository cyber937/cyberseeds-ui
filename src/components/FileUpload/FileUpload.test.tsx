import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { FileUpload, type FileRejection } from "./FileUpload";

function makeFile(name: string, size: number, type = "") {
  const file = new File(["x"], name, { type });
  Object.defineProperty(file, "size", { value: size });
  return file;
}

function getInput(): HTMLInputElement {
  // The hidden <input type="file"> is not exposed via an accessible role.
  return document.querySelector('input[type="file"]') as HTMLInputElement;
}

describe("FileUpload", () => {
  it("renders an accessible dropzone with the label", () => {
    render(<FileUpload label="Drop it here" />);
    expect(
      screen.getByRole("button", { name: "Drop it here" }),
    ).toBeInTheDocument();
  });

  it("calls onChange with the selected file", () => {
    const onChange = vi.fn();
    render(<FileUpload onChange={onChange} />);
    const file = makeFile("a.txt", 10);

    fireEvent.change(getInput(), { target: { files: [file] } });

    expect(onChange).toHaveBeenCalledWith([file]);
    expect(screen.getByText("a.txt")).toBeInTheDocument();
  });

  it("replaces the file in single mode", () => {
    const onChange = vi.fn();
    render(<FileUpload onChange={onChange} />);
    fireEvent.change(getInput(), { target: { files: [makeFile("a.txt", 1)] } });
    fireEvent.change(getInput(), { target: { files: [makeFile("b.txt", 1)] } });
    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({ name: "b.txt" }),
    ]);
  });

  it("appends files in multiple mode", () => {
    const onChange = vi.fn();
    render(<FileUpload onChange={onChange} multiple />);
    fireEvent.change(getInput(), { target: { files: [makeFile("c.txt", 1)] } });
    fireEvent.change(getInput(), { target: { files: [makeFile("d.txt", 1)] } });
    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({ name: "c.txt" }),
      expect.objectContaining({ name: "d.txt" }),
    ]);
  });

  it("rejects files over maxSize and reports them via onReject", () => {
    const onChange = vi.fn();
    const onReject = vi.fn();
    render(<FileUpload maxSize={100} onChange={onChange} onReject={onReject} />);

    const big = makeFile("big.bin", 200);
    fireEvent.change(getInput(), { target: { files: [big] } });

    expect(onChange).not.toHaveBeenCalled();
    expect(onReject).toHaveBeenCalledWith<[FileRejection[]]>([
      { file: big, reason: "size" },
    ]);
  });

  it("rejects files that don't match accept", () => {
    const onChange = vi.fn();
    const onReject = vi.fn();
    render(
      <FileUpload accept=".csv" onChange={onChange} onReject={onReject} />,
    );

    const wrong = makeFile("photo.png", 10, "image/png");
    fireEvent.change(getInput(), { target: { files: [wrong] } });

    expect(onChange).not.toHaveBeenCalled();
    expect(onReject).toHaveBeenCalledWith([{ file: wrong, reason: "type" }]);
  });

  it("removes a selected file", () => {
    const onChange = vi.fn();
    render(<FileUpload onChange={onChange} />);
    fireEvent.change(getInput(), { target: { files: [makeFile("a.txt", 1)] } });

    fireEvent.click(screen.getByRole("button", { name: "Remove a.txt" }));
    expect(onChange).toHaveBeenLastCalledWith([]);
    expect(screen.queryByText("a.txt")).not.toBeInTheDocument();
  });

  it("does not accept files when disabled", () => {
    const onChange = vi.fn();
    render(<FileUpload disabled label="Upload disabled" onChange={onChange} />);
    const zone = screen.getByRole("button", { name: "Upload disabled" });
    expect(zone).toHaveAttribute("aria-disabled", "true");

    fireEvent.drop(zone, { dataTransfer: { files: [makeFile("a.txt", 1)] } });
    expect(onChange).not.toHaveBeenCalled();
  });

  describe("invalid state and aria wiring", () => {
    it("isInvalid marks the dropzone with aria-invalid and a red border", () => {
      render(<FileUpload isInvalid label="Zone" />);
      const zone = screen.getByRole("button", { name: "Zone" });
      expect(zone).toHaveAttribute("aria-invalid", "true");
      expect(zone.className).toContain("border-red-500");
    });

    it("does not set aria-invalid or red border by default", () => {
      render(<FileUpload label="Zone" />);
      const zone = screen.getByRole("button", { name: "Zone" });
      expect(zone).not.toHaveAttribute("aria-invalid");
      expect(zone.className).not.toContain("border-red-500");
    });

    it("forwards id and aria-describedby to the dropzone", () => {
      render(
        <FileUpload id="attachments" aria-describedby="attachments-error" label="Zone" />,
      );
      const zone = screen.getByRole("button", { name: "Zone" });
      expect(zone).toHaveAttribute("id", "attachments");
      expect(zone).toHaveAttribute("aria-describedby", "attachments-error");
    });
  });
});
