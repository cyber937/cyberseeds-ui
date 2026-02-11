import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Card.stories';
import { Card } from './Card';
import { testScales } from '../../test-utils';

const { Default, WithHeaderAndFooter, Scales } = composeStories(stories);

describe('Card Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story', () => {
      render(<Default />);
      expect(screen.getByText('シンプルなカードコンテンツです。')).toBeInTheDocument();
    });

    it('renders WithHeaderAndFooter story', () => {
      render(<WithHeaderAndFooter />);
      expect(screen.getByText('カードタイトル')).toBeInTheDocument();
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
});
