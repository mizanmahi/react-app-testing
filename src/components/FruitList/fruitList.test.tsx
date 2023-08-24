import { render, screen } from "@testing-library/react";
import FruitList from "./FruitList";

const fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];

describe('FruitList()', () => {
    it('should render the list with list items', () => {
        render(<FruitList fruits={fruits}  />)

        screen.logTestingPlaygroundURL()

        const list = screen.getByRole('list');
        const listItems = screen.getAllByRole('listitem')

        expect(list).toBeInTheDocument()
        expect(listItems).toHaveLength(fruits.length)
    })
})