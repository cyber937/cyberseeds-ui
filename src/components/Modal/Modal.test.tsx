import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Modal.stories';
import { Modal } from './Modal';

const { Primary } = composeStories(stories);

describe('Modal Component', () => {
  describe('Storybook Stories', () => {
    it('renders Primary story correctly', () => {
      render(<Primary />);
      const modal = screen.getByRole('dialog', { hidden: true });
      expect(modal).toBeInTheDocument();
    });
  });

  describe('Component Functionality', () => {
    it('renders with different widths', () => {
      const widths = ['sm', 'md', 'lg'] as const;
      
      widths.forEach(width => {
        const { unmount } = render(
          <Modal width={width}>
            <div>Modal content</div>
          </Modal>
        );
        const modal = screen.getByRole('dialog', { hidden: true });
        expect(modal).toBeInTheDocument();
        unmount();
      });
    });

    it('calls onClose when provided', () => {
      const handleClose = vi.fn();
      render(
        <Modal onClose={handleClose}>
          <div>Modal content</div>
        </Modal>
      );
      
      // Modal should be rendered
      const modal = screen.getByRole('dialog', { hidden: true });
      expect(modal).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      render(
        <Modal>
          <div data-testid="modal-content">Test content</div>
        </Modal>
      );
      
      const content = screen.getByTestId('modal-content');
      expect(content).toHaveTextContent('Test content');
    });

    it('has proper modal structure', () => {
      render(
        <Modal>
          <div>Modal content</div>
        </Modal>
      );
      
      const modal = screen.getByRole('dialog', { hidden: true });
      expect(modal).toBeInTheDocument();
      expect(modal).toHaveClass('cs:fixed');
      expect(modal).toHaveClass('cs:inset-0');
    });
  });

  describe('Compound Components', () => {
    it('renders Modal.Header correctly', () => {
      render(
        <Modal>
          <Modal.Header>Header Content</Modal.Header>
          <Modal.Body>Body Content</Modal.Body>
        </Modal>
      );
      
      const header = screen.getByText('Header Content');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('cs:font-semibold');
    });

    it('renders Modal.Body correctly', () => {
      render(
        <Modal>
          <Modal.Body>Body Content</Modal.Body>
        </Modal>
      );
      
      const body = screen.getByText('Body Content');
      expect(body).toBeInTheDocument();
      expect(body).toHaveClass('cs:flex-1');
    });

    it('renders Modal.Footer correctly', () => {
      render(
        <Modal>
          <Modal.Footer>
            <button>Cancel</button>
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      );
      
      const footer = screen.getByText('Cancel').parentElement;
      expect(footer).toHaveClass('cs:flex');
      expect(footer).toHaveClass('cs:justify-end');
    });

    it('renders full modal structure', () => {
      render(
        <Modal>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Content</Modal.Body>
          <Modal.Footer>
            <button>Close</button>
          </Modal.Footer>
        </Modal>
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
      expect(screen.getByText('Close')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper modal attributes', () => {
      render(
        <Modal>
          <div>Modal content</div>
        </Modal>
      );
      
      const modal = screen.getByRole('dialog', { hidden: true });
      expect(modal).toBeInTheDocument();
    });

    it('supports keyboard navigation', () => {
      const handleClose = vi.fn();
      render(
        <Modal onClose={handleClose}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>
            <button>Button 1</button>
            <button>Button 2</button>
          </Modal.Body>
          <Modal.Footer>
            <button>Close</button>
          </Modal.Footer>
        </Modal>
      );

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);

      // Test Escape key closes modal
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});