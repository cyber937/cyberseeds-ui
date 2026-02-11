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

describe('Stepper Component', () => {
  describe('Storybook Stories', () => {
    it('renders Default story', () => {
      render(<Default />);
      expect(screen.getByText('借り手選択')).toBeInTheDocument();
    });

    it('renders AllCompleted story', () => {
      render(<AllCompleted />);
      expect(screen.getByText('完了')).toBeInTheDocument();
    });

    it('renders ThreeSteps story', () => {
      render(<ThreeSteps />);
      expect(screen.getByText('入力')).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('renders correct number of step labels', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      expect(screen.getByText('Step 1')).toBeInTheDocument();
      expect(screen.getByText('Step 2')).toBeInTheDocument();
      expect(screen.getByText('Step 3')).toBeInTheDocument();
    });

    it('renders step numbers for pending steps', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });

  describe('Step States', () => {
    it('active step has cs-stepper-active class', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const step2Circle = screen.getByText('2').closest('div');
      expect(step2Circle?.className).toContain('cs-stepper-active');
    });

    it('completed step has cs-stepper-completed class', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      // Completed steps show checkmark SVG, not number
      const container = screen.getByRole('group');
      const completedCircles = container.querySelectorAll('.cs-stepper-completed');
      expect(completedCircles).toHaveLength(2);
    });

    it('pending step has gray border class', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const step3Circle = screen.getByText('3').closest('div');
      expect(step3Circle?.className).toContain('cs:border-gray-300');
    });

    it('completed steps show checkmark icon instead of number', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      const container = screen.getByRole('group');
      const svgs = container.querySelectorAll('.cs-stepper-completed svg');
      expect(svgs).toHaveLength(2);
    });
  });

  describe('Connector Lines', () => {
    it('completed connector has color class', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      const container = screen.getByRole('group');
      const completedLines = container.querySelectorAll('.cs-stepper-line-completed');
      expect(completedLines.length).toBeGreaterThan(0);
    });

    it('pending connector has gray class', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const container = screen.getByRole('group');
      const grayLines = container.querySelectorAll('.cs\\:bg-gray-300');
      expect(grayLines.length).toBeGreaterThan(0);
    });

    it('no connector after last step', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const container = screen.getByRole('group');
      // 3 steps = 2 connectors
      const allLines = container.querySelectorAll('.cs\\:flex-1.cs\\:mx-2');
      expect(allLines).toHaveLength(2);
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
      expect(container).toHaveAttribute('aria-label', 'ステップ 2 / 3');
    });

    it('active step has aria-current="step"', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const activeCircle = screen.getByText('2').closest('div');
      expect(activeCircle).toHaveAttribute('aria-current', 'step');
    });

    it('non-active steps do not have aria-current', () => {
      render(<Stepper steps={sampleSteps} currentStep={1} />);
      const step3 = screen.getByText('3').closest('div');
      expect(step3).not.toHaveAttribute('aria-current');
    });
  });

  describe('Edge Cases', () => {
    it('currentStep=0 makes first step active', () => {
      render(<Stepper steps={sampleSteps} currentStep={0} />);
      const step1Circle = screen.getByText('1').closest('div');
      expect(step1Circle?.className).toContain('cs-stepper-active');
    });

    it('currentStep at last index makes all previous completed', () => {
      render(<Stepper steps={sampleSteps} currentStep={2} />);
      const container = screen.getByRole('group');
      const completedCircles = container.querySelectorAll('.cs-stepper-completed');
      expect(completedCircles).toHaveLength(2);
    });
  });
});
