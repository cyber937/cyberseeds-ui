import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { vi } from 'vitest';
import { UIColorProvider } from './components/UIColorProvider/UIColorContext';
import type { Color } from './components/DesignSystemUtils';

// Custom render function with UIColorProvider wrapper
export const renderWithUIColorProvider = (
  ui: React.ReactElement,
  options: {
    initialColor?: Color;
    renderOptions?: Parameters<typeof render>[1];
  } = {}
) => {
  const { initialColor = 'blue', renderOptions } = options;
  
  const Wrapper = ({ children }: { children: React.ReactNode }) => 
    React.createElement(UIColorProvider, { initialColor, children });

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// Helper to compose all stories from a story file
export const composeStoriesHelper = (stories: any) => {
  return composeStories(stories);
};

// Color variants for testing
export const testColors: Color[] = [
  'blue', 'red', 'green', 'amber', 'gray', 'purple'
];

// Scale variants for testing
export const testScales = ['xs', 'sm', 'md', 'lg'] as const;

// Mock matchMedia for responsive hook testing
export function mockMatchMedia(matches: boolean) {
  window.matchMedia = vi.fn(() => ({
    matches,
    media: '',
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}