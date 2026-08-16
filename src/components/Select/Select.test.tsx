import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Select.stories';
import { Select, SelectOption } from './Select';
import { testScales } from '../../test-utils';

const { Default, Scale } = composeStories(stories);

describe('labelPlacement', () => {
  it('既定では入力の上に置く', () => {
    const { container } = render(<Select label="年度"><SelectOption label="2026" value="2026" /></Select>);
    const wrapper = container.firstElementChild!;
    expect(wrapper.className).not.toContain('flex');
  });

  it('start にすると横に並べる', () => {
    const { container } = render(<Select label="年度" labelPlacement="start"><SelectOption label="2026" value="2026" /></Select>);
    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toContain('flex');
    expect(wrapper.className).toContain('items-center');
  });

  it('start でもラベルと入力が結びつく', () => {
    render(<Select label="年度" labelPlacement="start"><SelectOption label="2026" value="2026" /></Select>);
    expect(screen.getByLabelText('年度')).toBeTruthy();
  });
});

/**
 * 外枠は既定で inline-flex（中身の幅）。呼び出し側の className は内側の select に
 * しか届かないため、`className="w-full"` でも親を w-full にしても広がらない。
 * 縦に並ぶフォームで Input / TextArea と幅が揃わなくなるので fullWidth を用意した。
 */
describe('fullWidth', () => {
  it('既定は中身の幅（inline-flex）', () => {
    const { container } = render(
      <Select><SelectOption label="2026" value="2026" /></Select>,
    );
    expect(container.firstElementChild!.className).toContain('inline-flex');
  });

  it('既定は横並びの中で縮まない', () => {
    const { container } = render(
      <Select><SelectOption label="2026" value="2026" /></Select>,
    );
    expect(container.firstElementChild!.className).toContain('shrink-0');
  });

  it('fullWidth で親いっぱいに広がる', () => {
    const { container } = render(
      <Select fullWidth><SelectOption label="2026" value="2026" /></Select>,
    );
    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toContain('w-full');
    expect(wrapper.className).not.toContain('inline-flex');
  });

  it('fullWidth でも中身がはみ出さない（min-w-0）', () => {
    const { container } = render(
      <Select fullWidth><SelectOption label="2026" value="2026" /></Select>,
    );
    expect(container.firstElementChild!.className).toContain('min-w-0');
  });

  it('label と併せても広がる', () => {
    const { container } = render(
      <Select label="年度" fullWidth><SelectOption label="2026" value="2026" /></Select>,
    );
    // label があるときは <div><Label/><field/></div> の入れ子になる
    const field = container.querySelector('select')!.parentElement!;
    expect(field.className).toContain('w-full');
  });

  it('fullWidth でもラベルと入力の結びつきは保つ', () => {
    render(
      <Select label="年度" fullWidth><SelectOption label="2026" value="2026" /></Select>,
    );
    expect(screen.getByLabelText('年度').tagName).toBe('SELECT');
  });
});

describe('label', () => {
  it('ラベルを出し、htmlFor で select と結びつける', () => {
    render(
      <Select label="ステータス">
        <SelectOption label="下書き" value="draft" />
      </Select>
    );

    const select = screen.getByLabelText('ステータス');
    expect(select.tagName).toBe('SELECT');
  });

  it('label を渡さなければラベルを出さない', () => {
    render(
      <Select>
        <SelectOption label="下書き" value="draft" />
      </Select>
    );

    expect(screen.queryByRole('label')).toBeNull();
    expect(document.querySelector('label')).toBeNull();
  });

  it('require で必須の印を出す', () => {
    const { container } = render(
      <Select label="学年" require>
        <SelectOption label="1年" value="1" />
      </Select>
    );

    expect(container.textContent).toContain('学年');
    expect(container.querySelector('label')).not.toBeNull();
  });

  it('外から渡した id をラベルの htmlFor に使う', () => {
    render(
      <Select id="my-select" label="年度">
        <SelectOption label="2026" value="2026" />
      </Select>
    );

    expect(screen.getByLabelText('年度')).toHaveAttribute('id', 'my-select');
  });
});

describe('Select Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
    });

    it('renders Scale story correctly', () => {
      render(<Scale />);
      const selects = screen.getAllByRole('combobox');
      expect(selects).toHaveLength(4);
    });
  });

  describe('Component Functionality', () => {
    it('handles change events', () => {
      const handleChange = vi.fn();
      render(
        <Select onChange={handleChange}>
          <SelectOption value="option1" label="Option 1" />
          <SelectOption value="option2" label="Option 2" />
        </Select>
      );
      
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'option1' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <Select scale={scale}>
            <SelectOption value="test" label="Test" />
          </Select>
        );
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with custom options', () => {
      render(
        <Select>
          <SelectOption value="option1" label="Option 1" />
          <SelectOption value="option2" label="Option 2" />
          <SelectOption value="option3" label="Option 3" />
        </Select>
      );
      
      const select = screen.getByRole('combobox');
      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(3);
      expect(options[0]).toHaveTextContent('Option 1');
      expect(options[1]).toHaveTextContent('Option 2');
      expect(options[2]).toHaveTextContent('Option 3');
    });

    it('can be disabled', () => {
      render(
        <Select disabled>
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toBeDisabled();
    });

    it('shows dropdown icon with absolute positioning', () => {
      render(
        <Select>
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const icon = screen.getByRole('combobox').parentElement?.querySelector('svg');
      expect(icon).toBeInTheDocument();
      expect(icon?.getAttribute('class')).toContain('cs:absolute');
    });
  });

  describe('SelectOption Component', () => {
    it('renders with correct value and label', () => {
      render(
        <Select>
          <SelectOption value="test-value" label="Test Label" />
        </Select>
      );
      
      const option = screen.getByRole('option');
      expect(option).toHaveAttribute('value', 'test-value');
      expect(option).toHaveTextContent('Test Label');
    });

    it('supports additional props', () => {
      render(
        <Select>
          <SelectOption value="test" label="Test" disabled />
        </Select>
      );
      
      const option = screen.getByRole('option');
      expect(option).toBeDisabled();
    });
  });

  describe('Layout', () => {
    it('wrapper div is relative and inline-flex, and does not shrink below its content', () => {
      render(
        <Select>
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      const wrapperClass = select.parentElement?.className ?? '';
      expect(wrapperClass).toContain('cs:relative');
      expect(wrapperClass).toContain('cs:inline-flex');
      // 内側の select が min-w-0 を持つので、shrink-0 が無いと flex 行に直接
      // 置いたときに幅 0 まで潰れ、選択中の文字が矢印に食われて読めなくなる。
      // 幅を詰めたい場合は呼び出し側がラッパーに幅を指定する。
      expect(wrapperClass).not.toContain('cs:min-w-0');
      expect(wrapperClass).toContain('cs:shrink-0');
    });

    it('select element has min-w-0 for overflow prevention', () => {
      render(
        <Select>
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select.className).toContain('cs:min-w-0');
    });
  });

  describe('Accessibility', () => {
    it('has proper select attributes', () => {
      render(
        <Select>
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
    });

    it('supports custom id', () => {
      render(
        <Select id="custom-select">
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('id', 'custom-select');
    });

    it('supports aria-label', () => {
      render(
        <Select aria-label="Custom select">
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('aria-label', 'Custom select');
    });
  });

  describe('ref & className', () => {
    it('forwards a ref to the native select', () => {
      const ref = { current: null as HTMLSelectElement | null };
      render(
        <Select ref={ref} aria-label="s">
          <SelectOption value="a" label="A" />
        </Select>
      );
      expect(ref.current).toBe(screen.getByRole('combobox'));
    });

    it('merges a custom className without dropping base styles', () => {
      render(
        <Select className="custom-x" aria-label="s">
          <SelectOption value="a" label="A" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass('custom-x');
      expect(select.className).toContain('cs:appearance-none');
    });

    it('applies the color prop as CSS variables', () => {
      render(
        <Select color="violet" aria-label="s">
          <SelectOption value="a" label="A" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select.getAttribute('style')).toContain('--cs-ui-');
    });
  });
});