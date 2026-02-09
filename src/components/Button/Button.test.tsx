import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
    it('handles click events', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
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
});