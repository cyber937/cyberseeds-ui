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

  describe("Accessibility", () => {
    it('labels the nav region', () => {
      render(<Pagination offset={0} limit={10} total={100} onChange={() => {}} />);
      expect(screen.getByRole("navigation", { name: /pagination/i })).toBeInTheDocument();
    });
  });
});
