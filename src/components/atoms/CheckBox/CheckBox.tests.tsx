import React from 'react';
import renderer from 'react-test-renderer';
import {CheckBox} from './index';

describe('Text component tests', () => {
  it('Should render correctly with default props', () => {
    const component = renderer.create(<CheckBox></CheckBox>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
