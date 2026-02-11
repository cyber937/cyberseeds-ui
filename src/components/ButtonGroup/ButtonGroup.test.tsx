import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './ButtonGroup.stories';
import { ButtonGroup } from './ButtonGroup';
import { testScales, testColors, renderWithUIColorProvider } from '../../test-utils';

const { Default, Scales } = composeStories(stories);

describe('ButtonGroup Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story', () => {
      render(<Default />);
      expect(screen.getByText('全員')).toBeInTheDocument();
    });

    it('renders Scales story', () => {
      render(<Scales />);
      expect(screen.getAllByText('Option A').length).toBe(4);
    });
  });

  describe('Single Select', () => {
    it('renders all items', () => {
      render(
        <ButtonGroup defaultValue="a">
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getByText('A')).toBeInTheDocument();
      expect(screen.getByText('B')).toBeInTheDocument();
    });

    it('selected item has aria-checked="true"', () => {
      render(
        <ButtonGroup defaultValue="a">
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getByText('A')).toHaveAttribute('aria-checked', 'true');
      expect(screen.getByText('B')).toHaveAttribute('aria-checked', 'false');
    });

    it('clicking item changes selection', () => {
      const onChange = vi.fn();
      render(
        <ButtonGroup defaultValue="a" onChange={onChange}>
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
        </ButtonGroup>
      );
      fireEvent.click(screen.getByText('B'));
      expect(onChange).toHaveBeenCalledWith('b');
    });

    it('has role="radiogroup"', () => {
      render(
        <ButtonGroup defaultValue="a">
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('items have role="radio"', () => {
      render(
        <ButtonGroup defaultValue="a">
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('radio')).toHaveLength(2);
    });
  });

  describe('Multiple Select', () => {
    it('multiple items can be selected', () => {
      render(
        <ButtonGroup multiple defaultValue={["a", "b"]}>
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
          <ButtonGroup.Item value="c">C</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getByText('A')).toHaveAttribute('aria-checked', 'true');
      expect(screen.getByText('B')).toHaveAttribute('aria-checked', 'true');
      expect(screen.getByText('C')).toHaveAttribute('aria-checked', 'false');
    });

    it('clicking toggles selection in multiple mode', () => {
      const onChange = vi.fn();
      render(
        <ButtonGroup multiple defaultValue={["a"]} onChange={onChange}>
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
        </ButtonGroup>
      );
      fireEvent.click(screen.getByText('B'));
      expect(onChange).toHaveBeenCalledWith(expect.arrayContaining(['a', 'b']));
    });

    it('has role="group" for multiple', () => {
      render(
        <ButtonGroup multiple defaultValue={["a"]}>
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('items have role="checkbox" for multiple', () => {
      render(
        <ButtonGroup multiple defaultValue={["a"]}>
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    });
  });

  describe('Controlled Mode', () => {
    it('respects controlled value', () => {
      render(
        <ButtonGroup value="b">
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getByText('B')).toHaveAttribute('aria-checked', 'true');
      expect(screen.getByText('A')).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('Disabled', () => {
    it('disabled item cannot be clicked', () => {
      const onChange = vi.fn();
      render(
        <ButtonGroup defaultValue="a" onChange={onChange}>
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b" disabled>B</ButtonGroup.Item>
        </ButtonGroup>
      );
      fireEvent.click(screen.getByText('B'));
      expect(onChange).not.toHaveBeenCalled();
    });

    it('disabled item has opacity class', () => {
      render(
        <ButtonGroup defaultValue="a">
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b" disabled>B</ButtonGroup.Item>
        </ButtonGroup>
      );
      expect(screen.getByText('B').className).toContain('cs:opacity-50');
    });
  });

  describe('Colors', () => {
    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <ButtonGroup defaultValue="a" color={color}>
            <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          </ButtonGroup>,
        );
        expect(screen.getByText('A')).toBeInTheDocument();
        unmount();
      });
    });

    it('selected item has CSS variables', () => {
      render(
        <ButtonGroup defaultValue="a" color="red">
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
        </ButtonGroup>
      );
      const btn = screen.getByText('A');
      expect(btn.style.getPropertyValue('--cs-ui-base')).toBeTruthy();
    });
  });

  describe('Scale', () => {
    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <ButtonGroup defaultValue="a" scale={scale}>
            <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          </ButtonGroup>,
        );
        expect(screen.getByText('A')).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Keyboard Navigation (Single Select)', () => {
    it('ArrowRight moves to next item', () => {
      const onChange = vi.fn();
      render(
        <ButtonGroup defaultValue="a" onChange={onChange}>
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
          <ButtonGroup.Item value="c">C</ButtonGroup.Item>
        </ButtonGroup>
      );
      const btnA = screen.getByText('A');
      btnA.focus();
      fireEvent.keyDown(btnA, { key: 'ArrowRight' });
      expect(onChange).toHaveBeenCalledWith('b');
    });

    it('ArrowLeft wraps around', () => {
      const onChange = vi.fn();
      render(
        <ButtonGroup defaultValue="a" onChange={onChange}>
          <ButtonGroup.Item value="a">A</ButtonGroup.Item>
          <ButtonGroup.Item value="b">B</ButtonGroup.Item>
        </ButtonGroup>
      );
      const btnA = screen.getByText('A');
      btnA.focus();
      fireEvent.keyDown(btnA, { key: 'ArrowLeft' });
      expect(onChange).toHaveBeenCalledWith('b');
    });
  });

  describe('Context Error', () => {
    it('throws when Item is used outside ButtonGroup', () => {
      expect(() => {
        render(<ButtonGroup.Item value="a">A</ButtonGroup.Item>);
      }).toThrow('ButtonGroup.Item must be used within a ButtonGroup component');
    });
  });
});
