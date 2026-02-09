import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Input.stories';
import { Input } from './Input';
import { renderWithUIColorProvider, testColors, testScales } from '../../test-utils';

const { Default, Require, Invalid, Disabled } = composeStories(stories);

describe('Input Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', 'メールアドレス');
    });

    it('renders Require story with required label', () => {
      render(<Require />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('renders Invalid story with error styling', () => {
      render(<Invalid />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveClass('cs:text-red-400');
    });

    it('renders Disabled story as disabled', () => {
      render(<Disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Component Functionality', () => {
    it('handles input changes', () => {
      const handleChange = vi.fn();
      render(<Input onChange={handleChange} />);
      
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test@example.com' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('renders with label', () => {
      render(<Input label="Email Address" id="email" />);
      const label = screen.getByText('Email Address');
      const input = screen.getByRole('textbox');
      expect(label).toBeInTheDocument();
      expect(input).toHaveAttribute('id', 'email');
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(<Input scale={scale} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <Input color={color} />
        );
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        unmount();
      });
    });

    it('shows invalid state styling', () => {
      render(<Input isInvalid />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('cs:text-red-400');
      expect(input).toHaveClass('cs:bg-red-100/50');
    });

    it('shows valid state styling', () => {
      render(<Input isInvalid={false} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('cs:text-gray-900');
      expect(input).toHaveClass('cs:bg-white');
    });
  });

  describe('Accessibility', () => {
    it('has proper input attributes', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input.tagName).toBe('INPUT');
    });

    it('associates label with input', () => {
      render(<Input label="Email" id="email-input" />);
      const label = screen.getByText('Email');
      const input = screen.getByRole('textbox');
      expect(label).toHaveAttribute('for', 'email-input');
      expect(input).toHaveAttribute('id', 'email-input');
    });

    it('supports custom input types', () => {
      render(<Input type="email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('supports placeholder text', () => {
      render(<Input placeholder="Enter your email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('placeholder', 'Enter your email');
    });
  });
});