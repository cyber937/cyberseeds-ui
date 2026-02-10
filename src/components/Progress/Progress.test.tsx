import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";
import { testColors } from "../../test-utils";

describe("Progress Component", () => {
  describe("Rendering", () => {
    it("renders progressbar", () => {
      render(<Progress value={50} />);
      expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    it("renders bar with correct width", () => {
      const { container } = render(<Progress value={75} />);
      const bar = container.querySelector("[role='progressbar'] > div") as HTMLElement;
      expect(bar.style.width).toBe("75%");
    });
  });

  describe("Value handling", () => {
    it("clamps value at 0%", () => {
      const { container } = render(<Progress value={-10} />);
      const bar = container.querySelector("[role='progressbar'] > div") as HTMLElement;
      expect(bar.style.width).toBe("0%");
    });

    it("clamps value at 100%", () => {
      const { container } = render(<Progress value={150} />);
      const bar = container.querySelector("[role='progressbar'] > div") as HTMLElement;
      expect(bar.style.width).toBe("100%");
    });

    it("handles custom max value", () => {
      const { container } = render(<Progress value={25} max={50} />);
      const bar = container.querySelector("[role='progressbar'] > div") as HTMLElement;
      expect(bar.style.width).toBe("50%");
    });
  });

  describe("Show value", () => {
    it("shows percentage when showValue is true", () => {
      render(<Progress value={75} showValue />);
      expect(screen.getByText("75%")).toBeInTheDocument();
    });

    it("does not show percentage by default", () => {
      render(<Progress value={75} />);
      expect(screen.queryByText("75%")).not.toBeInTheDocument();
    });
  });

  describe("Label", () => {
    it("renders label text", () => {
      render(<Progress value={50} label="Upload progress" />);
      expect(screen.getByText("Upload progress")).toBeInTheDocument();
    });

    it("renders both label and value", () => {
      render(<Progress value={50} label="Uploading" showValue />);
      expect(screen.getByText("Uploading")).toBeInTheDocument();
      expect(screen.getByText("50%")).toBeInTheDocument();
    });
  });

  describe("Scale", () => {
    it("renders with sm track height", () => {
      render(<Progress value={50} scale="sm" />);
      const track = screen.getByRole("progressbar");
      expect(track).toHaveClass("cs:h-1.5");
    });

    it("renders with md track height", () => {
      render(<Progress value={50} scale="md" />);
      const track = screen.getByRole("progressbar");
      expect(track).toHaveClass("cs:h-2.5");
    });
  });

  describe("Colors", () => {
    it("renders with default blue color", () => {
      const { container } = render(<Progress value={50} />);
      const bar = container.querySelector("[role='progressbar'] > div");
      expect(bar).toHaveClass("cs:bg-blue-600");
    });

    it("renders with different preset colors", () => {
      testColors.forEach((color) => {
        const { unmount } = render(<Progress value={50} color={color} />);
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Animation", () => {
    it("applies animated class when animated is true", () => {
      const { container } = render(<Progress value={50} animated />);
      const bar = container.querySelector("[role='progressbar'] > div");
      expect(bar).toHaveClass("cs-progress-animated");
    });

    it("does not apply animated class by default", () => {
      const { container } = render(<Progress value={50} />);
      const bar = container.querySelector("[role='progressbar'] > div");
      expect(bar).not.toHaveClass("cs-progress-animated");
    });
  });

  describe("Accessibility", () => {
    it("has role=progressbar", () => {
      render(<Progress value={50} />);
      expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    it("has correct aria-valuenow", () => {
      render(<Progress value={75} />);
      expect(screen.getByRole("progressbar")).toHaveAttribute(
        "aria-valuenow",
        "75",
      );
    });

    it("has correct aria-valuemin and aria-valuemax", () => {
      render(<Progress value={50} max={200} />);
      const progressbar = screen.getByRole("progressbar");
      expect(progressbar).toHaveAttribute("aria-valuemin", "0");
      expect(progressbar).toHaveAttribute("aria-valuemax", "200");
    });

    it("has aria-label from label prop", () => {
      render(<Progress value={50} label="File upload" />);
      expect(screen.getByRole("progressbar")).toHaveAttribute(
        "aria-label",
        "File upload",
      );
    });

    it("has default aria-label when no label provided", () => {
      render(<Progress value={50} />);
      expect(screen.getByRole("progressbar")).toHaveAttribute(
        "aria-label",
        "Progress",
      );
    });
  });
});
