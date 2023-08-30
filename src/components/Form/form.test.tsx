import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import FormComponent from './Form';
import { vi } from 'vitest';

describe('FromComponent()', () => {
   it('submit the form correctly with user input', async () => {
      user.setup();

      const submitFn = vi.fn();

      render(<FormComponent onSubmit={submitFn} />);

      const text = 'hello world';

      const inputEl = screen.getByRole('textbox');
      await user.type(inputEl, text);

      const headingEl = screen.getByRole('heading', {
         level: 2,
      });

      const submitBtn = screen.getByRole('button', {
         name: 'Submit',
      });

      await user.click(submitBtn);

      expect(headingEl).toHaveTextContent(text);
      // test if the submitFn was called
      expect(submitFn).toHaveBeenCalledWith('sdfsdf');
   });
});
