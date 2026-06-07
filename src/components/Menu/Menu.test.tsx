import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Menu } from "./Menu";

function Basic(props: {
  onEdit?: () => void;
  onArchive?: () => void;
  closeOnSelect?: boolean;
}) {
  return (
    <Menu closeOnSelect={props.closeOnSelect}>
      <Menu.Trigger>Actions</Menu.Trigger>
      <Menu.Content aria-label="Item actions">
        <Menu.Label>Manage</Menu.Label>
        <Menu.Item onSelect={props.onEdit}>Edit</Menu.Item>
        <Menu.Separator />
        <Menu.Item onSelect={props.onArchive} disabled>
          Archive
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}

describe("Menu", () => {
  it("trigger advertises a menu popup and toggles the menu", () => {
    render(<Basic />);
    const trigger = screen.getByRole("button", { name: "Actions" });
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getAllByRole("menuitem")).toHaveLength(2);
  });

  it("selecting an item fires onSelect and closes the menu", () => {
    const onEdit = vi.fn();
    render(<Basic onEdit={onEdit} />);
    fireEvent.click(screen.getByRole("button", { name: "Actions" }));

    fireEvent.click(screen.getByRole("menuitem", { name: "Edit" }));
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("keeps the menu open when closeOnSelect is false", () => {
    const onEdit = vi.fn();
    render(<Basic onEdit={onEdit} closeOnSelect={false} />);
    fireEvent.click(screen.getByRole("button", { name: "Actions" }));

    fireEvent.click(screen.getByRole("menuitem", { name: "Edit" }));
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("does not fire onSelect for a disabled item", () => {
    const onArchive = vi.fn();
    render(<Basic onArchive={onArchive} />);
    fireEvent.click(screen.getByRole("button", { name: "Actions" }));

    const archive = screen.getByRole("menuitem", { name: "Archive" });
    expect(archive).toBeDisabled();
    fireEvent.click(archive);
    expect(onArchive).not.toHaveBeenCalled();
  });

  it("moves focus between items with arrow keys", () => {
    render(
      <Menu defaultOpen>
        <Menu.Trigger>Actions</Menu.Trigger>
        <Menu.Content aria-label="Item actions">
          <Menu.Item>Receive</Menu.Item>
          <Menu.Item>Sell</Menu.Item>
          <Menu.Item>Adjust</Menu.Item>
        </Menu.Content>
      </Menu>,
    );
    const menu = screen.getByRole("menu");
    const items = screen.getAllByRole("menuitem");

    fireEvent.keyDown(menu, { key: "ArrowDown" });
    expect(items[1]).toHaveFocus();

    fireEvent.keyDown(menu, { key: "ArrowUp" });
    expect(items[0]).toHaveFocus();

    fireEvent.keyDown(menu, { key: "End" });
    expect(items[2]).toHaveFocus();

    fireEvent.keyDown(menu, { key: "Home" });
    expect(items[0]).toHaveFocus();
  });

  it("opens a submenu and selecting a nested item closes the whole menu", () => {
    const onMove = vi.fn();
    render(
      <Menu defaultOpen>
        <Menu.Trigger>Actions</Menu.Trigger>
        <Menu.Content aria-label="Item actions">
          <Menu.Sub label="Move to">
            <Menu.Item onSelect={onMove}>Warehouse A</Menu.Item>
          </Menu.Sub>
        </Menu.Content>
      </Menu>,
    );

    const subTrigger = screen.getByRole("menuitem", { name: "Move to" });
    expect(subTrigger).toHaveAttribute("aria-haspopup", "menu");

    fireEvent.click(subTrigger);
    const nested = screen.getByRole("menuitem", { name: "Warehouse A" });
    fireEvent.click(nested);

    expect(onMove).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
