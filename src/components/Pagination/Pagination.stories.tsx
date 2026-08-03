import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: { layout: "padded" },
  argTypes: {
    scale: { control: "select", options: ["xs", "sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: { offset: 0, limit: 50, total: 39553 },
  // props が offset 方式 / page 方式の判別ユニオンになったため、args をそのまま
  // spread すると両方の任意プロパティが混ざって型が合わない。必要な分だけ渡す。
  render: (args) => {
    const [offset, setOffset] = useState(args.offset ?? 0);
    return (
      <Pagination
        offset={offset}
        limit={args.limit ?? 50}
        total={args.total ?? 0}
        scale={args.scale}
        showSummary={args.showSummary}
        onChange={(next) => setOffset(next)}
      />
    );
  },
};

export const FirstPage: Story = {
  args: { offset: 0, limit: 25, total: 200, onChange: () => {} },
};

export const MiddlePage: Story = {
  args: { offset: 100, limit: 25, total: 200, onChange: () => {} },
};

export const LastPage: Story = {
  args: { offset: 175, limit: 25, total: 200, onChange: () => {} },
};

export const SingleRow: Story = {
  args: { offset: 0, limit: 50, total: 1, onChange: () => {} },
};

export const Empty: Story = {
  args: { offset: 0, limit: 50, total: 0, onChange: () => {} },
};

export const HiddenSummary: Story = {
  args: {
    offset: 50,
    limit: 50,
    total: 200,
    showSummary: false,
    onChange: () => {},
  },
};

/**
 * ページ番号方式。ページ数が意味を持ち、末尾まで飛べることが役に立つ一覧向け。
 * 幅を 768px 未満にすると全幅の分割バーになる（各操作がタッチしやすい大きさになる）。
 */
export const PageMode: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={12} onPageChange={setPage} />;
  },
};

/** 最初 / 最後へのジャンプを省いた形。 */
export const PageModeWithoutJumps: Story = {
  render: () => {
    const [page, setPage] = useState(2);
    return (
      <Pagination page={page} totalPages={4} onPageChange={setPage} showFirstLast={false} />
    );
  },
};

/** 読み上げ名と件数表示は差し替えられる（既定は英語）。 */
export const PageModeLocalised: Story = {
  render: () => {
    const [page, setPage] = useState(3);
    return (
      <Pagination
        page={page}
        totalPages={9}
        onPageChange={setPage}
        firstLabel="最初のページ"
        previousLabel="前のページ"
        nextLabel="次のページ"
        lastLabel="最後のページ"
        renderSummary={({ page, totalPages }) => `${totalPages} ページ中 ${page} ページ目`}
      />
    );
  },
};
