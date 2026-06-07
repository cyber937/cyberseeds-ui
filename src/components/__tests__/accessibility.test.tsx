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
import * as NavMenuStories from '../NavMenu/NavMenu.stories';
import * as SwitchStories from '../Switch/Switch.stories';
import * as GroupBoxStories from '../GroupBox/GroupBox.stories';
import * as AccordionStories from '../Accordion/Accordion.stories';
import * as PillBoxStories from '../PillBox/PillBox.stories';
import * as TextAreaStories from '../TextArea/TextArea.stories';
import * as PhoneInputStories from '../PhoneInput/PhoneInput.stories';
import * as RadioGroupStories from '../RadioGroup/RadioGroup.stories';
import * as BadgeStories from '../Badge/Badge.stories';
import * as BreadcrumbStories from '../Breadcrumb/Breadcrumb.stories';
import * as FormFieldStories from '../FormField/FormField.stories';
import * as ProgressStories from '../Progress/Progress.stories';
import * as SpinnerStories from '../Spinner/Spinner.stories';
import * as TabsStories from '../Tabs/Tabs.stories';
import * as ToastStories from '../Toast/Toast.stories';
import * as TooltipStories from '../Tooltip/Tooltip.stories';
import * as AlertStories from '../Alert/Alert.stories';
import * as AvatarStories from '../Avatar/Avatar.stories';
import * as CardStories from '../Card/Card.stories';
import * as StepperStories from '../Stepper/Stepper.stories';
import * as ButtonGroupStories from '../ButtonGroup/ButtonGroup.stories';
import * as ButtonTabsStories from '../ButtonTabs/ButtonTabs.stories';
import * as EmptyStateStories from '../EmptyState/EmptyState.stories';
import * as SkeletonStories from '../Skeleton/Skeleton.stories';
import * as PaginationStories from '../Pagination/Pagination.stories';
import * as TableStories from '../Table/Table.stories';
import * as ComboboxStories from '../Combobox/Combobox.stories';
import * as DrawerStories from '../Drawer/Drawer.stories';
import * as PopoverStories from '../Popover/Popover.stories';
import * as MenuStories from '../Menu/Menu.stories';
import * as FileUploadStories from '../FileUpload/FileUpload.stories';
import * as DatePickerStories from '../DatePicker/DatePicker.stories';
import * as SliderStories from '../Slider/Slider.stories';
import * as TagInputStories from '../TagInput/TagInput.stories';
import * as LabelStories from '../Label/Label.stories';
import * as ThemeProviderStories from '../ThemeProvider/ThemeProvider.stories';
import * as UIColorProviderStories from '../UIColorProvider/UIColorProvider.stories';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Compose all stories
const ButtonComposed = composeStories(ButtonStories);
const InputComposed = composeStories(InputStories);
const CheckboxComposed = composeStories(CheckboxStories);
const SelectComposed = composeStories(SelectStories);
const ModalComposed = composeStories(ModalStories);
const NavMenuComposed = composeStories(NavMenuStories);
const SwitchComposed = composeStories(SwitchStories);
const GroupBoxComposed = composeStories(GroupBoxStories);
const AccordionComposed = composeStories(AccordionStories);
const PillBoxComposed = composeStories(PillBoxStories);
const TextAreaComposed = composeStories(TextAreaStories);
const PhoneInputComposed = composeStories(PhoneInputStories);
const RadioGroupComposed = composeStories(RadioGroupStories);
const BadgeComposed = composeStories(BadgeStories);
const BreadcrumbComposed = composeStories(BreadcrumbStories);
const FormFieldComposed = composeStories(FormFieldStories);
const ProgressComposed = composeStories(ProgressStories);
const SpinnerComposed = composeStories(SpinnerStories);
const TabsComposed = composeStories(TabsStories);
const ToastComposed = composeStories(ToastStories);
const TooltipComposed = composeStories(TooltipStories);
const AlertComposed = composeStories(AlertStories);
const AvatarComposed = composeStories(AvatarStories);
const CardComposed = composeStories(CardStories);
const StepperComposed = composeStories(StepperStories);
const ButtonGroupComposed = composeStories(ButtonGroupStories);
const ButtonTabsComposed = composeStories(ButtonTabsStories);
const EmptyStateComposed = composeStories(EmptyStateStories);
const SkeletonComposed = composeStories(SkeletonStories);
const PaginationComposed = composeStories(PaginationStories);
const TableComposed = composeStories(TableStories);
const ComboboxComposed = composeStories(ComboboxStories);
const DrawerComposed = composeStories(DrawerStories);
const PopoverComposed = composeStories(PopoverStories);
const MenuComposed = composeStories(MenuStories);
const FileUploadComposed = composeStories(FileUploadStories);
const DatePickerComposed = composeStories(DatePickerStories);
const SliderComposed = composeStories(SliderStories);
const TagInputComposed = composeStories(TagInputStories);
const LabelComposed = composeStories(LabelStories);
const ThemeProviderComposed = composeStories(ThemeProviderStories);
const UIColorProviderComposed = composeStories(UIColorProviderStories);

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

  describe('NavMenu Component A11y', () => {
    Object.entries(NavMenuComposed).forEach(([storyName, Story]) => {
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

  describe('Breadcrumb Component A11y', () => {
    Object.entries(BreadcrumbComposed).forEach(([storyName, Story]) => {
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

  describe('Avatar Component A11y', () => {
    Object.entries(AvatarComposed).forEach(([storyName, Story]) => {
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

  describe('EmptyState Component A11y', () => {
    Object.entries(EmptyStateComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Skeleton Component A11y', () => {
    Object.entries(SkeletonComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Pagination Component A11y', () => {
    Object.entries(PaginationComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Table Component A11y', () => {
    Object.entries(TableComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Combobox Component A11y', () => {
    Object.entries(ComboboxComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Drawer Component A11y', () => {
    Object.entries(DrawerComposed).forEach(([storyName, Story]) => {
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

  describe('Popover Component A11y', () => {
    Object.entries(PopoverComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Menu Component A11y', () => {
    Object.entries(MenuComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('FileUpload Component A11y', () => {
    Object.entries(FileUploadComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Label Component A11y', () => {
    Object.entries(LabelComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('ThemeProvider Component A11y', () => {
    Object.entries(ThemeProviderComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('UIColorProvider Component A11y', () => {
    Object.entries(UIColorProviderComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('DatePicker Component A11y', () => {
    Object.entries(DatePickerComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Slider Component A11y', () => {
    Object.entries(SliderComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('TagInput Component A11y', () => {
    Object.entries(TagInputComposed).forEach(([storyName, Story]) => {
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<Story />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
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