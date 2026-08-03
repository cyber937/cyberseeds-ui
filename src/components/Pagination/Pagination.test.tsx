import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import { Pagination } from "./Pagination";
import * as stories from "./Pagination.stories";

const { FirstPage, MiddlePage, LastPage, Empty, HiddenSummary } =
  composeStories(stories);

describe("Pagination Component", () => {
  describe("Storybook Stories", () => {
    it("renders FirstPage with Previous disabled", () => {
      render(<FirstPage />);
      expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();
      expect(screen.getByRole("button", { name: /next/i })).not.toBeDisabled();
    });

    it("renders MiddlePage with both buttons enabled", () => {
      render(<MiddlePage />);
      expect(screen.getByRole("button", { name: /previous/i })).not.toBeDisabled();
      expect(screen.getByRole("button", { name: /next/i })).not.toBeDisabled();
    });

    it("renders LastPage with Next disabled", () => {
      render(<LastPage />);
      expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
    });

    it("renders Empty story with both buttons disabled and 0 of 0", () => {
      render(<Empty />);
      const buttons = screen.getAllByRole("button");
      buttons.forEach((b) => expect(b).toBeDisabled());
      // start/end/total are each rendered in their own span; the only number
      // we ever show for an empty page is 0, repeated three times.
      expect(screen.getAllByText("0").length).toBeGreaterThanOrEqual(3);
    });

    it("renders HiddenSummary without the count label", () => {
      render(<HiddenSummary />);
      expect(screen.queryByText(/showing/i)).toBeNull();
    });
  });

  describe("Behaviour", () => {
    it("invokes onChange with the next offset when Next is clicked", () => {
      const onChange = vi.fn();
      render(
        <Pagination offset={50} limit={50} total={200} onChange={onChange} />
      );
      fireEvent.click(screen.getByRole("button", { name: /next/i }));
      expect(onChange).toHaveBeenCalledWith(100);
    });

    it("invokes onChange with the previous offset when Previous is clicked", () => {
      const onChange = vi.fn();
      render(
        <Pagination offset={50} limit={50} total={200} onChange={onChange} />
      );
      fireEvent.click(screen.getByRole("button", { name: /previous/i }));
      expect(onChange).toHaveBeenCalledWith(0);
    });

    it("clamps Previous to zero when very close to the start", () => {
      const onChange = vi.fn();
      render(
        <Pagination offset={10} limit={50} total={200} onChange={onChange} />
      );
      fireEvent.click(screen.getByRole("button", { name: /previous/i }));
      expect(onChange).toHaveBeenCalledWith(0);
    });

    it('writes the "Showing X-Y of Z" summary', () => {
      render(
        <Pagination offset={50} limit={25} total={200} onChange={() => {}} />
      );
      expect(screen.getByText(/showing/i)).toBeInTheDocument();
      expect(screen.getByText("51")).toBeInTheDocument();
      expect(screen.getByText("75")).toBeInTheDocument();
      expect(screen.getByText("200")).toBeInTheDocument();
    });

    it('caps the end of the visible range at total', () => {
      render(
        <Pagination offset={180} limit={25} total={200} onChange={() => {}} />
      );
      // Both `end` and `total` should read 200 at the last page.
      expect(screen.getAllByText("200").length).toBe(2);
    });

    it("renders custom labels", () => {
      render(
        <Pagination
          offset={0}
          limit={10}
          total={100}
          onChange={() => {}}
          previousLabel="戻る"
          nextLabel="次へ"
        />
      );
      expect(screen.getByRole("button", { name: "戻る" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "次へ" })).toBeInTheDocument();
    });
  });

  describe("Page mode", () => {
    it("shows the current page out of the total", () => {
      render(<Pagination page={3} totalPages={12} onPageChange={() => {}} />);
      expect(screen.getByText("3 / 12")).toBeInTheDocument();
    });

    it("disables the backward controls on the first page", () => {
      render(<Pagination page={1} totalPages={4} onPageChange={() => {}} />);
      expect(screen.getByRole("button", { name: /first page/i })).toBeDisabled();
      expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();
      expect(screen.getByRole("button", { name: /next/i })).toBeEnabled();
      expect(screen.getByRole("button", { name: /last page/i })).toBeEnabled();
    });

    it("disables the forward controls on the last page", () => {
      render(<Pagination page={4} totalPages={4} onPageChange={() => {}} />);
      expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
      expect(screen.getByRole("button", { name: /last page/i })).toBeDisabled();
      expect(screen.getByRole("button", { name: /previous/i })).toBeEnabled();
    });

    it("steps one page at a time", () => {
      const onPageChange = vi.fn();
      render(<Pagination page={2} totalPages={4} onPageChange={onPageChange} />);
      fireEvent.click(screen.getByRole("button", { name: /next/i }));
      expect(onPageChange).toHaveBeenCalledWith(3);
      fireEvent.click(screen.getByRole("button", { name: /previous/i }));
      expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it("jumps to the first and last page", () => {
      const onPageChange = vi.fn();
      render(<Pagination page={2} totalPages={9} onPageChange={onPageChange} />);
      fireEvent.click(screen.getByRole("button", { name: /last page/i }));
      expect(onPageChange).toHaveBeenCalledWith(9);
      fireEvent.click(screen.getByRole("button", { name: /first page/i }));
      expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it("never steps past the ends", () => {
      const onPageChange = vi.fn();
      const { rerender } = render(
        <Pagination page={1} totalPages={1} onPageChange={onPageChange} showFirstLast={false} />
      );
      expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();
      expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
      rerender(<Pagination page={4} totalPages={4} onPageChange={onPageChange} />);
      expect(onPageChange).not.toHaveBeenCalled();
    });

    it("can hide the first / last controls", () => {
      render(<Pagination page={2} totalPages={4} onPageChange={() => {}} showFirstLast={false} />);
      expect(screen.queryByRole("button", { name: /first page/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /last page/i })).not.toBeInTheDocument();
      expect(screen.getByRole("button", { name: /previous/i })).toBeInTheDocument();
    });

    it("can hide the summary", () => {
      render(
        <Pagination page={2} totalPages={4} onPageChange={() => {}} showSummary={false} />
      );
      expect(screen.queryByText("2 / 4")).not.toBeInTheDocument();
    });

    it("takes localised control labels", () => {
      render(
        <Pagination
          page={2}
          totalPages={4}
          onPageChange={() => {}}
          firstLabel="最初のページ"
          previousLabel="前のページ"
          nextLabel="次のページ"
          lastLabel="最後のページ"
        />
      );
      expect(screen.getByRole("button", { name: "最初のページ" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "最後のページ" })).toBeInTheDocument();
    });

    it("takes a custom summary", () => {
      render(
        <Pagination
          page={2}
          totalPages={4}
          onPageChange={() => {}}
          renderSummary={({ page, totalPages }) => `${totalPages} ページ中 ${page} ページ目`}
        />
      );
      expect(screen.getByText("4 ページ中 2 ページ目")).toBeInTheDocument();
    });
  });

  describe("Offset mode", () => {
    it("takes a custom summary so the English default can be replaced", () => {
      render(
        <Pagination
          offset={30}
          limit={30}
          total={147}
          onChange={() => {}}
          renderSummary={({ start, end, total }) => `${total} 件中 ${start}–${end} 件`}
        />
      );
      expect(screen.getByText("147 件中 31–60 件")).toBeInTheDocument();
      expect(screen.queryByText(/Showing/)).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it('labels the nav region', () => {
      render(<Pagination offset={0} limit={10} total={100} onChange={() => {}} />);
      expect(screen.getByRole("navigation", { name: /pagination/i })).toBeInTheDocument();
    });

    it('labels the nav region in page mode too', () => {
      render(<Pagination page={1} totalPages={3} onPageChange={() => {}} />);
      expect(screen.getByRole("navigation", { name: /pagination/i })).toBeInTheDocument();
    });
  });
});
