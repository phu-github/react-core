import React from 'react';
import renderer from 'react-test-renderer';
import {Link} from '.';

describe('Link component tests', () => {
  it('Should render correctly with default props', () => {
    const component = renderer.create(<Link text="Session start" url="http://www.google.com">Test Link</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
