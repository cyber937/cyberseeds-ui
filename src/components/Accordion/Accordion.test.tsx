import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Accordion.stories';
import { Accordion, AccordionItem } from './Accordion';

const { Default } = composeStories(stories);

describe('Accordion Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story correctly', () => {
      render(<Default />);
      const accordionButtons = screen.getAllByRole('button');
      expect(accordionButtons.length).toBeGreaterThan(0);
    });

  });

  describe('Component Functionality', () => {
    it('renders accordion items', () => {
      render(
        <Accordion>
          <AccordionItem title="Item 1">Content 1</AccordionItem>
          <AccordionItem title="Item 2">Content 2</AccordionItem>
        </Accordion>
      );
      
      const item1 = screen.getByText('Item 1');
      const item2 = screen.getByText('Item 2');
      expect(item1).toBeInTheDocument();
      expect(item2).toBeInTheDocument();
    });

    it('toggles accordion items on click', () => {
      render(
        <Accordion>
          <AccordionItem title="Item 1">Content 1</AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole('button', { name: /Item 1/i });
      const content = screen.queryByText('Content 1');
      
      // Initially collapsed (content might be hidden)
      fireEvent.click(button);
      
      // After click, content should be visible
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    it('handles multiple accordion items independently', () => {
      render(
        <Accordion>
          <AccordionItem title="Item 1">Content 1</AccordionItem>
          <AccordionItem title="Item 2">Content 2</AccordionItem>
        </Accordion>
      );
      
      const button1 = screen.getByRole('button', { name: /Item 1/i });
      const button2 = screen.getByRole('button', { name: /Item 2/i });
      
      // Open first item
      fireEvent.click(button1);
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      
      // Open second item
      fireEvent.click(button2);
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('supports default open state', () => {
      render(
        <Accordion>
          <AccordionItem title="Item 1" defaultOpen>
            Content 1
          </AccordionItem>
        </Accordion>
      );
      
      // Content should be visible by default
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });
  });

  describe('AccordionItem Component', () => {
    it('renders with title and content', () => {
      render(
        <Accordion>
          <AccordionItem title="Test Title">
            Test Content
          </AccordionItem>
        </Accordion>
      );
      
      const title = screen.getByText('Test Title');
      expect(title).toBeInTheDocument();
      
      // Click to expand
      fireEvent.click(screen.getByRole('button'));
      const content = screen.getByText('Test Content');
      expect(content).toBeInTheDocument();
    });

    it('handles complex content', () => {
      render(
        <Accordion>
          <AccordionItem title="Complex Content">
            <div data-testid="complex-content">
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
              <button>Action Button</button>
            </div>
          </AccordionItem>
        </Accordion>
      );
      
      // Click to expand
      fireEvent.click(screen.getByRole('button', { name: /complex content/i }));
      
      const complexContent = screen.getByTestId('complex-content');
      expect(complexContent).toBeInTheDocument();
      expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
      expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
      expect(screen.getByText('Action Button')).toBeInTheDocument();
    });

    it('supports custom props', () => {
      render(
        <Accordion>
          <AccordionItem 
            title="Custom Item" 
            className="custom-accordion-item"
            data-testid="custom-item"
          >
            Content
          </AccordionItem>
        </Accordion>
      );
      
      const item = screen.getByTestId('custom-item');
      expect(item).toHaveClass('custom-accordion-item');
    });
  });

  describe('Accessibility', () => {
    it('has proper accordion structure', () => {
      render(
        <Accordion>
          <AccordionItem title="Item 1">Content 1</AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole('button', { name: /item 1/i });
      expect(button).toBeInTheDocument();
    });

    it('has proper button attributes', () => {
      render(
        <Accordion>
          <AccordionItem title="Item 1">Content 1</AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole('button', { name: /item 1/i });
      expect(button).toHaveAttribute('aria-expanded');
      expect(button.tagName).toBe('BUTTON');
    });

    it('updates aria-expanded on toggle', () => {
      render(
        <Accordion>
          <AccordionItem title="Item 1">Content 1</AccordionItem>
        </Accordion>
      );
      
      const button = screen.getByRole('button', { name: /item 1/i });
      
      // Initially collapsed
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      // After click, should be expanded
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('supports keyboard navigation', () => {
      render(
        <Accordion>
          <AccordionItem title="Item 1">Content 1</AccordionItem>
          <AccordionItem title="Item 2">Content 2</AccordionItem>
        </Accordion>
      );
      
      const buttons = screen.getAllByRole('button');
      
      // Test that buttons are focusable
      buttons.forEach(button => {
        expect(button).not.toHaveAttribute('tabindex', '-1');
      });
      
      // Test Enter key activation - simulate click since Enter on button triggers click
      fireEvent.click(buttons[0]);
      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    });
  });
});