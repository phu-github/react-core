import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from '.';

describe('Text component tests', () => {
  it('Should render correctly with default props', () => {
    const component = renderer.create(<Text>Test Text</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
