import React from 'react';
import renderer from 'react-test-renderer';
import {IconStatus} from '.';

describe('Text component tests', () => {
  it('Should render correctly with default props', () => {
    const component = renderer.create(<IconStatus>Test Text</IconStatus>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
