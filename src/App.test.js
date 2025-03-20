import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


describe('Displays the correct inital load state and data', () => {
 
  test("Displays Pokeverse on Load", () => {
    render(<App/>)
    const battlebttn = screen.getByText("Pokeverse");
    expect(battlebttn)
  })

  test("Player deck empty upon load", () => {
    render(<App/>)
    const deck = screen.getByTestId("deckList");
    expect(deck).toBeEmptyDOMElement()
})

test("Player deck empty upon load", () => {
  render(<App/>)
  const deck = screen.getByTestId("deckList");
  expect(deck).toBeEmptyDOMElement()
})


test('Battle button not displaying on intial mount', () => {
  render(<App/>)
  const bttn = screen.queryByText("Battle!");
  expect(bttn).toBeNull()
})

})
