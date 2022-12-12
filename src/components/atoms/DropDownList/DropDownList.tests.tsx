import React from 'react';
import renderer from 'react-test-renderer';
import {DropDownList} from './index';

describe('Text component tests', () => {
  it('Should render correctly with default props', () => {
    const component = renderer.create(<DropDownList></DropDownList>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
