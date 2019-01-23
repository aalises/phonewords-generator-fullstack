import * as React from 'react';
import { shallow } from 'enzyme';
import PhoneKeyboard from '../src/components/PhoneKeyboard';
import data from "./data";

describe("Phoneword Keyboard Phone Test Suite", () => {

  it('Renders the phone keyboard correctly', () => {
    const phone =  shallow(<PhoneKeyboard handleClick={_ => _} />);
    expect(phone).toMatchSnapshot();
  });
});