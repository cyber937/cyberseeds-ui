# Testing Guide for cyberseeds-ui

This document provides comprehensive information about testing the cyberseeds-ui component library.

## Testing Stack

- **Testing Framework**: [Vitest](https://vitest.dev/) - Fast unit test runner
- **Testing Utilities**: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete testing utilities
- **Accessibility Testing**: [jest-axe](https://github.com/nickcolley/jest-axe) - Accessibility testing with axe-core
- **User Interactions**: [@testing-library/user-event](https://testing-library.com/docs/user-event/intro/) - Fire events in a way that resembles user interactions
- **Component Testing**: [Storybook Test Runner](https://storybook.js.org/docs/writing-tests/test-runner) - Test all your stories

## Test Scripts

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with coverage report
npm run test:coverage

# Run tests with UI interface
npm run test:ui

# Run Storybook-based tests
npm run test:storybook
```

## Test Structure

### Unit Tests
Each component has its own test file following the pattern `ComponentName.test.tsx`:

```
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.stories.tsx
│   └── Button.test.tsx
├── Input/
│   ├── Input.tsx
│   ├── Input.stories.tsx
│   └── Input.test.tsx
```

### Integration Tests
Located in `src/components/__tests__/`:
- `integration.test.tsx` - Tests component interactions
- `accessibility.test.tsx` - Comprehensive a11y testing

### Test Utilities
- `src/test-utils.ts` - Custom render functions and utilities
- `src/test-setup.ts` - Global test configuration

## Writing Tests

### Basic Component Test

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Testing with UI Color Context

```typescript
import { renderWithUIColorProvider } from '../../test-utils';

it('renders with color context', () => {
  renderWithUIColorProvider(
    <Button>Themed Button</Button>,
    { initialColor: 'red' }
  );
  
  expect(screen.getByRole('button')).toBeInTheDocument();
});
```

### Accessibility Testing

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should have no accessibility violations', async () => {
  const { container } = render(<Button>Accessible Button</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### User Event Testing

```typescript
import userEvent from '@testing-library/user-event';

it('handles user interactions', async () => {
  const user = userEvent.setup();
  render(<Input />);
  
  const input = screen.getByRole('textbox');
  await user.type(input, 'Hello World');
  
  expect(input).toHaveValue('Hello World');
});
```

## Testing Best Practices

### 1. Test Behavior, Not Implementation
Focus on what the user experiences:

```typescript
// ✅ Good - tests user behavior
it('shows error message when validation fails', () => {
  render(<Input isInvalid />);
  expect(screen.getByRole('textbox')).toHaveClass('cs:text-red-400');
});

// ❌ Avoid - tests implementation details
it('sets isInvalid state to true', () => {
  // Testing internal state
});
```

### 2. Use Accessible Queries
Prefer queries that users would use:

```typescript
// ✅ Good - accessible queries
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText(/email address/i)
screen.getByText(/welcome message/i)

// ❌ Avoid - implementation details
screen.getByClassName('submit-button')
screen.getByTestId('email-input')
```

### 3. Test All Component Variants
Use the test utilities to test different props:

```typescript
import { testColors, testScales } from '../../test-utils';

it('renders with different colors', () => {
  testColors.forEach(color => {
    const { unmount } = render(<Button color={color}>Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    unmount();
  });
});
```

### 4. Test Error States
Ensure components handle errors gracefully:

```typescript
it('throws error when used incorrectly', () => {
  expect(() => {
    render(<Button.Icon><svg /></Button.Icon>);
  }).toThrow('Button.Icon must be used within a <Button>');
});
```

## Storybook Integration

Our tests leverage Storybook stories for consistent testing:

```typescript
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

const { Default, Secondary, WithIcon } = composeStories(stories);

describe('Storybook Stories', () => {
  it('renders Default story', () => {
    render(<Default />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

## Coverage Goals

We aim for:
- **Statements**: 90%+
- **Branches**: 85%+
- **Functions**: 90%+
- **Lines**: 90%+

## Continuous Integration

Tests run automatically on:
- Pull requests
- Main branch pushes
- Storybook deployments

## Debugging Tests

### Using Vitest UI
```bash
npm run test:ui
```

### Debug Individual Tests
```bash
npx vitest run Button.test.tsx
```

### Debug with Browser
```bash
npx vitest --inspect-brk
```

## Mock Strategies

### Form Submissions
```typescript
const handleSubmit = vi.fn((e) => e.preventDefault());
```

### User Interactions
```typescript
const handleClick = vi.fn();
const handleChange = vi.fn();
```

### Browser APIs
Global mocks are set up in `test-setup.ts` for:
- `ResizeObserver`
- `IntersectionObserver`
- `matchMedia`
- `requestAnimationFrame`

## Testing Checklist

For each component, ensure tests cover:

- [ ] **Rendering**: Component renders without errors
- [ ] **Props**: All props work as expected
- [ ] **Events**: User interactions trigger correct callbacks
- [ ] **States**: All visual states (disabled, invalid, loading, etc.)
- [ ] **Accessibility**: No axe violations, proper ARIA attributes
- [ ] **Keyboard Navigation**: Tab order and keyboard interactions
- [ ] **Responsive**: Different scales and responsive behavior
- [ ] **Context Integration**: Works with UIColorProvider
- [ ] **Error Handling**: Graceful error handling
- [ ] **Edge Cases**: Empty states, long content, special characters

## Troubleshooting

### Common Issues

1. **Component not found**: Check if using correct queries
2. **Async operations**: Use `waitFor` for async updates
3. **Context missing**: Use `renderWithUIColorProvider` for themed components
4. **Events not firing**: Ensure using `fireEvent` or `userEvent` correctly
5. **Accessibility violations**: Check for missing labels or improper ARIA usage

### Getting Help

- Check existing tests for patterns
- Review [Testing Library docs](https://testing-library.com/)
- Use Vitest UI for debugging
- Check browser console for additional error details