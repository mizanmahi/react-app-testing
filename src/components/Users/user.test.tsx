import { render, screen } from "@testing-library/react";
import Users from "./User";

// getByPlaceholderText
// getByText => div, p, span etc. 
// getByLabelText and its selector options
// getByAltText
// getByTitle
// getByDisplayValue
// getByTestId => data-testId

it('should render the component', () => {
    render(<Users />)

    const element = screen.getByRole('textbox', {
        name: 'Name'
    })

    const element2 = screen.getByTestId('paragraph')


    const headingELement = screen.getByRole('heading', { 
        level: 2
    })
    const button = screen.queryByRole('button', { 
        name: 'Submit'
    })

    expect(button).not.toBeInTheDocument()

    expect(element2).toBeInTheDocument()
    expect(element).toBeInTheDocument()
    expect(headingELement).toBeInTheDocument()

})