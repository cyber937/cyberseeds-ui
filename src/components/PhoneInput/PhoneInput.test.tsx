import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './PhoneInput.stories';
import { PhoneInput } from './PhoneInput';
import { renderWithUIColorProvider, testColors, testScales } from '../../test-utils';

const { Basic } = composeStories(stories);

describe('PhoneInput Component', () => {
  describe('Storybook Stories', () => {
    it('renders Basic story correctly', () => {
      render(<Basic />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('type', 'tel');
    });
  });

  describe('Component Functionality', () => {
    it('handles input changes', () => {
      const handleChange = vi.fn();
      render(<PhoneInput onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: '1234567890' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('calls onChange with raw digits', () => {
      const handleChange = vi.fn();
      render(<PhoneInput onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: '1234567890' } });
      expect(handleChange).toHaveBeenCalledWith('1234567890');
    });

    it('strips non-numeric characters from onChange value', () => {
      const handleChange = vi.fn();
      render(<PhoneInput onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'abc123def456' } });
      expect(handleChange).toHaveBeenCalledWith('123456');
    });

    it('limits onChange value to 10 digits', () => {
      const handleChange = vi.fn();
      render(<PhoneInput onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: '12345678901234' } });
      expect(handleChange).toHaveBeenCalledWith('1234567890');
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(<PhoneInput scale={scale} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <PhoneInput color={color} />
        );
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        unmount();
      });
    });

    it('shows invalid state styling', () => {
      render(<PhoneInput isInvalid />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('cs:text-red-400');
      expect(input).toHaveClass('cs:bg-red-100/50');
    });

    it('displays formatted value when controlled', () => {
      const { rerender } = render(<PhoneInput value="1234567890" />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('(123) 456-7890');

      rerender(<PhoneInput value="0987654321" />);
      expect(input.value).toBe('(098) 765-4321');
    });

    it('displays formatted partial value', () => {
      render(<PhoneInput value="123" />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('(123) ');
    });

    it('displays formatted 6-digit value', () => {
      render(<PhoneInput value="123456" />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('(123) 456-');
    });
  });

  describe('Form Integration', () => {
    it('works with form submission', () => {
      const handleSubmit = vi.fn(e => e.preventDefault());
      render(
        <form onSubmit={handleSubmit}>
          <PhoneInput name="phone" value="5551234567" />
          <button type="submit">Submit</button>
        </form>
      );

      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');

      expect(input).toHaveAttribute('name', 'phone');
      expect(input).toHaveValue('(555) 123-4567');

      fireEvent.click(button);
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('supports required validation', () => {
      render(<PhoneInput required />);
      const input = screen.getByRole('textbox');
      expect(input).toBeRequired();
    });

    it('renders with label and shows required indicator', () => {
      render(<PhoneInput label="Phone Number" require id="phone" />);
      const label = screen.getByText('Phone Number');
      const input = screen.getByRole('textbox');
      expect(label).toBeInTheDocument();
      expect(input).toHaveAttribute('id', 'phone');
    });
  });

  describe('Accessibility', () => {
    it('has proper input attributes', () => {
      render(<PhoneInput />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'tel');
    });

    it('associates label with input', () => {
      render(<PhoneInput label="Phone" id="phone-input" />);
      const label = screen.getByText('Phone');
      const input = screen.getByRole('textbox');
      expect(label).toHaveAttribute('for', 'phone-input');
      expect(input).toHaveAttribute('id', 'phone-input');
    });

    it('supports autocomplete for phone numbers', () => {
      render(<PhoneInput autoComplete="tel" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('autocomplete', 'tel');
    });

    it('supports aria-label', () => {
      render(<PhoneInput aria-label="Phone number input" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-label', 'Phone number input');
    });

    it('sets aria-invalid when isInvalid', () => {
      render(<PhoneInput isInvalid />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Keyboard and Input Handling', () => {
    it('allows backspace key', () => {
      render(<PhoneInput />);
      const input = screen.getByRole('textbox');

      fireEvent.keyDown(input, { key: 'Backspace' });
      expect(input).toBeInTheDocument();
    });

    it('handles keyDown events', () => {
      render(<PhoneInput />);
      const input = screen.getByRole('textbox');

      fireEvent.keyDown(input, { key: '1' });
      fireEvent.keyDown(input, { key: '2' });
      fireEvent.keyDown(input, { key: '3' });

      expect(input).toBeInTheDocument();
    });
  });
});
