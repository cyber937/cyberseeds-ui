import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Stepper.stories';
import { Stepper } from './Stepper';
import { testScales, testColors, renderWithUIColorProvider } from '../../test-utils';

const { Default, AllCompleted, ThreeSteps } = composeStories(stories);

const sampleSteps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
];

/** Helper: get the desktop layout container within the stepper */
function getDesktopLayout() {
  return screen.getByTestId('stepper-desktop');
}

/** Helper: get the mobile layout container within the stepper */
function getMobileLayout() {
  return screen.getByTestId('stepper-mobile');
}

describe('Stepper Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story', () => {
      render(<Default />);
      expect(screen.getAllByText('Select Borrower').length).toBeGreaterThan(0);
    });

    it('renders AllCompleted story', () => {
      render(<AllCompleted />);
      expect(screen.getAllByText('Complete').length).toBeGreaterThan(0);
    });

    it('renders ThreeSteps story', () => {
      render(<ThreeSteps />);
      expect(screen.getByText('Input')).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('renders correct number of step labels in desktop layout', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const desktop = getDesktopLayout();
      const labels = desktop.getElementsByTagName('span');
      expect(labels).toHaveLength(3);
      expect(labels[0].textContent).toBe('Step 1');
    });

    it('renders step numbers for pending steps in desktop layout', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const desktop = getDesktopLayout();
      expect(desktop.textContent).toContain('2');
      expect(desktop.textContent).toContain('3');
    });

    it('renders mobile layout with current step label', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const mobile = getMobileLayout();
      const label = mobile.querySelector('p');
      expect(label?.textContent).toBe('Step 2');
    });
  });

  describe('Step States (Desktop)', () => {
    it('active step has cs-stepper-active class', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const desktop = getDesktopLayout();
      const activeCircles = desktop.querySelectorAll('.cs-stepper-active');
      expect(activeCircles).toHaveLength(1);
    });

    it('completed step has cs-stepper-completed class', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      const desktop = getDesktopLayout();
      const completedCircles = desktop.querySelectorAll('.cs-stepper-completed');
      expect(completedCircles).toHaveLength(2);
    });

    it('pending step has gray border class', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const desktop = getDesktopLayout();
      const grayCircles = desktop.getElementsByClassName('cs:border-gray-300');
      expect(grayCircles).toHaveLength(2);
    });

    it('completed steps show checkmark icon instead of number', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      const desktop = getDesktopLayout();
      const svgs = desktop.querySelectorAll('.cs-stepper-completed svg');
      expect(svgs).toHaveLength(2);
    });
  });

  describe('Step States (Mobile)', () => {
    it('active step has cs-stepper-active class', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const mobile = getMobileLayout();
      const activeCircles = mobile.querySelectorAll('.cs-stepper-active');
      expect(activeCircles).toHaveLength(1);
    });

    it('completed step has cs-stepper-completed class', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      const mobile = getMobileLayout();
      const completedCircles = mobile.querySelectorAll('.cs-stepper-completed');
      expect(completedCircles).toHaveLength(2);
    });

    it('shows current step label text below circles', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const mobile = getMobileLayout();
      const label = mobile.querySelector('p');
      expect(label?.textContent).toBe('Step 1');
    });
  });

  describe('Connector Lines', () => {
    it('completed connector has color class', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      const desktop = getDesktopLayout();
      const completedLines = desktop.querySelectorAll('.cs-stepper-line-completed');
      expect(completedLines.length).toBeGreaterThan(0);
    });

    it('pending connector has gray class', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const desktop = getDesktopLayout();
      const grayLines = desktop.getElementsByClassName('cs:bg-gray-300');
      expect(grayLines.length).toBeGreaterThan(0);
    });

    it('no connector after last step (desktop)', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const desktop = getDesktopLayout();
      // 3 steps = 2 connectors (elements with both cs:flex-1 and cs:mx-2)
      const allElements = Array.from(desktop.getElementsByClassName('cs:flex-1'));
      const allLines = allElements.filter(el => el.classList.contains('cs:mx-2'));
      expect(allLines).toHaveLength(2);
    });

    it('mobile layout has no connector lines', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const mobile = getMobileLayout();
      const lines = mobile.getElementsByClassName('cs:mx-1');
      expect(lines).toHaveLength(0);
    });
  });

  describe('Colors', () => {
    it('renders with different colors', () => {
      testColors.forEach(color => {
        const { unmount } = renderWithUIColorProvider(
          <Stepper steps={sampleSteps} currentStep={1} color={color} />,
        );
        expect(screen.getByRole('group')).toBeInTheDocument();
        unmount();
      });
    });

    it('has CSS variables on root element', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} color="red" />);
      const container = screen.getByRole('group');
      expect(container.style.getPropertyValue('--cs-ui-base')).toBeTruthy();
    });
  });

  describe('Scale', () => {
    it('renders with different scales', () => {
      testScales.forEach(scale => {
        const { unmount } = render(
          <Stepper steps={sampleSteps} currentStep={1} scale={scale} />,
        );
        expect(screen.getByRole('group')).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Accessibility', () => {
    it('has descriptive aria-label', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const container = screen.getByRole('group');
      expect(container).toHaveAttribute('aria-label', 'Step 2 / 3');
    });

    it('active step has aria-current="step" in both layouts', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const group = screen.getByRole('group');
      const activeCurrent = group.querySelectorAll('[aria-current="step"]');
      // One in mobile, one in desktop
      expect(activeCurrent).toHaveLength(2);
    });

    it('non-active steps do not have aria-current', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const desktop = getDesktopLayout();
      const grayCircles = desktop.getElementsByClassName('cs:border-gray-300');
      Array.from(grayCircles).forEach(el => {
        expect(el).not.toHaveAttribute('aria-current');
      });
    });
  });

  describe('Edge Cases', () => {
    it('currentStep=0 makes first step active in desktop', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const desktop = getDesktopLayout();
      const activeCircles = desktop.querySelectorAll('.cs-stepper-active');
      expect(activeCircles).toHaveLength(1);
    });

    it('currentStep at last index makes all previous completed in desktop', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      const desktop = getDesktopLayout();
      const completedCircles = desktop.querySelectorAll('.cs-stepper-completed');
      expect(completedCircles).toHaveLength(2);
    });
  });
});
