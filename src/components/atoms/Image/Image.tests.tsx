import React from 'react';
import renderer from 'react-test-renderer';
import {Image} from '.';
import DropdownImg from '../../../assets/images/ph2-logo.svg';

describe('Image component tests', () => {
  it('Should render correctly with default props', () => {
    const component = renderer.create(<Image srcImg={DropdownImg} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
