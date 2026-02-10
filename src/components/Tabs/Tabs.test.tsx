import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./Tabs";

function SimpleTabs({ value, onChange, ...props }: any) {
  return (
    <Tabs value={value} onChange={onChange} {...props}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Content 1</Tabs.Content>
      <Tabs.Content value="tab2">Content 2</Tabs.Content>
      <Tabs.Content value="tab3">Content 3</Tabs.Content>
    </Tabs>
  );
}

describe("Tabs Component", () => {
  describe("Controlled mode", () => {
    it("renders tabs with active tab content", () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByText("Tab 1")).toBeInTheDocument();
      expect(screen.getByText("Tab 2")).toBeInTheDocument();
      expect(screen.getByText("Tab 3")).toBeInTheDocument();
      expect(screen.getByText("Content 1")).toBeInTheDocument();
      expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
    });

    it("calls onChange when a tab is clicked", () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab1" onChange={onChange} />);
      fireEvent.click(screen.getByText("Tab 2"));
      expect(onChange).toHaveBeenCalledWith("tab2");
    });

    it("shows correct content for active tab", () => {
      render(<SimpleTabs value="tab2" />);
      expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
      expect(screen.getByText("Content 2")).toBeInTheDocument();
    });
  });

  describe("Uncontrolled mode", () => {
    it("switches tabs on click", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content 1</Tabs.Content>
          <Tabs.Content value="tab2">Content 2</Tabs.Content>
        </Tabs>,
      );

      expect(screen.getByText("Content 1")).toBeInTheDocument();
      fireEvent.click(screen.getByText("Tab 2"));
      expect(screen.getByText("Content 2")).toBeInTheDocument();
      expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    });
  });

  describe("Keyboard navigation", () => {
    it("moves to next tab with ArrowRight", () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab1" onChange={onChange} />);
      const tab1 = screen.getByText("Tab 1").closest("button")!;
      tab1.focus();
      fireEvent.keyDown(tab1, { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith("tab2");
    });

    it("moves to previous tab with ArrowLeft", () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab2" onChange={onChange} />);
      const tab2 = screen.getByText("Tab 2").closest("button")!;
      tab2.focus();
      fireEvent.keyDown(tab2, { key: "ArrowLeft" });
      expect(onChange).toHaveBeenCalledWith("tab1");
    });

    it("wraps around with ArrowRight at end", () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab3" onChange={onChange} />);
      const tab3 = screen.getByText("Tab 3").closest("button")!;
      tab3.focus();
      fireEvent.keyDown(tab3, { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith("tab1");
    });

    it("moves to first tab with Home", () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab3" onChange={onChange} />);
      const tab3 = screen.getByText("Tab 3").closest("button")!;
      tab3.focus();
      fireEvent.keyDown(tab3, { key: "Home" });
      expect(onChange).toHaveBeenCalledWith("tab1");
    });

    it("moves to last tab with End", () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab1" onChange={onChange} />);
      const tab1 = screen.getByText("Tab 1").closest("button")!;
      tab1.focus();
      fireEvent.keyDown(tab1, { key: "End" });
      expect(onChange).toHaveBeenCalledWith("tab3");
    });
  });

  describe("Disabled tabs", () => {
    it("renders disabled tab", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2" disabled>Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content 1</Tabs.Content>
          <Tabs.Content value="tab2">Content 2</Tabs.Content>
        </Tabs>,
      );

      expect(screen.getByText("Tab 2").closest("button")).toBeDisabled();
    });
  });

  describe("Accessibility", () => {
    it("has role=tablist on the list", () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByRole("tablist")).toBeInTheDocument();
    });

    it("has role=tab on triggers", () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getAllByRole("tab")).toHaveLength(3);
    });

    it("has role=tabpanel on content", () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByRole("tabpanel")).toBeInTheDocument();
    });

    it("sets aria-selected on active tab", () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByText("Tab 1").closest("button")).toHaveAttribute(
        "aria-selected",
        "true",
      );
      expect(screen.getByText("Tab 2").closest("button")).toHaveAttribute(
        "aria-selected",
        "false",
      );
    });

    it("sets aria-controls on tabs and aria-labelledby on panels", () => {
      render(<SimpleTabs value="tab1" />);
      const tab = screen.getByText("Tab 1").closest("button")!;
      const panel = screen.getByRole("tabpanel");
      expect(tab).toHaveAttribute("aria-controls", panel.id);
      expect(panel).toHaveAttribute("aria-labelledby", tab.id);
    });

    it("sets tabindex correctly for roving focus", () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByText("Tab 1").closest("button")).toHaveAttribute(
        "tabindex",
        "0",
      );
      expect(screen.getByText("Tab 2").closest("button")).toHaveAttribute(
        "tabindex",
        "-1",
      );
    });

    it("tabpanel has tabindex=0 for keyboard access", () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByRole("tabpanel")).toHaveAttribute("tabindex", "0");
    });
  });
});
