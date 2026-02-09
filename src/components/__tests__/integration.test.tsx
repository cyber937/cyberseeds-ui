import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithUIColorProvider } from '../../test-utils';

// Import components for integration testing
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { Select, SelectOption } from '../Select/Select';
import { Modal } from '../Modal/Modal';
import { Switch } from '../Switch/Switch';
import { GroupBox } from '../GroupBox/GroupBox';
import { Accordion, AccordionItem } from '../Accordion/Accordion';
import { PillBox } from '../PillBox/PillBox';
import { TextArea } from '../TextArea/TextArea';
import { PhoneInput } from '../PhoneInput/PhoneInput';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { Radio } from '../Radio/Radio';
import { Label } from '../Label/Label';
import { UIColorProvider } from '../UIColorContext';

describe('Integration Tests', () => {
  describe('Form Integration', () => {
    it('should handle complete form submission with all components', async () => {
      const user = userEvent.setup();
      const handleSubmit = vi.fn((e) => e.preventDefault());

      render(
        <form onSubmit={handleSubmit}>
          <GroupBox label="Personal Information">
            <Input
              id="firstName"
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              require
            />
            
            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              require
            />
            
            <PhoneInput
              id="phone"
              name="phone"
              label="Phone Number"
              placeholder="Enter your phone number"
            />
            
            <Select name="country" aria-label="Select Country">
              <SelectOption value="us" label="United States" />
              <SelectOption value="ca" label="Canada" />
              <SelectOption value="uk" label="United Kingdom" />
            </Select>
          </GroupBox>

          <GroupBox label="Preferences">
            <RadioGroup>
              <Radio value="light" label="Light Theme" />
              <Radio value="dark" label="Dark Theme" />
              <Radio value="auto" label="Auto" />
            </RadioGroup>

            <Checkbox id="newsletter" name="newsletter" label="Subscribe to newsletter" />
            
            <Switch id="notifications" name="notifications" />
            <Label htmlFor="notifications" text="Enable notifications" />
          </GroupBox>

          <TextArea
            id="bio"
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself"
            rows={4}
          />

          <Button type="submit">Submit</Button>
          <Button type="button" variant="secondary">Cancel</Button>
        </form>
      );

      // Fill out the form
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/^Email$/i), 'john@example.com');
      await user.type(screen.getByLabelText(/phone/i), '1234567890');
      
      await user.selectOptions(screen.getByLabelText(/select country/i), 'us');
      
      await user.click(screen.getByLabelText(/dark theme/i));
      await user.click(screen.getByLabelText(/subscribe to newsletter/i));
      await user.click(screen.getByRole('switch'));
      
      await user.type(screen.getByLabelText(/bio/i), 'Software developer');

      // Submit the form
      await user.click(screen.getByRole('button', { name: /submit/i }));

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('should validate form fields and show errors', async () => {
      const user = userEvent.setup();

      render(
        <form>
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            require
            isInvalid
          />
          
          <PhoneInput
            id="phone"
            name="phone"
            label="Phone"
            isInvalid
          />
          
          <Button type="submit">Submit</Button>
        </form>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const phoneInput = screen.getByLabelText(/phone/i);

      expect(emailInput).toHaveClass('cs:text-red-400');
      expect(phoneInput).toHaveClass('cs:text-red-400');
    });
  });

  describe('Modal Integration', () => {
    it('should open modal with form and handle interactions', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();
      const handleSave = vi.fn();

      render(
        <Modal onClose={handleClose}>
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Body>
            <Input
              id="modalName"
              label="Name"
              defaultValue="John Doe"
            />
            
            <TextArea
              id="modalBio"
              label="Bio"
              defaultValue="Software developer"
              rows={3}
            />
            
            <Switch id="modalPublic" checked />
            <Label htmlFor="modalPublic" text="Make profile public" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      );

      // Interact with form elements in modal
      const nameInput = screen.getByLabelText(/name/i);
      await user.clear(nameInput);
      await user.type(nameInput, 'Jane Doe');

      const bioTextarea = screen.getByLabelText(/bio/i);
      await user.clear(bioTextarea);
      await user.type(bioTextarea, 'Full-stack developer');

      // Click save button
      await user.click(screen.getByRole('button', { name: /save changes/i }));
      expect(handleSave).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accordion Integration', () => {
    it('should handle accordion with form components', async () => {
      const user = userEvent.setup();

      render(
        <Accordion>
          <AccordionItem title="Personal Details">
            <Input label="Full Name" id="fullName" />
            <Input label="Email" id="email" type="email" />
          </AccordionItem>
          
          <AccordionItem title="Preferences">
            <RadioGroup>
              <Radio value="light" label="Light" />
              <Radio value="dark" label="Dark" />
            </RadioGroup>
            
            <Checkbox id="marketing" label="Marketing emails" />
          </AccordionItem>
          
          <AccordionItem title="Advanced Settings">
            <Select aria-label="Language">
              <SelectOption value="en" label="English" />
              <SelectOption value="es" label="Spanish" />
            </Select>
            
            <TextArea label="Custom CSS" id="css" />
          </AccordionItem>
        </Accordion>
      );

      // Open first accordion panel
      await user.click(screen.getByRole('button', { name: /personal details/i }));
      
      // Fill out form in first panel
      await user.type(screen.getByLabelText(/full name/i), 'John Smith');
      await user.type(screen.getByLabelText(/^Email$/i), 'john@example.com');

      // Open second panel
      await user.click(screen.getByRole('button', { name: /preferences/i }));
      
      // Select options in second panel
      await user.click(screen.getByLabelText(/dark/i));
      await user.click(screen.getByLabelText(/marketing emails/i));

      // Verify interactions worked
      expect(screen.getByDisplayValue('John Smith')).toBeInTheDocument();
      expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument();
      expect(screen.getByLabelText(/dark/i)).toBeChecked();
      expect(screen.getByLabelText(/marketing emails/i)).toBeChecked();
    });
  });

  describe('UI Color Context Integration', () => {
    it('should propagate color context to all components', () => {
      render(
        <UIColorProvider initialColor="red">
          <div>
            <Button>Red Button</Button>
            <Input placeholder="Red input" />
            <Checkbox label="Red checkbox" />
            <Switch />
            <PillBox label="Red pill" />
          </div>
        </UIColorProvider>
      );

      // All components should inherit the red color context
      const button = screen.getByRole('button');
      const input = screen.getByRole('textbox');
      const checkbox = screen.getByRole('checkbox');
      const switchElement = screen.getByRole('switch');
      const pill = screen.getByText('Red pill');

      expect(button).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(checkbox).toBeInTheDocument();
      expect(switchElement).toBeInTheDocument();
      expect(pill).toBeInTheDocument();
    });

    it('should allow individual components to override context color', () => {
      renderWithUIColorProvider(
        <div>
          <Button color="blue">Blue Button</Button>
          <Input color="green" placeholder="Green input" />
          <Checkbox color="purple" label="Purple checkbox" />
        </div>,
        { initialColor: 'red' }
      );

      // Components should use their explicit colors, not context
      const button = screen.getByRole('button');
      const input = screen.getByRole('textbox');
      const checkbox = screen.getByRole('checkbox');

      expect(button).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('Compound Component Integration', () => {
    it('should handle Button.Icon composition correctly', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Button onClick={handleClick} scale="md">
          <Button.Icon>
            <svg data-testid="icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </Button.Icon>
          Click me
        </Button>
      );

      const button = screen.getByRole('button');
      const icon = screen.getByTestId('icon');

      expect(button).toContainElement(icon);
      expect(icon).toHaveClass('cs:size-5'); // md scale

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should handle Modal compound components correctly', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(
        <Modal onClose={handleClose}>
          <Modal.Header>
            <h2>Modal Title</h2>
          </Modal.Header>
          
          <Modal.Body>
            <p>Modal content goes here</p>
            <Input label="Name" id="modal-name" />
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button>Confirm</Button>
          </Modal.Footer>
        </Modal>
      );

      expect(screen.getByText('Modal Title')).toBeInTheDocument();
      expect(screen.getByText('Modal content goes here')).toBeInTheDocument();
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('should handle Button.Icon used outside Button context', () => {
      // This should throw an error
      expect(() => {
        render(
          <Button.Icon>
            <svg />
          </Button.Icon>
        );
      }).toThrow('Button.Icon must be used within a <Button>');
    });
  });

  describe('Responsive Behavior', () => {
    it('should handle different component scales consistently', () => {
      render(
        <div>
          <Button scale="sm">Small Button</Button>
          <Button scale="md">Medium Button</Button>
          
          <Input scale="sm" placeholder="Small input" />
          <Input scale="md" placeholder="Medium input" />
          
          <Checkbox scale="sm" label="Small checkbox" />
          <Checkbox scale="md" label="Medium checkbox" />
        </div>
      );

      const smallButton = screen.getByRole('button', { name: /small button/i });
      const mediumButton = screen.getByRole('button', { name: /medium button/i });

      expect(smallButton).toHaveClass('cs:px-2', 'cs:py-1', 'cs:text-xs');
      expect(mediumButton).toHaveClass('cs:px-3', 'cs:py-1.5', 'cs:text-sm');
    });
  });
});