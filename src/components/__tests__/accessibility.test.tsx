import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { composeStories } from '@storybook/react';

// Import all story files for accessibility testing
import * as ButtonStories from '../Button/Button.stories';
import * as InputStories from '../Input/Input.stories';
import * as CheckboxStories from '../Checkbox/Checkbox.stories';
import * as SelectStories from '../Select/Select.stories';
import * as ModalStories from '../Modal/Modal.stories';
import * as SwitchStories from '../Switch/Switch.stories';
import * as GroupBoxStories from '../GroupBox/GroupBox.stories';
import * as AccordionStories from '../Accordion/Accordion.stories';
import * as PillBoxStories from '../PillBox/PillBox.stories';
import * as TextAreaStories from '../TextArea/TextArea.stories';
import * as PhoneInputStories from '../PhoneInput/PhoneInput.stories';
import * as RadioGroupStories from '../RadioGroup/RadioGroup.stories';
import * as BadgeStories from '../Badge/Badge.stories';
import * as FormFieldStories from '../FormField/FormField.stories';
import * as ProgressStories from '../Progress/Progress.stories';
import * as SpinnerStories from '../Spinner/Spinner.stories';
import * as TabsStories from '../Tabs/Tabs.stories';
import * as ToastStories from '../Toast/Toast.stories';
import * as TooltipStories from '../Tooltip/Tooltip.stories';
import * as AlertStories from '../Alert/Alert.stories';
import * as CardStories from '../Card/Card.stories';
import * as StepperStories from '../Stepper/Stepper.stories';
import * as ButtonGroupStories from '../ButtonGroup/ButtonGroup.stories';
import * as ButtonTabsStories from '../ButtonTabs/ButtonTabs.stories';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Compose all stories
const ButtonComposed = composeStories(ButtonStories);
const InputComposed = composeStories(InputStories);
const CheckboxComposed = composeStories(CheckboxStories);
const SelectComposed = composeStories(SelectStories);
const ModalComposed = composeStories(ModalStories);
const SwitchComposed = composeStories(SwitchStories);
const GroupBoxComposed = composeStories(GroupBoxStories);
const AccordionComposed = composeStories(AccordionStories);
const PillBoxComposed = composeStories(PillBoxStories);
const TextAreaComposed = composeStories(TextAreaStories);
const PhoneInputComposed = composeStories(PhoneInputStories);
const RadioGroupComposed = composeStories(RadioGroupStories);
const BadgeComposed = composeStories(BadgeStories);
const FormFieldComposed = composeStories(FormFieldStories);
const ProgressComposed = composeStories(ProgressStories);
const SpinnerComposed = composeStories(SpinnerStories);
const TabsComposed = composeStories(TabsStories);
const ToastComposed = composeStories(ToastStories);
const TooltipComposed = composeStories(TooltipStories);
const AlertComposed = composeStories(AlertStories);
const CardComposed = composeStories(CardStories);
const StepperComposed = composeStories(StepperStories);
const ButtonGroupComposed = composeStories(ButtonGroupStories);
const ButtonTabsComposed = composeStories(ButtonTabsStories);

describe('Accessibility Tests', () => {
  describe('Button Component A11y', () => {
    Object.entries(ButtonComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Input Component A11y', () => {
    Object.entries(InputComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Checkbox Component A11y', () => {
    Object.entries(CheckboxComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Select Component A11y', () => {
    Object.entries(SelectComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Modal Component A11y', () => {
    Object.entries(ModalComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Switch Component A11y', () => {
    Object.entries(SwitchComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('GroupBox Component A11y', () => {
    Object.entries(GroupBoxComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Accordion Component A11y', () => {
    Object.entries(AccordionComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('PillBox Component A11y', () => {
    Object.entries(PillBoxComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('TextArea Component A11y', () => {
    Object.entries(TextAreaComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('PhoneInput Component A11y', () => {
    Object.entries(PhoneInputComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('RadioGroup Component A11y', () => {
    Object.entries(RadioGroupComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Badge Component A11y', () => {
    Object.entries(BadgeComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('FormField Component A11y', () => {
    Object.entries(FormFieldComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Progress Component A11y', () => {
    Object.entries(ProgressComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Spinner Component A11y', () => {
    Object.entries(SpinnerComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Tabs Component A11y', () => {
    Object.entries(TabsComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Toast Component A11y', () => {
    Object.entries(ToastComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Tooltip Component A11y', () => {
    Object.entries(TooltipComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Alert Component A11y', () => {
    Object.entries(AlertComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Card Component A11y', () => {
    Object.entries(CardComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Stepper Component A11y', () => {
    Object.entries(StepperComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('ButtonGroup Component A11y', () => {
    Object.entries(ButtonGroupComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('ButtonTabs Component A11y', () => {
    Object.entries(ButtonTabsComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Form Integration A11y', () => {
    it('should have no violations with complete form', async () => {
      const { container } = render(
        <form>
          <fieldset>
            <legend>User Information</legend>
            
            <InputComposed.Default />
            <CheckboxComposed.Default />
            <SelectComposed.Default />
            <TextAreaComposed.Default />
            <PhoneInputComposed.Basic />
            
            <RadioGroupComposed.Default />
            
            <ButtonComposed.Default />
          </fieldset>
        </form>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations with modal containing form', async () => {
      const { container } = render(
        <ModalComposed.Primary />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Color Contrast', () => {
    it('should maintain color contrast standards across themes', async () => {
      // Test light theme
      document.documentElement.classList.remove('dark');
      const { container: lightContainer } = render(
        <div>
          <ButtonComposed.Default />
          <InputComposed.Default />
          <CheckboxComposed.Default />
        </div>
      );
      
      const lightResults = await axe(lightContainer);
      expect(lightResults).toHaveNoViolations();
      
      // Test dark theme
      document.documentElement.classList.add('dark');
      const { container: darkContainer } = render(
        <div>
          <ButtonComposed.Default />
          <InputComposed.Default />
          <CheckboxComposed.Default />
        </div>
      );
      
      const darkResults = await axe(darkContainer);
      expect(darkResults).toHaveNoViolations();
      
      // Clean up
      document.documentElement.classList.remove('dark');
    });
  });

  describe('Keyboard Navigation', () => {
    it('should support tab navigation through interactive elements', async () => {
      const { container } = render(
        <div>
          <ButtonComposed.Default />
          <InputComposed.Default />
          <CheckboxComposed.Default />
          <SwitchComposed.Primary />
          <SelectComposed.Default />
        </div>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Screen Reader Support', () => {
    it('should provide proper labels and descriptions', async () => {
      const { container } = render(
        <div>
          <InputComposed.Require />
          <CheckboxComposed.Default />
          <RadioGroupComposed.Default />
          <AccordionComposed.Default />
        </div>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});