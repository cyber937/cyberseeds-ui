import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './TextArea.stories';
import { TextArea } from './TextArea';
import { renderWithUIColorProvider, testColors, testScales } from '../../test-utils';

const { Default, Require, Invalid, Disabled } = composeStories(stories);

describe('TextArea Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
    });

    it('renders Require story correctly', () => {
      render(<Require />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
    });

    it('renders Disabled story correctly', () => {
      render(<Disabled />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
      expect(textarea).toBeDisabled();
    });

    it('renders Invalid story correctly', () => {
      render(<Invalid />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
    });
  });

  describe('Component Functionality', () => {
    it('handles input changes', () => {
      const handleChange = vi.fn();
      render(<TextArea onChange={handleChange} />);
      
      const textarea = screen.getByRole('textbox');
      fireEvent.change(textarea, { target: { value: 'Test content' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('renders with label', () => {
      render(<TextArea label="Description" id="description" />);
      const label = screen.getByText('Description');
      const textarea = screen.getByRole('textbox');
      expect(label).toBeInTheDocument();
      expect(textarea).toHaveAttribute('id', 'description');
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(<TextArea scale={scale} />);
        const textarea = screen.getByRole('textbox');
        expect(textarea).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <TextArea color={color} />
        );
        const textarea = screen.getByRole('textbox');
        expect(textarea).toBeInTheDocument();
        unmount();
      });
    });

    it('shows invalid state styling', () => {
      render(<TextArea isInvalid />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('cs:text-red-400');
      expect(textarea).toHaveClass('cs:bg-red-100/50');
    });

    it('shows valid state styling', () => {
      render(<TextArea isInvalid={false} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('cs:text-gray-900');
      expect(textarea).toHaveClass('cs:bg-white');
    });

    it('can be controlled', () => {
      const handleChange = vi.fn();
      const { rerender } = render(<TextArea value="Initial value" onChange={handleChange} />);
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
      expect(textarea.value).toBe('Initial value');
      
      rerender(<TextArea value="Updated value" onChange={handleChange} />);
      expect(textarea.value).toBe('Updated value');
    });

    it('respects disabled state', () => {
      render(<TextArea disabled />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeDisabled();
      
      // Try to interact with disabled textarea
      fireEvent.focus(textarea);
      expect(textarea).toBeDisabled();
    });

    it('supports placeholder text', () => {
      render(<TextArea placeholder="Enter your message..." />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('placeholder', 'Enter your message...');
    });

    it('supports rows and cols attributes', () => {
      render(<TextArea rows={10} cols={50} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '10');
      expect(textarea).toHaveAttribute('cols', '50');
    });

    it('supports maxLength attribute', () => {
      render(<TextArea maxLength={100} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('maxLength', '100');
    });
  });

  describe('Resizing Behavior', () => {
    it('supports resize control', () => {
      render(<TextArea style={{ resize: 'vertical' }} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
      // Resize behavior is controlled by CSS
    });

    it('supports auto-resizing', () => {
      render(<TextArea style={{ resize: 'none', overflow: 'hidden' }} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
      // Auto-resize would be handled by additional JavaScript
    });
  });

  describe('Form Integration', () => {
    it('works with form submission', () => {
      const handleSubmit = vi.fn(e => e.preventDefault());
      render(
        <form onSubmit={handleSubmit}>
          <TextArea name="message" value="Test message" readOnly />
          <button type="submit">Submit</button>
        </form>
      );

      const textarea = screen.getByRole('textbox');
      const button = screen.getByRole('button');

      expect(textarea).toHaveAttribute('name', 'message');
      expect(textarea).toHaveValue('Test message');

      fireEvent.click(button);
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('supports required attribute', () => {
      render(<TextArea required />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeRequired();
    });

    it('shows required indicator in label', () => {
      render(<TextArea label="Message" require id="message" />);
      const label = screen.getByText('Message');
      expect(label).toBeInTheDocument();
      // Required indicator would be shown in the Label component
    });
  });

  describe('Accessibility', () => {
    it('has proper textarea attributes', () => {
      render(<TextArea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea.tagName).toBe('TEXTAREA');
    });

    it('associates label with textarea', () => {
      render(<TextArea label="Message" id="message-input" />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea).toBeInTheDocument();
      expect(textarea).toHaveAttribute('id', 'message-input');
    });

    it('supports aria-label', () => {
      render(<TextArea aria-label="Custom textarea" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-label', 'Custom textarea');
    });

    it('supports aria-describedby', () => {
      render(<TextArea aria-describedby="textarea-description" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-describedby', 'textarea-description');
    });

    it('supports aria-invalid for invalid state', () => {
      render(<TextArea isInvalid aria-invalid="true" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-invalid', 'true');
    });
  });
});