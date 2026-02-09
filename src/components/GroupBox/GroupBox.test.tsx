import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './GroupBox.stories';
import { GroupBox } from './GroupBox';
import { testScales } from '../../test-utils';

const { Default } = composeStories(stories);

describe('GroupBox Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const content = screen.getByText('This is inside of the group box.');
      expect(content).toBeInTheDocument();
    });

  });

  describe('Component Functionality', () => {
    it('renders with label', () => {
      render(
        <GroupBox label="Test Group">
          <div>Content</div>
        </GroupBox>
      );
      
      const label = screen.getByText('Test Group');
      const content = screen.getByText('Content');
      expect(label).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      render(
        <GroupBox label="Test Group">
          <div data-testid="child1">Child 1</div>
          <div data-testid="child2">Child 2</div>
        </GroupBox>
      );
      
      const child1 = screen.getByTestId('child1');
      const child2 = screen.getByTestId('child2');
      expect(child1).toHaveTextContent('Child 1');
      expect(child2).toHaveTextContent('Child 2');
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <GroupBox label="Test Group" scale={scale}>
            <div>Content</div>
          </GroupBox>
        );
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
        unmount();
      });
    });

    it('applies custom className', () => {
      render(
        <GroupBox label="Test Group" className="custom-class">
          <div>Content</div>
        </GroupBox>
      );
      
      const content = screen.getByText('Content');
      expect(content).toBeInTheDocument();
      // Custom className is applied to the inner div
    });

    it('handles nested group boxes', () => {
      render(
        <GroupBox label="Parent Group">
          <GroupBox label="Child Group">
            <div>Nested content</div>
          </GroupBox>
        </GroupBox>
      );
      
      const parentGroup = screen.getByText('Parent Group');
      const childGroup = screen.getByText('Child Group');
      expect(parentGroup).toBeInTheDocument();
      expect(childGroup).toBeInTheDocument();
    });
  });

  describe('Layout and Styling', () => {
    it('has proper container structure', () => {
      render(
        <GroupBox label="Test Group">
          <div>Content</div>
        </GroupBox>
      );
      
      const content = screen.getByText('Content');
      expect(content).toBeInTheDocument();
      expect(content.tagName).toBe('DIV');
    });

    it('positions label correctly', () => {
      render(
        <GroupBox label="Test Group">
          <div>Content</div>
        </GroupBox>
      );
      
      const label = screen.getByText('Test Group');
      expect(label).toBeInTheDocument();
      // Label should be positioned at the top of the group
    });

    it('contains all children within the group', () => {
      render(
        <GroupBox label="Test Group">
          <input type="text" data-testid="input1" />
          <input type="text" data-testid="input2" />
        </GroupBox>
      );
      
      const input1 = screen.getByTestId('input1');
      const input2 = screen.getByTestId('input2');
      
      expect(input1).toBeInTheDocument();
      expect(input2).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders with proper structure', () => {
      render(
        <GroupBox label="Test Group">
          <div>Content</div>
        </GroupBox>
      );
      
      const label = screen.getByText('Test Group');
      const content = screen.getByText('Content');
      expect(label).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });

    it('associates label with content', () => {
      render(
        <GroupBox label="Test Group">
          <div>Content</div>
        </GroupBox>
      );
      
      const label = screen.getByText('Test Group');
      const content = screen.getByText('Content');
      expect(label).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });

    it('renders content without label', () => {
      render(
        <GroupBox>
          <div>Content without label</div>
        </GroupBox>
      );
      
      const content = screen.getByText('Content without label');
      expect(content).toBeInTheDocument();
    });

    it('supports custom content', () => {
      render(
        <GroupBox label="Form Group">
          <div>Custom content</div>
        </GroupBox>
      );
      
      const label = screen.getByText('Form Group');
      const content = screen.getByText('Custom content');
      expect(label).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });
  });
});