import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Checkbox.stories';
import { Checkbox } from './Checkbox';
import { renderWithUIColorProvider, testColors, testScales } from '../../test-utils';

const { Default, Color } = composeStories(stories);

describe('Checkbox Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    });

    it('renders Color story correctly', () => {
      render(<Color />);
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes.length).toBeGreaterThan(0);
    });
  });

  describe('Component Functionality', () => {
    it('handles change events', () => {
      const handleChange = vi.fn();
      render(<Checkbox onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('invokes onCheckedChange with the new checked state', () => {
      const handleCheckedChange = vi.fn();
      render(<Checkbox onCheckedChange={handleCheckedChange} />);

      fireEvent.click(screen.getByRole('checkbox'));
      expect(handleCheckedChange).toHaveBeenCalledTimes(1);
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });

    it('calls both onCheckedChange and onChange', () => {
      const handleCheckedChange = vi.fn();
      const handleChange = vi.fn();
      render(
        <Checkbox
          onCheckedChange={handleCheckedChange}
          onChange={handleChange}
        />
      );

      fireEvent.click(screen.getByRole('checkbox'));
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('toggles checked state', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      
      expect(checkbox.checked).toBe(false);
      fireEvent.click(checkbox);
      expect(checkbox.checked).toBe(true);
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(<Checkbox scale={scale} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <Checkbox color={color} />
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        unmount();
      });
    });

    it('can be controlled', () => {
      const handleChange = vi.fn();
      const { rerender } = render(<Checkbox checked={false} onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      rerender(<Checkbox checked={true} onChange={handleChange} />);
      expect(checkbox).toBeChecked();
    });
  });

  describe('Accessibility', () => {
    it('has proper checkbox attributes', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('type', 'checkbox');
    });

    it('supports custom id', () => {
      render(<Checkbox id="custom-checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('id', 'custom-checkbox');
    });

    it('supports aria-label', () => {
      render(<Checkbox aria-label="Custom checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-label', 'Custom checkbox');
    });
  });

  describe('API consistency', () => {
    it('forwards ref to the inner input', () => {
      const ref = createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current?.tagName).toBe('INPUT');
      expect(ref.current?.type).toBe('checkbox');
    });

    it('applies className to the outer wrapper', () => {
      const { container } = render(<Checkbox className="my-checkbox" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain('my-checkbox');
    });

    it('does not leak className onto the inner input', () => {
      render(<Checkbox className="my-checkbox" />);
      const input = screen.getByRole('checkbox');
      expect(input.className).not.toContain('my-checkbox');
    });
  });
});