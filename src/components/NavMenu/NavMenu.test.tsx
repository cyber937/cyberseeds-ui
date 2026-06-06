import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavMenu } from "./NavMenu";

describe("NavMenu Component", () => {
  describe("Root structure", () => {
    it("renders a <nav> landmark with aria-label", () => {
      render(
        <NavMenu>
          <NavMenu.Item href="/">Home</NavMenu.Item>
        </NavMenu>,
      );
      expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    });

    it("supports a custom ariaLabel", () => {
      render(
        <NavMenu ariaLabel="Admin sidebar">
          <NavMenu.Item href="/">Home</NavMenu.Item>
        </NavMenu>,
      );
      expect(screen.getByRole("navigation", { name: "Admin sidebar" })).toBeInTheDocument();
    });
  });

  describe("NavMenu.Item", () => {
    it("renders as a link when href is provided", () => {
      render(
        <NavMenu>
          <NavMenu.Item href="/items">Items</NavMenu.Item>
        </NavMenu>,
      );
      const link = screen.getByRole("link", { name: "Items" });
      expect(link).toHaveAttribute("href", "/items");
    });

    it("renders as a button when no href is provided", () => {
      render(
        <NavMenu>
          <NavMenu.Item>Action</NavMenu.Item>
        </NavMenu>,
      );
      expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
    });

    it("marks the active item with aria-current='page'", () => {
      render(
        <NavMenu>
          <NavMenu.Item href="/" active>Home</NavMenu.Item>
          <NavMenu.Item href="/items">Items</NavMenu.Item>
        </NavMenu>,
      );
      expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
      expect(screen.getByRole("link", { name: "Items" })).not.toHaveAttribute("aria-current");
    });

    it("renders the icon and trailing slot when provided", () => {
      render(
        <NavMenu>
          <NavMenu.Item
            href="/"
            icon={<span data-testid="icon">★</span>}
            trailing={<span data-testid="badge">3</span>}
          >
            Home
          </NavMenu.Item>
        </NavMenu>,
      );
      expect(screen.getByTestId("icon")).toBeInTheDocument();
      expect(screen.getByTestId("badge")).toBeInTheDocument();
    });

    it("fires onClick when a link item is clicked", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn((e: React.MouseEvent) => e.preventDefault());
      render(
        <NavMenu>
          <NavMenu.Item href="/" onClick={handleClick}>Home</NavMenu.Item>
        </NavMenu>,
      );
      await user.click(screen.getByRole("link", { name: "Home" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("fires onClick when a button item is clicked", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <NavMenu>
          <NavMenu.Item onClick={handleClick}>Logout</NavMenu.Item>
        </NavMenu>,
      );
      await user.click(screen.getByRole("button", { name: "Logout" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not fire onClick when disabled (button variant)", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <NavMenu>
          <NavMenu.Item onClick={handleClick} disabled>Disabled</NavMenu.Item>
        </NavMenu>,
      );
      await user.click(screen.getByRole("button", { name: "Disabled" }));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("marks the disabled link with aria-disabled and tabIndex=-1", () => {
      render(
        <NavMenu>
          <NavMenu.Item href="/x" disabled>Soon</NavMenu.Item>
        </NavMenu>,
      );
      const link = screen.getByRole("link", { name: "Soon" });
      expect(link).toHaveAttribute("aria-disabled", "true");
      expect(link).toHaveAttribute("tabindex", "-1");
    });
  });

  describe("NavMenu.Section", () => {
    it("renders a section title as a separate header", () => {
      render(
        <NavMenu>
          <NavMenu.Section title="Operations">
            <NavMenu.Item href="/">Home</NavMenu.Item>
          </NavMenu.Section>
        </NavMenu>,
      );
      expect(screen.getByText("Operations")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    });

    it("renders multiple sections side by side", () => {
      render(
        <NavMenu>
          <NavMenu.Section title="Ops">
            <NavMenu.Item href="/a">A</NavMenu.Item>
          </NavMenu.Section>
          <NavMenu.Section title="Admin">
            <NavMenu.Item href="/b">B</NavMenu.Item>
          </NavMenu.Section>
        </NavMenu>,
      );
      expect(screen.getByText("Ops")).toBeInTheDocument();
      expect(screen.getByText("Admin")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "A" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "B" })).toBeInTheDocument();
    });
  });
});
