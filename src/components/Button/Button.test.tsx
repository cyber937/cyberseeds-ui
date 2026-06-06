import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';
import { Button } from './Button';
import { renderWithUIColorProvider, testColors, testScales } from '../../test-utils';

const { Default, Color, Scale } = composeStories(stories);

describe('Button Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('renders Color story correctly', () => {
      render(<Color />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('renders Scale story correctly', () => {
      render(<Scale />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('Component Functionality', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole('button');
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire click when disabled (userEvent respects pointer-events)', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button disabled onClick={handleClick}>Disabled</Button>);
      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('handles keyboard activation (Enter and Space) like a real button', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Activate</Button>);
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      await user.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(2);
    });

    it('can be disabled', () => {
      render(<Button disabled>Disabled Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(<Button scale={scale}>Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <Button color={color}>Button</Button>
        );
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with different variants', () => {
      const variants = ['primary', 'secondary'] as const;
      variants.forEach(variant => {
        const { unmount } = render(<Button variant={variant}>Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Button.Icon Compound Component', () => {
    it('renders icon with correct sizing', () => {
      render(
        <Button scale="sm">
          <Button.Icon>
            <svg data-testid="test-icon" />
          </Button.Icon>
          Button
        </Button>
      );
      
      const icon = screen.getByTestId('test-icon');
      expect(icon).toHaveClass('cs:size-4');
    });

    it('throws error when used outside Button', () => {
      expect(() => {
        render(<Button.Icon><svg /></Button.Icon>);
      }).toThrow('Button.Icon must be used within a <Button>');
    });
  });

  describe('Accessibility', () => {
    it('has proper button attributes', () => {
      render(<Button>Accessible Button</Button>);
      const button = screen.getByRole('button');
      expect(button.tagName).toBe('BUTTON');
    });

    it('supports custom type attribute', () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });

  describe('asChild (Slot polymorphism)', () => {
    it('renders the child element instead of a <button> when asChild is true', () => {
      render(
        <Button asChild>
          <a href="/items">Items</a>
        </Button>
      );
      // No <button>, just the <a>.
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      const link = screen.getByRole('link', { name: 'Items' });
      expect(link.tagName).toBe('A');
      expect(link).toHaveAttribute('href', '/items');
    });

    it('merges Button styling classes onto the child', () => {
      render(
        <Button asChild scale="lg">
          <a href="/x" data-testid="link">Go</a>
        </Button>
      );
      const link = screen.getByTestId('link');
      // The lg scale class should land on the <a>.
      expect(link.className).toContain('cs:px-4');
      // And core button affordances.
      expect(link.className).toContain('cs:rounded-md');
      expect(link.className).toContain('cs:font-semibold');
    });

    it('composes onClick from both Button and child', async () => {
      const user = userEvent.setup();
      const buttonClick = vi.fn();
      const childClick = vi.fn((e: React.MouseEvent) => e.preventDefault());
      render(
        <Button asChild onClick={buttonClick}>
          <a href="/x" onClick={childClick}>Go</a>
        </Button>
      );
      await user.click(screen.getByRole('link', { name: 'Go' }));
      expect(buttonClick).toHaveBeenCalledTimes(1);
      expect(childClick).toHaveBeenCalledTimes(1);
    });

    it('keeps the default <button> render when asChild is false (default)', () => {
      render(<Button>Stay a button</Button>);
      expect(screen.getByRole('button', { name: 'Stay a button' })).toBeInTheDocument();
    });
  });
});