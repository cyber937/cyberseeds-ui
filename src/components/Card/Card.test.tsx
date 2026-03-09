import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Card.stories';
import { Card } from './Card';
import { testScales } from '../../test-utils';

const { Default, WithHeaderAndFooter, Scales, StatCard, StatCardWithSubText, StatCardClickable } = composeStories(stories);

describe('Card Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story', () => {
      render(<Default />);
      expect(screen.getByText('Simple card content.')).toBeInTheDocument();
    });

    it('renders WithHeaderAndFooter story', () => {
      render(<WithHeaderAndFooter />);
      expect(screen.getByText('Card Title')).toBeInTheDocument();
    });

    it('renders Scales story', () => {
      render(<Scales />);
      expect(screen.getByText('Scale: xs')).toBeInTheDocument();
      expect(screen.getByText('Scale: lg')).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('renders children', () => {
      render(<Card><div>Test content</div></Card>);
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders compound Header/Body/Footer', () => {
      render(
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body</Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      );
      expect(screen.getByText('Header')).toBeInTheDocument();
      expect(screen.getByText('Body')).toBeInTheDocument();
      expect(screen.getByText('Footer')).toBeInTheDocument();
    });
  });

  describe('Scale', () => {
    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <Card scale={scale}>
            <Card.Body>Content</Card.Body>
          </Card>
        );
        expect(screen.getByText('Content')).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Shadow', () => {
    it('has shadow class by default', () => {
      const { container } = render(<Card>Content</Card>);
      expect(container.firstElementChild?.className).toContain('cs:shadow-sm');
    });

    it('has no shadow class when shadow={false}', () => {
      const { container } = render(<Card shadow={false}>Content</Card>);
      expect(container.firstElementChild?.className).not.toContain('cs:shadow-sm');
    });
  });

  describe('Border', () => {
    it('has border class by default', () => {
      const { container } = render(<Card>Content</Card>);
      expect(container.firstElementChild?.className).toContain('cs:border');
    });

    it('has no border class when bordered={false}', () => {
      const { container } = render(<Card bordered={false}>Content</Card>);
      expect(container.firstElementChild?.className).not.toContain('cs:border-gray-200');
    });
  });

  describe('Sub-components', () => {
    it('Card.Header has border-bottom class', () => {
      render(
        <Card>
          <Card.Header>Header</Card.Header>
        </Card>
      );
      expect(screen.getByText('Header').className).toContain('cs:border-b');
    });

    it('Card.Footer has border-top class', () => {
      render(
        <Card>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      );
      expect(screen.getByText('Footer').className).toContain('cs:border-t');
    });

    it('Card.Body renders content', () => {
      render(
        <Card>
          <Card.Body>Body content</Card.Body>
        </Card>
      );
      expect(screen.getByText('Body content')).toBeInTheDocument();
    });
  });

  describe('Dark Mode Classes', () => {
    it('has dark mode background class', () => {
      const { container } = render(<Card>Content</Card>);
      expect(container.firstElementChild?.className).toContain('cs:dark:bg-gray-800');
    });
  });

  describe('Card.Stat', () => {
    it('renders StatCard story', () => {
      render(<StatCard />);
      expect(screen.getByText('Total Students')).toBeInTheDocument();
      expect(screen.getByText('120')).toBeInTheDocument();
    });

    it('renders StatCardWithSubText story', () => {
      render(<StatCardWithSubText />);
      expect(screen.getByText('Inactive')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
      expect(screen.getByText('Withdrawn 4 / Graduated 1')).toBeInTheDocument();
    });

    it('renders StatCardClickable story', () => {
      render(<StatCardClickable />);
      expect(screen.getByText('Pending')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders label and value', () => {
      render(
        <Card>
          <Card.Stat label="Users" value={99} />
        </Card>
      );
      expect(screen.getByText('Users')).toBeInTheDocument();
      expect(screen.getByText('99')).toBeInTheDocument();
    });

    it('renders subText when provided', () => {
      render(
        <Card>
          <Card.Stat label="Total" value={10} subText="Active 8 / Inactive 2" />
        </Card>
      );
      expect(screen.getByText('Active 8 / Inactive 2')).toBeInTheDocument();
    });

    it('does not render subText when not provided', () => {
      const { container } = render(
        <Card>
          <Card.Stat label="Count" value={5} />
        </Card>
      );
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs).toHaveLength(2); // label + value only
    });

    it('renders as button when onClick is provided', () => {
      const handleClick = vi.fn();
      render(
        <Card>
          <Card.Stat label="Clickable" value={7} onClick={handleClick} />
        </Card>
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledOnce();
    });

    it('renders as div when onClick is not provided', () => {
      render(
        <Card>
          <Card.Stat label="Static" value={3} />
        </Card>
      );
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <Card scale={scale}>
            <Card.Stat label="Test" value={1} />
          </Card>
        );
        expect(screen.getByText('Test')).toBeInTheDocument();
        unmount();
      });
    });

    it('accepts string values', () => {
      render(
        <Card>
          <Card.Stat label="Status" value="Active" />
        </Card>
      );
      expect(screen.getByText('Active')).toBeInTheDocument();
    });
  });
});
