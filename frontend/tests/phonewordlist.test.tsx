import * as React from 'react';
import { shallow } from 'enzyme';
import PhonewordList from '../src/components/PhonewordList';
import data from "./data";

describe("Phoneword List Test Suite", () => {

  const createListRenderer = (props) => {
    return shallow(<PhonewordList {...props} />);
  }
    
  const checkSnapshot = (data) => {
    const list = createListRenderer(data);
    expect(list).toMatchSnapshot();
  }

  it('Renders the Initial state correctly', () => {
    checkSnapshot(data.initial);
  });
  
  it('Renders the Alert message when no words correctly', () => {
    checkSnapshot(data.alert);
  });
  
  it('Displays a spinner when submitting', () => {
    checkSnapshot(data.submitting);
  });
  
  it('Displays a list of words from a specific number as expected', () => {
    checkSnapshot(data.number);
  });
});