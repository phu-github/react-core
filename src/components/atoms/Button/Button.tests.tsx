import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from './index';

describe('Text component tests', () => {
  it('Should render correctly with default props', () => {
    const component = renderer.create(<Button variant="btn-style"></Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
