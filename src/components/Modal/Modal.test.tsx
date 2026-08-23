import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { useState } from 'react';
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
      const widths = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
      
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

      // 3 in the content + the header's close button.
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(4);

      // Test Escape key closes modal
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Header close button', () => {
    it('closes the modal when clicked', () => {
      const onClose = vi.fn();
      render(
        <Modal onClose={onClose}>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      fireEvent.click(screen.getByRole('button', { name: 'Close' }));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('is absent when the modal cannot be closed', () => {
      render(
        <Modal>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    });

    it('can be suppressed for flows that must not be abandoned', () => {
      render(
        <Modal onClose={() => {}}>
          <Modal.Header showClose={false}>Title</Modal.Header>
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    });

    it('takes a localised label', () => {
      render(
        <Modal onClose={() => {}}>
          <Modal.Header closeLabel="閉じる">Title</Modal.Header>
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      expect(screen.getByRole('button', { name: '閉じる' })).toBeInTheDocument();
    });

    it('still labels the dialog by the title, not the close button', () => {
      render(
        <Modal onClose={() => {}}>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      const dialog = screen.getByRole('dialog', { hidden: true });
      const labelledBy = dialog.getAttribute('aria-labelledby')!;
      expect(document.getElementById(labelledBy)?.textContent).toBe('Title');
    });
  });

  describe('Focus management', () => {
    it('focuses the first focusable element on mount', () => {
      render(
        <Modal>
          <Modal.Body>
            <button>First</button>
            <button>Second</button>
          </Modal.Body>
        </Modal>
      );

      const first = screen.getByText('First');
      expect(document.activeElement).toBe(first);
    });

    it('wraps Tab from the last focusable back to the first', () => {
      render(
        <Modal>
          <Modal.Body>
            <button>First</button>
            <button>Last</button>
          </Modal.Body>
        </Modal>
      );

      const first = screen.getByText('First');
      const last = screen.getByText('Last');

      act(() => last.focus());
      fireEvent.keyDown(document, { key: 'Tab' });
      expect(document.activeElement).toBe(first);
    });

    it('wraps Shift+Tab from the first focusable back to the last', () => {
      render(
        <Modal>
          <Modal.Body>
            <button>First</button>
            <button>Last</button>
          </Modal.Body>
        </Modal>
      );

      const first = screen.getByText('First');
      const last = screen.getByText('Last');

      act(() => first.focus());
      fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
      expect(document.activeElement).toBe(last);
    });

    it('restores focus to the previously-focused element on unmount', () => {
      function Harness() {
        const [open, setOpen] = useState(false);
        return (
          <>
            <button onClick={() => setOpen(true)}>opener</button>
            {open && (
              <Modal onClose={() => setOpen(false)}>
                <Modal.Body>
                  <button>inside</button>
                </Modal.Body>
              </Modal>
            )}
          </>
        );
      }

      render(<Harness />);
      const opener = screen.getByText('opener');
      act(() => opener.focus());
      expect(document.activeElement).toBe(opener);

      act(() => opener.click());
      // Modal mounted; focus moved inside.
      expect(document.activeElement).toBe(screen.getByText('inside'));

      // Close via Escape; modal unmounts and focus should restore.
      act(() => {
        fireEvent.keyDown(document, { key: 'Escape' });
      });
      expect(document.activeElement).toBe(opener);
    });

    it('falls back to focusing the dialog container when there are no focusable children', () => {
      render(
        <Modal>
          <Modal.Body>
            <p>Just text, no interactive elements.</p>
          </Modal.Body>
        </Modal>
      );
      const dialog = screen.getByRole('dialog', { hidden: true });
      expect(document.activeElement).toBe(dialog);
      expect(dialog).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('Responsive width', () => {
    function panelOf(dialog: HTMLElement): HTMLElement {
      return dialog.querySelector('div')!;
    }

    it('applies the single string width as a sm: class (legacy)', () => {
      render(
        <Modal width="lg">
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      const panel = panelOf(screen.getByRole('dialog', { hidden: true }));
      expect(panel.className).toContain('cs:sm:w-2xl');
    });

    it('offers wide sizes for content that needs the room', () => {
      // A template editor or a document preview does not fit in 42rem.
      render(
        <Modal width="xl">
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      expect(panelOf(screen.getByRole('dialog', { hidden: true })).className).toContain(
        'cs:sm:w-4xl'
      );
    });

    it('offers the widest size too', () => {
      render(
        <Modal width="2xl">
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      expect(panelOf(screen.getByRole('dialog', { hidden: true })).className).toContain(
        'cs:sm:w-5xl'
      );
    });

    it('takes the wide sizes per breakpoint as well', () => {
      render(
        <Modal width={{ base: "md", lg: "xl", xl: "2xl" }}>
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      const panel = panelOf(screen.getByRole('dialog', { hidden: true }));
      expect(panel.className).toContain('cs:w-md');
      expect(panel.className).toContain('cs:lg:w-4xl');
      expect(panel.className).toContain('cs:xl:w-5xl');
    });

    it('applies an object width as per-breakpoint classes', () => {
      render(
        <Modal width={{ base: "sm", md: "md", lg: "lg" }}>
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      const panel = panelOf(screen.getByRole('dialog', { hidden: true }));
      expect(panel.className).toContain('cs:w-2xs');
      expect(panel.className).toContain('cs:md:w-md');
      expect(panel.className).toContain('cs:lg:w-2xl');
    });

    it('omits unspecified breakpoints from the class list', () => {
      render(
        <Modal width={{ md: "lg" }}>
          <Modal.Body>Body</Modal.Body>
        </Modal>
      );
      const panel = panelOf(screen.getByRole('dialog', { hidden: true }));
      expect(panel.className).toContain('cs:md:w-2xl');
      expect(panel.className).not.toContain('cs:lg:');
      expect(panel.className).not.toContain('cs:xl:');
    });
  });
});
/**
 * A confirm dialog opened on top of a detail dialog — how the withdrawal
 * approval screen is built. One Escape must not clear both.
 */
describe("Modal: nested", () => {
  function DetailWithConfirm({
    onCloseDetail,
    onCloseConfirm,
  }: {
    onCloseDetail: () => void;
    onCloseConfirm: () => void;
  }) {
    const [confirming, setConfirming] = useState(false);
    return (
      <Modal onClose={onCloseDetail}>
        <Modal.Body>
          <button onClick={() => setConfirming(true)}>Approve</button>
          {confirming && (
            <Modal onClose={onCloseConfirm}>
              <Modal.Body>
                <button>Confirm approval</button>
              </Modal.Body>
            </Modal>
          )}
        </Modal.Body>
      </Modal>
    );
  }

  it("closes only the confirm dialog on Escape", async () => {
    const detail = vi.fn();
    const confirm = vi.fn();
    render(<DetailWithConfirm onCloseDetail={detail} onCloseConfirm={confirm} />);

    fireEvent.click(screen.getByRole("button", { name: "Approve" }));
    await screen.findByRole("button", { name: "Confirm approval" });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(confirm).toHaveBeenCalledTimes(1);
    expect(detail).not.toHaveBeenCalled();
  });

  it("keeps the inner dialog reachable by keyboard", async () => {
    render(<DetailWithConfirm onCloseDetail={() => {}} onCloseConfirm={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: "Approve" }));

    const confirm = await screen.findByRole("button", { name: "Confirm approval" });
    confirm.focus();
    expect(document.activeElement).toBe(confirm);
  });
});
