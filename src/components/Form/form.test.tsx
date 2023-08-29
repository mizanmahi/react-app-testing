import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import FormComponent from './Form';

describe('FromComponent()', () => {
   it('submit the form correctly with user input', async () => {
      user.setup();
      render(
         <FormComponent
            onSubmit={(data) => {
               console.log(data);
            }}
         />
      );

      const text = 'hello world';

      const inputEl = screen.getByRole('textbox');
      await user.type(inputEl, text);

      const headingEl = screen.getByRole('heading', {
         level: 2,
      });

      expect(headingEl).toHaveTextContent(text);
   });
});
