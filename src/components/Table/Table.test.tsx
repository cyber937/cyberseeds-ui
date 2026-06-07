import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import { Table } from "./Table";
import * as stories from "./Table.stories";

const { Primary, Striped, Interactive } = composeStories(stories);

describe("Table Component", () => {
  describe("Storybook Stories", () => {
    it("renders Primary", () => {
      render(<Primary />);
      expect(screen.getByRole("table")).toBeInTheDocument();
      expect(screen.getAllByRole("row").length).toBeGreaterThan(1);
    });

    it("renders Striped (data-striped='true' on the table)", () => {
      render(<Striped />);
      expect(screen.getByRole("table")).toHaveAttribute("data-striped", "true");
    });

    it("renders Interactive rows with data-interactive marker", () => {
      render(<Interactive />);
      const interactiveRows = document.querySelectorAll(
        "tr[data-interactive='true']"
      );
      expect(interactiveRows.length).toBeGreaterThan(0);
    });
  });

  describe("Behaviour", () => {
    it("renders Head / Body / Row / HeaderCell / Cell semantics", () => {
      render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>A</Table.HeaderCell>
              <Table.HeaderCell>B</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>2</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      expect(screen.getAllByRole("columnheader")).toHaveLength(2);
      expect(screen.getAllByRole("cell")).toHaveLength(2);
    });

    it("invokes onClick on interactive rows", () => {
      const onClick = vi.fn();
      render(
        <Table>
          <Table.Body>
            <Table.Row interactive onClick={onClick}>
              <Table.Cell>Click me</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      fireEvent.click(screen.getByText("Click me"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("applies tabular-nums when numeric is set", () => {
      render(
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell numeric>123</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      expect(screen.getByText("123").className).toContain("tabular-nums");
    });

    it("respects the align prop on HeaderCell and Cell", () => {
      render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell align="right">Header</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell align="center">Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      expect(screen.getByText("Header").className).toContain("text-right");
      expect(screen.getByText("Cell").className).toContain("text-center");
    });

    it("scale propagates to nested cells via context", () => {
      render(
        <Table scale="xs">
          <Table.Body>
            <Table.Row>
              <Table.Cell>xs-padded</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      const cell = screen.getByText("xs-padded");
      expect(cell.className).toContain("px-2");
    });

    it("renders without bordered styling when bordered=false", () => {
      const { container } = render(
        <Table bordered={false}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>plain</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).not.toContain("rounded-lg");
      expect(wrapper.className).not.toContain("border ");
    });
  });

  describe("Accessibility", () => {
    it("has scope='col' on header cells", () => {
      render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>A</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
        </Table>
      );
      expect(screen.getByRole("columnheader")).toHaveAttribute("scope", "col");
    });
  });

  describe("Sorting & selection", () => {
    it("renders a sortable header with aria-sort and fires onSort", () => {
      const onSort = vi.fn();
      render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell sortable sortDirection="asc" onSort={onSort}>
                SKU
              </Table.HeaderCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );
      expect(screen.getByRole("columnheader")).toHaveAttribute(
        "aria-sort",
        "ascending",
      );
      fireEvent.click(screen.getByRole("button", { name: /SKU/ }));
      expect(onSort).toHaveBeenCalledTimes(1);
    });

    it("reports an unsorted sortable column as aria-sort=none", () => {
      render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell sortable onSort={() => {}}>
                SKU
              </Table.HeaderCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );
      expect(screen.getByRole("columnheader")).toHaveAttribute("aria-sort", "none");
    });

    it("marks a selected row with aria-selected", () => {
      render(
        <Table>
          <Table.Body>
            <Table.Row selected>
              <Table.Cell>X</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      expect(screen.getByRole("row")).toHaveAttribute("aria-selected", "true");
    });
  });
});
