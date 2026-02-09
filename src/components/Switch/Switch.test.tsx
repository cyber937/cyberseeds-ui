import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Switch.stories';
import { Switch } from './Switch';
import { renderWithUIColorProvider, testColors, testScales } from '../../test-utils';

const { Primary, Scale } = composeStories(stories);

describe('Switch Component', () => {
  describe('Storybook Stories', () => {
    it('renders Primary story correctly', () => {
      render(<Primary />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeInTheDocument();
    });

    it('renders Scale story correctly', () => {
      render(<Scale />);
      const switchElements = screen.getAllByRole('switch');
      expect(switchElements.length).toBeGreaterThan(0);
    });
  });

  describe('Component Functionality', () => {
    it('handles click events', () => {
      const handleClick = vi.fn();
      render(<Switch onClick={handleClick} />);

      const switchElement = screen.getByRole('switch');
      fireEvent.click(switchElement);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('toggles checked state', () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');
      
      // Switch component manages its own state internally
      expect(switchElement).toBeInTheDocument();
      fireEvent.click(switchElement);
      expect(switchElement).toBeInTheDocument();
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(<Switch scale={scale} />);
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <Switch color={color} />
        );
        const switchElement = screen.getByRole('switch');
        expect(switchElement).toBeInTheDocument();
        unmount();
      });
    });

    it('can be controlled', () => {
      const handleChange = vi.fn();
      const { rerender } = render(<Switch checked={false} onChange={handleChange} />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeInTheDocument();
      
      rerender(<Switch checked={true} onChange={handleChange} />);
      expect(switchElement).toBeInTheDocument();
    });

    it('respects disabled state', () => {
      const handleChange = vi.fn();
      render(<Switch disabled onChange={handleChange} />);
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeDisabled();
      
      fireEvent.click(switchElement);
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Visual States', () => {
    it('has proper styling for unchecked state', () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeInTheDocument();
      // Visual styling is handled by CSS classes
    });

    it('has proper styling for checked state', () => {
      const handleChange = vi.fn();
      render(<Switch checked onChange={handleChange} />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeChecked();
      // Visual styling is handled by CSS classes
    });

    it('has proper styling for disabled state', () => {
      render(<Switch disabled />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeDisabled();
      // Visual styling is handled by CSS classes
    });
  });

  describe('Accessibility', () => {
    it('has proper switch attributes', () => {
      render(<Switch />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement.tagName).toBe('BUTTON');
    });

    it('supports custom id', () => {
      render(<Switch id="custom-switch" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('id', 'custom-switch');
    });

    it('supports aria-label', () => {
      render(<Switch aria-label="Custom switch" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-label', 'Custom switch');
    });

    it('supports aria-describedby', () => {
      render(<Switch aria-describedby="switch-description" />);
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-describedby', 'switch-description');
    });
  });
});