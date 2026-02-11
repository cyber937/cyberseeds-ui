import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Alert.stories';
import { Alert } from './Alert';
import { testScales } from '../../test-utils';

const { Default, Variants, Scales } = composeStories(stories);

describe('Alert Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story', () => {
      render(<Default />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders Variants story', () => {
      render(<Variants />);
      expect(screen.getAllByRole('status').length + screen.getAllByRole('alert').length).toBe(4);
    });

    it('renders Scales story', () => {
      render(<Scales />);
      expect(screen.getAllByRole('status')).toHaveLength(4);
    });
  });

  describe('Variants', () => {
    it('renders info variant with status role', () => {
      render(<Alert variant="info">Info</Alert>);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders success variant with status role', () => {
      render(<Alert variant="success">Success</Alert>);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders warning variant with alert role', () => {
      render(<Alert variant="warning">Warning</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders error variant with alert role', () => {
      render(<Alert variant="error">Error</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('info variant has blue background class', () => {
      render(<Alert variant="info">Info</Alert>);
      expect(screen.getByRole('status').className).toContain('cs:bg-blue-50');
    });

    it('success variant has green background class', () => {
      render(<Alert variant="success">Success</Alert>);
      expect(screen.getByRole('status').className).toContain('cs:bg-green-50');
    });

    it('warning variant has amber background class', () => {
      render(<Alert variant="warning">Warning</Alert>);
      expect(screen.getByRole('alert').className).toContain('cs:bg-amber-50');
    });

    it('error variant has red background class', () => {
      render(<Alert variant="error">Error</Alert>);
      expect(screen.getByRole('alert').className).toContain('cs:bg-red-50');
    });
  });

  describe('Title', () => {
    it('renders title when provided', () => {
      render(<Alert title="Test Title">Content</Alert>);
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('does not render title element when not provided', () => {
      render(<Alert>Content only</Alert>);
      expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    });
  });

  describe('Icon', () => {
    it('renders icon by default', () => {
      render(<Alert>Content</Alert>);
      const container = screen.getByRole('status');
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('hides icon when icon={false}', () => {
      render(<Alert icon={false}>Content</Alert>);
      const container = screen.getByRole('status');
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });
  });

  describe('Close Button', () => {
    it('renders close button when closable and onClose provided', () => {
      render(<Alert closable onClose={() => {}}>Content</Alert>);
      expect(screen.getByLabelText('Close')).toBeInTheDocument();
    });

    it('does not render close button when closable is false', () => {
      render(<Alert>Content</Alert>);
      expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
    });

    it('calls onClose when close button clicked', () => {
      const onClose = vi.fn();
      render(<Alert closable onClose={onClose}>Content</Alert>);
      fireEvent.click(screen.getByLabelText('Close'));
      expect(onClose).toHaveBeenCalledOnce();
    });
  });

  describe('Scale', () => {
    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(<Alert scale={scale}>Content</Alert>);
        expect(screen.getByRole('status')).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Accessibility', () => {
    it('has role="alert" for error variant', () => {
      render(<Alert variant="error">Error</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('has role="status" for info variant', () => {
      render(<Alert variant="info">Info</Alert>);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('close button has aria-label', () => {
      render(<Alert closable onClose={() => {}}>Content</Alert>);
      expect(screen.getByLabelText('Close')).toBeInTheDocument();
    });
  });
});
