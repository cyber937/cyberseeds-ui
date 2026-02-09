import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './RadioGroup.stories';
import { RadioGroup } from './RadioGroup';
import { Radio } from '../Radio/Radio';
import { renderWithUIColorProvider, testColors, testScales } from '../../test-utils';

const { Default, Scale } = composeStories(stories);

describe('RadioGroup Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons.length).toBeGreaterThan(0);
    });

    it('renders Scale story correctly', () => {
      render(<Scale />);
      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons.length).toBeGreaterThan(0);
    });
  });

  describe('Component Functionality', () => {
    it('renders radio buttons within group', () => {
      render(
        <RadioGroup>
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
        </RadioGroup>
      );

      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons).toHaveLength(3);
    });

    it('handles radio selection changes', () => {
      const handleChange = vi.fn();
      render(
        <RadioGroup onChange={handleChange}>
          <RadioGroup.Option value="option1" label="Option 1" />
          <RadioGroup.Option value="option2" label="Option 2" />
        </RadioGroup>
      );

      const radio1 = screen.getByRole('radio', { name: /Option 1/i });
      fireEvent.click(radio1);
      expect(handleChange).toHaveBeenCalledWith('option1');
    });

    it('ensures only one radio is selected at a time via controlled state', () => {
      const handleChange = vi.fn();
      const { rerender } = render(
        <RadioGroup value="option1" onChange={handleChange}>
          <RadioGroup.Option value="option1" label="Option 1" />
          <RadioGroup.Option value="option2" label="Option 2" />
          <RadioGroup.Option value="option3" label="Option 3" />
        </RadioGroup>
      );

      const radio1 = screen.getByRole('radio', { name: /Option 1/i });
      const radio2 = screen.getByRole('radio', { name: /Option 2/i });

      expect(radio1).toBeChecked();
      expect(radio2).not.toBeChecked();

      // Switch to option2
      rerender(
        <RadioGroup value="option2" onChange={handleChange}>
          <RadioGroup.Option value="option1" label="Option 1" />
          <RadioGroup.Option value="option2" label="Option 2" />
          <RadioGroup.Option value="option3" label="Option 3" />
        </RadioGroup>
      );

      expect(radio1).not.toBeChecked();
      expect(radio2).toBeChecked();
    });

    it('supports default selected value', () => {
      const handleChange = vi.fn();
      render(
        <RadioGroup value="option2" onChange={handleChange}>
          <RadioGroup.Option value="option1" label="Option 1" />
          <RadioGroup.Option value="option2" label="Option 2" />
          <RadioGroup.Option value="option3" label="Option 3" />
        </RadioGroup>
      );

      const radio2 = screen.getByRole('radio', { name: /Option 2/i });
      expect(radio2).toBeChecked();
    });

    it('can be controlled', () => {
      const handleChange = vi.fn();
      const { rerender } = render(
        <RadioGroup value="option1" onChange={handleChange}>
          <RadioGroup.Option value="option1" label="Option 1" />
          <RadioGroup.Option value="option2" label="Option 2" />
        </RadioGroup>
      );

      const radio1 = screen.getByRole('radio', { name: /Option 1/i });
      const radio2 = screen.getByRole('radio', { name: /Option 2/i });

      expect(radio1).toBeChecked();
      expect(radio2).not.toBeChecked();

      rerender(
        <RadioGroup value="option2" onChange={handleChange}>
          <RadioGroup.Option value="option1" label="Option 1" />
          <RadioGroup.Option value="option2" label="Option 2" />
        </RadioGroup>
      );

      expect(radio1).not.toBeChecked();
      expect(radio2).toBeChecked();
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <RadioGroup scale={scale}>
            <Radio value="test" label="Test Option" />
          </RadioGroup>
        );
        const radioButtons = screen.getAllByRole('radio');
        expect(radioButtons.length).toBeGreaterThan(0);
        unmount();
      });
    });

    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <RadioGroup color={color}>
            <Radio value="test" label="Test Option" />
          </RadioGroup>
        );
        const radioButtons = screen.getAllByRole('radio');
        expect(radioButtons.length).toBeGreaterThan(0);
        unmount();
      });
    });
  });

  describe('Disabled State', () => {
    it('supports individual radio disabled state', () => {
      render(
        <RadioGroup>
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" disabled />
          <Radio value="option3" label="Option 3" />
        </RadioGroup>
      );

      const radio1 = screen.getByRole('radio', { name: /Option 1/i });
      const radio2 = screen.getByRole('radio', { name: /Option 2/i });
      const radio3 = screen.getByRole('radio', { name: /Option 3/i });

      expect(radio1).not.toBeDisabled();
      expect(radio2).toBeDisabled();
      expect(radio3).not.toBeDisabled();
    });
  });

  describe('Layout and Styling', () => {
    it('applies proper group layout', () => {
      render(
        <RadioGroup>
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
        </RadioGroup>
      );

      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('has proper radio buttons', () => {
      render(
        <RadioGroup>
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
        </RadioGroup>
      );

      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons.length).toBe(2);
    });

    it('has radiogroup role on container', () => {
      render(
        <RadioGroup>
          <Radio value="option1" label="Option 1" />
        </RadioGroup>
      );

      const group = screen.getByRole('radiogroup');
      expect(group).toBeInTheDocument();
    });

    it('supports keyboard navigation', () => {
      render(
        <RadioGroup>
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
        </RadioGroup>
      );

      const radioButtons = screen.getAllByRole('radio');

      // Focus first radio
      radioButtons[0].focus();
      expect(radioButtons[0]).toHaveFocus();
    });
  });
});
