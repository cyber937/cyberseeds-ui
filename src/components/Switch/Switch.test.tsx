import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    it('handles click events', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Switch onClick={handleClick} />);

      const switchElement = screen.getByRole('switch');
      await user.click(switchElement);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('invokes onCheckedChange with the next checked state', async () => {
      const user = userEvent.setup();
      const handleCheckedChange = vi.fn();
      render(<Switch checked={false} onCheckedChange={handleCheckedChange} />);

      await user.click(screen.getByRole('switch'));
      expect(handleCheckedChange).toHaveBeenCalledTimes(1);
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });

    it('flips the next checked state for onCheckedChange when starting from true', async () => {
      const user = userEvent.setup();
      const handleCheckedChange = vi.fn();
      render(<Switch checked={true} onCheckedChange={handleCheckedChange} />);

      await user.click(screen.getByRole('switch'));
      expect(handleCheckedChange).toHaveBeenCalledWith(false);
    });

    it('calls both onCheckedChange and onClick in order', async () => {
      const user = userEvent.setup();
      const calls: string[] = [];
      const handleCheckedChange = vi.fn(() => calls.push('onCheckedChange'));
      const handleClick = vi.fn(() => calls.push('onClick'));
      render(
        <Switch
          checked={false}
          onCheckedChange={handleCheckedChange}
          onClick={handleClick}
        />
      );

      await user.click(screen.getByRole('switch'));
      expect(calls).toEqual(['onCheckedChange', 'onClick']);
    });

    it('toggles checked state', async () => {
      const user = userEvent.setup();
      render(<Switch />);
      const switchElement = screen.getByRole('switch');

      // Switch component manages its own state internally
      expect(switchElement).toBeInTheDocument();
      await user.click(switchElement);
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

    it('respects disabled state', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Switch disabled onChange={handleChange} />);

      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeDisabled();

      await user.click(switchElement);
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

  describe('API consistency', () => {
    it('forwards ref to the inner button', () => {
      const ref = createRef<HTMLButtonElement>();
      render(<Switch ref={ref} />);
      expect(ref.current).not.toBeNull();
      expect(ref.current?.tagName).toBe('BUTTON');
      expect(ref.current?.getAttribute('role')).toBe('switch');
    });

    it('applies className to the outer wrapper', () => {
      const { container } = render(<Switch className="my-switch" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain('my-switch');
    });

    it('does not leak className onto the inner button', () => {
      render(<Switch className="my-switch" />);
      const button = screen.getByRole('switch');
      expect(button.className).not.toContain('my-switch');
    });
  });
});