import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Select.stories';
import { Select, SelectOption } from './Select';
import { testScales } from '../../test-utils';

const { Default, Scale } = composeStories(stories);

describe('Select Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
    });

    it('renders Scale story correctly', () => {
      render(<Scale />);
      const selects = screen.getAllByRole('combobox');
      expect(selects).toHaveLength(2);
    });
  });

  describe('Component Functionality', () => {
    it('handles change events', () => {
      const handleChange = vi.fn();
      render(
        <Select onChange={handleChange}>
          <SelectOption value="option1" label="Option 1" />
          <SelectOption value="option2" label="Option 2" />
        </Select>
      );
      
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'option1' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <Select scale={scale}>
            <SelectOption value="test" label="Test" />
          </Select>
        );
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
        unmount();
      });
    });

    it('renders with custom options', () => {
      render(
        <Select>
          <SelectOption value="option1" label="Option 1" />
          <SelectOption value="option2" label="Option 2" />
          <SelectOption value="option3" label="Option 3" />
        </Select>
      );
      
      const select = screen.getByRole('combobox');
      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(3);
      expect(options[0]).toHaveTextContent('Option 1');
      expect(options[1]).toHaveTextContent('Option 2');
      expect(options[2]).toHaveTextContent('Option 3');
    });

    it('can be disabled', () => {
      render(
        <Select disabled>
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toBeDisabled();
    });

    it('shows dropdown icon', () => {
      render(
        <Select>
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const icon = screen.getByRole('combobox').parentElement?.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('SelectOption Component', () => {
    it('renders with correct value and label', () => {
      render(
        <Select>
          <SelectOption value="test-value" label="Test Label" />
        </Select>
      );
      
      const option = screen.getByRole('option');
      expect(option).toHaveAttribute('value', 'test-value');
      expect(option).toHaveTextContent('Test Label');
    });

    it('supports additional props', () => {
      render(
        <Select>
          <SelectOption value="test" label="Test" disabled />
        </Select>
      );
      
      const option = screen.getByRole('option');
      expect(option).toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('has proper select attributes', () => {
      render(
        <Select>
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
    });

    it('supports custom id', () => {
      render(
        <Select id="custom-select">
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('id', 'custom-select');
    });

    it('supports aria-label', () => {
      render(
        <Select aria-label="Custom select">
          <SelectOption value="option1" label="Option 1" />
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('aria-label', 'Custom select');
    });
  });
});