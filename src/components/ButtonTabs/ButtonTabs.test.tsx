import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './ButtonTabs.stories';
import { ButtonTabs } from './ButtonTabs';
import { testScales, testColors, renderWithUIColorProvider } from '../../test-utils';

const { Default, Scales } = composeStories(stories);

function SimpleTabs({ value, onChange }: { value?: string; onChange?: (v: string) => void }) {
  return (
    <ButtonTabs value={value} defaultValue="tab1" onChange={onChange}>
      <ButtonTabs.List>
        <ButtonTabs.Trigger value="tab1">Tab 1</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="tab2">Tab 2</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="tab3">Tab 3</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="tab1">Content 1</ButtonTabs.Content>
      <ButtonTabs.Content value="tab2">Content 2</ButtonTabs.Content>
      <ButtonTabs.Content value="tab3">Content 3</ButtonTabs.Content>
    </ButtonTabs>
  );
}

describe('ButtonTabs Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story', () => {
      render(<Default />);
      expect(screen.getByText('Lending')).toBeInTheDocument();
    });

    it('renders Scales story', () => {
      render(<Scales />);
      expect(screen.getAllByText('Tab A').length).toBe(4);
    });
  });

  describe('Controlled Mode', () => {
    it('shows correct content for active tab', () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });

    it('calls onChange when tab is clicked', () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab1" onChange={onChange} />);
      fireEvent.click(screen.getByText('Tab 2'));
      expect(onChange).toHaveBeenCalledWith('tab2');
    });
  });

  describe('Uncontrolled Mode', () => {
    it('switches content on click', () => {
      render(<SimpleTabs />);
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      fireEvent.click(screen.getByText('Tab 2'));
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    it('ArrowRight moves to next tab', () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab1" onChange={onChange} />);
      const tab1 = screen.getByText('Tab 1');
      tab1.focus();
      fireEvent.keyDown(tab1, { key: 'ArrowRight' });
      expect(onChange).toHaveBeenCalledWith('tab2');
    });

    it('ArrowLeft wraps around to last tab', () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab1" onChange={onChange} />);
      const tab1 = screen.getByText('Tab 1');
      tab1.focus();
      fireEvent.keyDown(tab1, { key: 'ArrowLeft' });
      expect(onChange).toHaveBeenCalledWith('tab3');
    });

    it('Home moves to first tab', () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab3" onChange={onChange} />);
      const tab3 = screen.getByText('Tab 3');
      tab3.focus();
      fireEvent.keyDown(tab3, { key: 'Home' });
      expect(onChange).toHaveBeenCalledWith('tab1');
    });

    it('End moves to last tab', () => {
      const onChange = vi.fn();
      render(<SimpleTabs value="tab1" onChange={onChange} />);
      const tab1 = screen.getByText('Tab 1');
      tab1.focus();
      fireEvent.keyDown(tab1, { key: 'End' });
      expect(onChange).toHaveBeenCalledWith('tab3');
    });
  });

  describe('Disabled', () => {
    it('disabled trigger cannot be clicked', () => {
      const onChange = vi.fn();
      render(
        <ButtonTabs value="a" onChange={onChange}>
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="a">A</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b" disabled>B</ButtonTabs.Trigger>
          </ButtonTabs.List>
        </ButtonTabs>
      );
      fireEvent.click(screen.getByText('B'));
      expect(onChange).not.toHaveBeenCalled();
    });

    it('disabled trigger has opacity class', () => {
      render(
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="a">A</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b" disabled>B</ButtonTabs.Trigger>
          </ButtonTabs.List>
        </ButtonTabs>
      );
      expect(screen.getByText('B').className).toContain('cs:opacity-50');
    });
  });

  describe('Accessibility', () => {
    it('list has role="tablist"', () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('triggers have role="tab"', () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getAllByRole('tab')).toHaveLength(3);
    });

    it('content has role="tabpanel"', () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByRole('tabpanel')).toBeInTheDocument();
    });

    it('active tab has aria-selected="true"', () => {
      render(<SimpleTabs value="tab1" />);
      expect(screen.getByText('Tab 1')).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByText('Tab 2')).toHaveAttribute('aria-selected', 'false');
    });

    it('tab has aria-controls pointing to panel', () => {
      render(<SimpleTabs value="tab1" />);
      const tab = screen.getByText('Tab 1');
      const panel = screen.getByRole('tabpanel');
      expect(tab.getAttribute('aria-controls')).toBe(panel.id);
    });

    it('panel has aria-labelledby pointing to tab', () => {
      render(<SimpleTabs value="tab1" />);
      const tab = screen.getByText('Tab 1');
      const panel = screen.getByRole('tabpanel');
      expect(panel.getAttribute('aria-labelledby')).toBe(tab.id);
    });
  });

  describe('Colors', () => {
    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <ButtonTabs defaultValue="a" color={color}>
            <ButtonTabs.List>
              <ButtonTabs.Trigger value="a">A</ButtonTabs.Trigger>
            </ButtonTabs.List>
          </ButtonTabs>,
        );
        expect(screen.getByText('A')).toBeInTheDocument();
        unmount();
      });
    });

    it('active trigger has CSS variables', () => {
      render(
        <ButtonTabs defaultValue="a" color="red">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="a">A</ButtonTabs.Trigger>
          </ButtonTabs.List>
        </ButtonTabs>
      );
      const trigger = screen.getByText('A');
      expect(trigger.style.getPropertyValue('--cs-ui-base')).toBeTruthy();
    });
  });

  describe('Scale', () => {
    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <ButtonTabs defaultValue="a" scale={scale}>
            <ButtonTabs.List>
              <ButtonTabs.Trigger value="a">A</ButtonTabs.Trigger>
            </ButtonTabs.List>
          </ButtonTabs>,
        );
        expect(screen.getByText('A')).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Context Error', () => {
    it('throws when Trigger is used outside ButtonTabs', () => {
      expect(() => {
        render(<ButtonTabs.Trigger value="a">A</ButtonTabs.Trigger>);
      }).toThrow('ButtonTabs sub-components must be used within a ButtonTabs component');
    });

    it('throws when Content is used outside ButtonTabs', () => {
      expect(() => {
        render(<ButtonTabs.Content value="a">A</ButtonTabs.Content>);
      }).toThrow('ButtonTabs sub-components must be used within a ButtonTabs component');
    });
  });
});
