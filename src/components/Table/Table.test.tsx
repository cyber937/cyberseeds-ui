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

    it("stickyHeader makes the wrapper scrollable and the head sticky", () => {
      const { container } = render(
        <Table stickyHeader>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>H</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain("overflow-auto");
      const thead = container.querySelector("thead");
      expect(thead?.className).toContain("sticky");
    });

    it("does not stick the head by default", () => {
      const { container } = render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>H</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      const thead = container.querySelector("thead");
      expect(thead?.className).not.toContain("sticky");
    });

    it("forwards ref to the scroll wrapper element", () => {
      const ref = { current: null as HTMLDivElement | null };
      render(
        <Table ref={ref}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>x</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.querySelector("table")).not.toBeNull();
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

    it("highlights the sorted column and leaves unsorted ones muted", () => {
      const { rerender } = render(
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
      const unsorted = screen.getByRole("button", { name: /SKU/ });
      expect(unsorted.className).not.toContain("cs-sort-active");
      expect(unsorted.querySelector("svg")).toHaveClass("cs:opacity-50");

      rerender(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell sortable sortDirection="asc" onSort={() => {}}>
                SKU
              </Table.HeaderCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );
      const sorted = screen.getByRole("button", { name: /SKU/ });
      expect(sorted.className).toContain("cs-sort-active");
      expect(sorted.querySelector("svg")).not.toHaveClass("cs:opacity-50");
    });

    it("draws a different arrow for each sort direction", () => {
      const arrowFor = (direction: "asc" | "desc") => {
        const { unmount } = render(
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell sortable sortDirection={direction} onSort={() => {}}>
                  SKU
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>
          </Table>,
        );
        const d = screen
          .getByRole("button", { name: /SKU/ })
          .querySelector("path")!
          .getAttribute("d");
        unmount();
        return d;
      };
      expect(arrowFor("asc")).not.toEqual(arrowFor("desc"));
    });

    it("keeps the sort arrows out of the accessible name", () => {
      render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell sortable sortDirection="desc" onSort={() => {}}>
                SKU
              </Table.HeaderCell>
            </Table.Row>
          </Table.Head>
        </Table>,
      );
      const button = screen.getByRole("button", { name: "SKU" });
      expect(button.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
    });

    it("gives the sort toggle a focus ring", () => {
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
      expect(screen.getByRole("button", { name: /SKU/ }).className).toContain(
        "cs-focus-visible",
      );
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

  describe("Column sizing", () => {
    it("applies width and maxWidth as inline lengths, numbers as px", () => {
      render(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell width={160}>H</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell width="30%" maxWidth={200}>
                c
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      // Assert on the inline style: test-setup mocks getComputedStyle, so
      // toHaveStyle would read back nothing.
      expect((screen.getByRole("columnheader") as HTMLElement).style.width).toBe("160px");
      const cell = screen.getByRole("cell") as HTMLElement;
      expect(cell.style.width).toBe("30%");
      expect(cell.style.maxWidth).toBe("200px");
    });

    it("keeps width off the DOM as a deprecated HTML attribute", () => {
      render(
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={120}>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      expect(screen.getByRole("cell")).not.toHaveAttribute("width");
    });

    it("preserves a caller-supplied style alongside width", () => {
      render(
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={80} style={{ color: "rgb(1, 2, 3)" }}>
                c
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      const cell = screen.getByRole("cell") as HTMLElement;
      expect(cell.style.width).toBe("80px");
      expect(cell.style.color).toBe("rgb(1, 2, 3)");
    });

    it("applies nowrap, truncate and mono as classes", () => {
      render(
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell nowrap truncate mono>
                c
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      const cell = screen.getByRole("cell");
      expect(cell.className).toContain("whitespace-nowrap");
      expect(cell.className).toContain("truncate");
      expect(cell.className).toContain("font-mono");
    });

    it("sets the table layout algorithm", () => {
      const { container, rerender } = render(
        <Table layout="fixed">
          <Table.Body>
            <Table.Row>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      expect(container.querySelector("table")?.className).toContain("table-fixed");

      rerender(
        <Table layout="auto">
          <Table.Body>
            <Table.Row>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      expect(container.querySelector("table")?.className).toContain("table-auto");
    });
  });

  describe("Row dividers", () => {
    it("clears the rule above the row and its cells when noDivider is set", () => {
      render(
        <Table>
          <Table.Body>
            <Table.Row noDivider>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      const row = screen.getByRole("row");
      expect(row.className).toContain("border-t-0");
      expect(row.className).toContain("[&>td]:border-t-0");
    });

    it("keeps the rule by default", () => {
      render(
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      expect(screen.getByRole("row").className).not.toContain("border-t-0");
    });
  });

  describe("autoHeight", () => {
    const renderAutoHeight = (autoHeight: boolean | { bottomGap?: number; minHeight?: number }) =>
      render(
        <Table autoHeight={autoHeight}>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>H</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );

    it("caps the wrapper at the room left below its top edge", () => {
      // jsdom reports 0 for getBoundingClientRect and 768 for innerHeight.
      const { container } = renderAutoHeight(true);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.style.maxHeight).toBe(`${window.innerHeight}px`);
    });

    it("subtracts bottomGap", () => {
      const { container } = renderAutoHeight({ bottomGap: 24 });
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.style.maxHeight).toBe(`${window.innerHeight - 24}px`);
    });

    it("never shrinks below minHeight", () => {
      const { container } = renderAutoHeight({ bottomGap: 10_000, minHeight: 200 });
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.style.maxHeight).toBe("200px");
    });

    it("implies a sticky header without requiring a bounded ancestor", () => {
      const { container } = renderAutoHeight(true);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain("overflow-auto");
      // h-full would stretch the wrapper back to an unbounded parent, undoing
      // the measurement.
      expect(wrapper.className).not.toContain("h-full");
      expect(container.querySelector("thead")?.className).toContain("sticky");
    });

    it("leaves the wrapper unbounded when off", () => {
      const { container } = renderAutoHeight(false);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.style.maxHeight).toBe("");
    });

    it("still fills the parent when stickyHeader is used on its own", () => {
      const { container } = render(
        <Table stickyHeader>
          <Table.Body>
            <Table.Row>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain("h-full");
      expect(wrapper.style.maxHeight).toBe("");
    });

    it("forwards the ref while measuring the same node", () => {
      const ref = { current: null as HTMLDivElement | null };
      render(
        <Table autoHeight ref={ref}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>x</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.style.maxHeight).toBe(`${window.innerHeight}px`);
    });
  });
});

/**
 * 見出しの濃さ。以前は gray-50 の帯に gray-500 の文字（4.63:1）で、WCAG AA は
 * ぎりぎり通るものの「薄すぎて読みにくい」と実際に指摘があった。
 * 帯・文字とも 1 段濃くして 9.36:1 にしている。薄い方へ戻したら気づけるようにする。
 */
describe("見出しの濃さ", () => {
  it("帯は本文より濃い gray-100", () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>氏名</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const head = container.querySelector("thead")!;
    expect(head.className).toContain("cs:bg-gray-100");
    expect(head.className).not.toContain("cs:bg-gray-50");
  });

  it("文字は gray-700", () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>氏名</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const head = container.querySelector("thead")!;
    expect(head.className).toContain("cs:text-gray-700");
    expect(head.className).not.toContain("cs:text-gray-500");
  });

  it("呼び出し側の className で上書きできる", () => {
    const { container } = render(
      <Table>
        <Table.Head className="cs:bg-white">
          <Table.Row>
            <Table.HeaderCell>氏名</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    expect(container.querySelector("thead")!.className).toContain("cs:bg-white");
  });
});
