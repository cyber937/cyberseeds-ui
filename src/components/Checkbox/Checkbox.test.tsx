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
});