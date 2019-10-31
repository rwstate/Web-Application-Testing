import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />)
  console.log(wrapper.debug())

});

it('renders "Strike:"', () => {
  const wrapper = rtl.render(<App />)
  const hasStrike = wrapper.queryByText(/Strikes:/i);
  expect(hasStrike).toBeInTheDocument();
})

it('increments on click', () => {
  const { getByTestId, getByText } = rtl.render(<App />);
  rtl.fireEvent.click(getByText("Strike"));
  expect(getByTestId("strike")).toHaveTextContent("1");
});