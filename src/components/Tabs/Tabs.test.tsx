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

  describe("Context error", () => {
    it("throws when sub-component is used outside Tabs", () => {
      const spy = vi.spyOn(console, "error").mockImplementation(() => {});
      expect(() => render(<Tabs.Trigger value="x">Orphan</Tabs.Trigger>)).toThrow(
        "Tabs sub-components must be used within a Tabs component",
      );
      spy.mockRestore();
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

  describe("asChild", () => {
    function AsChildTabs({ value, onChange }: { value: string; onChange?: (v: string) => void }) {
      return (
        <Tabs value={value} onChange={onChange}>
          <Tabs.List>
            <Tabs.Trigger value="tab1" asChild>
              <a href="#tab1">Tab 1</a>
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2" asChild>
              <a href="#tab2">Tab 2</a>
            </Tabs.Trigger>
            <Tabs.Trigger value="tab3" asChild>
              <a href="#tab3">Tab 3</a>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      );
    }

    it("renders child element instead of button", () => {
      render(<AsChildTabs value="tab1" />);
      const tabs = screen.getAllByRole("tab");
      expect(tabs).toHaveLength(3);
      // Should be <a> elements, not <button>
      expect(tabs[0].tagName).toBe("A");
      expect(tabs[1].tagName).toBe("A");
    });

    it("merges ARIA attributes onto child element", () => {
      render(<AsChildTabs value="tab1" />);
      const tab1 = screen.getByText("Tab 1");
      expect(tab1).toHaveAttribute("role", "tab");
      expect(tab1).toHaveAttribute("aria-selected", "true");
      expect(tab1).toHaveAttribute("tabindex", "0");
      expect(tab1).toHaveAttribute("href", "#tab1");
    });

    it("inactive tab has aria-selected=false and tabindex=-1", () => {
      render(<AsChildTabs value="tab1" />);
      const tab2 = screen.getByText("Tab 2");
      expect(tab2).toHaveAttribute("aria-selected", "false");
      expect(tab2).toHaveAttribute("tabindex", "-1");
    });

    it("calls onChange when child is clicked", () => {
      const onChange = vi.fn();
      render(<AsChildTabs value="tab1" onChange={onChange} />);
      fireEvent.click(screen.getByText("Tab 2"));
      expect(onChange).toHaveBeenCalledWith("tab2");
    });

    it("keyboard navigation works with asChild elements", () => {
      const onChange = vi.fn();
      render(<AsChildTabs value="tab1" onChange={onChange} />);
      const tab1 = screen.getByText("Tab 1");
      tab1.focus();
      fireEvent.keyDown(tab1, { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith("tab2");
    });

    it("merges className from both Trigger and child", () => {
      render(
        <Tabs value="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1" asChild className="trigger-class">
              <a href="#tab1" className="child-class">Tab 1</a>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs>,
      );
      const tab = screen.getByText("Tab 1");
      expect(tab.className).toContain("trigger-class");
      expect(tab.className).toContain("child-class");
    });
  });

  describe("icon and count", () => {
    const Star = (props: { className?: string }) => (
      <svg data-testid="star" {...props} />
    );

    const WithExtras = ({ scale }: { scale?: "xs" | "sm" | "md" | "lg" }) => (
      <Tabs defaultValue="a" scale={scale}>
        <Tabs.List>
          <Tabs.Trigger value="a" icon={<Star />} count={12}>
            在籍
          </Tabs.Trigger>
          <Tabs.Trigger value="b" count={0}>
            退学
          </Tabs.Trigger>
          <Tabs.Trigger value="c">その他</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );

    it("renders the icon and hides it from the accessible name", () => {
      render(<WithExtras />);
      const star = screen.getByTestId("star");
      expect(star).toBeInTheDocument();
      expect(star).toHaveAttribute("aria-hidden", "true");
    });

    it("sizes the icon from the Tabs scale", () => {
      const { rerender } = render(<WithExtras scale="lg" />);
      expect(screen.getByTestId("star").getAttribute("class")).toContain("size-5");

      rerender(<WithExtras scale="xs" />);
      expect(screen.getByTestId("star").getAttribute("class")).toContain("size-3");
    });

    it("renders the count, including zero", () => {
      render(<WithExtras />);
      expect(screen.getByText("12")).toBeInTheDocument();
      // 0 is information, not absence — it must still show.
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("omits the pill entirely when count is not given", () => {
      render(<WithExtras />);
      const plain = screen.getByRole("tab", { name: /その他/ });
      expect(plain.querySelector("span")).toBeNull();
    });

    it("keeps the count out of the tab's accessible name being just the label", () => {
      render(<WithExtras />);
      // The count is part of the tab's text, which is intended — a screen
      // reader should hear "在籍 12".
      expect(screen.getByRole("tab", { name: "在籍 12" })).toBeInTheDocument();
    });

    it("only switches to a row layout when there is something to lay out", () => {
      render(<WithExtras />);
      expect(screen.getByRole("tab", { name: "在籍 12" }).className).toContain("inline-flex");
      expect(screen.getByRole("tab", { name: "その他" }).className).not.toContain("inline-flex");
    });

    it("keeps aria-controls off triggers that have no panel", () => {
      // Tabs used for navigation: triggers only, the page paints the body.
      // Advertising aria-controls here would point at an id that was never
      // rendered, which axe reports as an invalid ARIA reference.
      render(<WithExtras />);
      for (const tab of screen.getAllByRole("tab")) {
        expect(tab).not.toHaveAttribute("aria-controls");
      }
    });

    it("gives the active tab's pill the theme colour and leaves others grey", () => {
      render(<WithExtras />);
      const activePill = screen.getByText("12");
      const inactivePill = screen.getByText("0");
      // Both carry CSS vars; only the values differ.
      expect(activePill.getAttribute("style")).toContain("--cs-ui-base");
      expect(inactivePill.getAttribute("style")).toContain("--cs-ui-base");
      expect(activePill.getAttribute("style")).not.toBe(
        inactivePill.getAttribute("style"),
      );
    });
  });
  describe("aria-controls hygiene", () => {
    it("points at the panel when Tabs.Content is rendered", async () => {
      render(
        <Tabs defaultValue="a">
          <Tabs.List>
            <Tabs.Trigger value="a">A</Tabs.Trigger>
            <Tabs.Trigger value="b">B</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">Panel A</Tabs.Content>
          <Tabs.Content value="b">Panel B</Tabs.Content>
        </Tabs>,
      );
      const active = await screen.findByRole("tab", { name: "A" });
      const controls = active.getAttribute("aria-controls");
      expect(controls).toBeTruthy();
      expect(document.getElementById(controls!)).toBeInTheDocument();
    });

    it("leaves the inactive tab without a dangling reference", async () => {
      render(
        <Tabs defaultValue="a">
          <Tabs.List>
            <Tabs.Trigger value="a">A</Tabs.Trigger>
            <Tabs.Trigger value="b">B</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">Panel A</Tabs.Content>
          <Tabs.Content value="b">Panel B</Tabs.Content>
        </Tabs>,
      );
      await screen.findByRole("tabpanel");
      // Only the active panel is in the DOM, so only the active tab may claim
      // to control one.
      expect(screen.getByRole("tab", { name: "B" })).not.toHaveAttribute("aria-controls");
    });
  });
});
