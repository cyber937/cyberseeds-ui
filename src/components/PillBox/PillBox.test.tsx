import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './PillBox.stories';
import { PillBox } from './PillBox';
import { renderWithUIColorProvider, testColors, testScales } from '../../test-utils';

const { Default, Color, Scale } = composeStories(stories);

describe('PillBox Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const pillbox = screen.getByText('PillBox');
      expect(pillbox).toBeInTheDocument();
    });

    it('renders Color story correctly', () => {
      render(<Color />);
      const pillboxes = screen.getAllByText(/Red|Orange|Amber/i);
      expect(pillboxes.length).toBeGreaterThan(0);
    });

    it('renders Scale story correctly', () => {
      render(<Scale />);
      const pillboxes = screen.getAllByText(/XS|SM|MD|LG/);
      expect(pillboxes).toHaveLength(4);
    });
  });

  describe('Component Functionality', () => {
    it('renders as span', () => {
      render(<PillBox label="Test Pill" />);
      const pillbox = screen.getByText('Test Pill');
      expect(pillbox.tagName).toBe('SPAN');
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(<PillBox label="Test" scale={scale} />);
        const pillbox = screen.getByText('Test');
        expect(pillbox).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <PillBox label="Test" color={color} />
        );
        const pillbox = screen.getByText('Test');
        expect(pillbox).toBeInTheDocument();
        unmount();
      });
    });

    it('applies custom className', () => {
      render(<PillBox label="Test" className="custom-class" />);
      const pillbox = screen.getByText('Test');
      expect(pillbox).toHaveClass('custom-class');
    });

    it('applies correct color classes', () => {
      render(<PillBox label="Red Pill" color="red" />);
      const pillbox = screen.getByText('Red Pill');
      expect(pillbox).toHaveClass('cs-pill');
      expect(pillbox.style.getPropertyValue('--cs-ui-light')).toBeTruthy();
      expect(pillbox.style.getPropertyValue('--cs-ui-lightText')).toBeTruthy();
    });
  });

  describe('Context Integration', () => {
    it('respects UI color context', () => {
      renderWithUIColorProvider(
        <PillBox label="Contextual Pill" />,
        { initialColor: 'red' }
      );

      const pillbox = screen.getByText('Contextual Pill');
      expect(pillbox).toBeInTheDocument();
    });

    it('overrides context color with explicit color prop', () => {
      renderWithUIColorProvider(
        <PillBox label="Blue Pill" color="blue" />,
        { initialColor: 'red' }
      );

      const pillbox = screen.getByText('Blue Pill');
      expect(pillbox).toHaveClass('cs-pill');
      expect(pillbox.style.getPropertyValue('--cs-ui-light')).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('renders label text correctly', () => {
      render(<PillBox label="Status: Active" />);
      const pillbox = screen.getByText('Status: Active');
      expect(pillbox).toBeInTheDocument();
    });
  });
});
