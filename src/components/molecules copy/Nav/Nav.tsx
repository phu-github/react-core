import React from 'react';
import { Link } from 'react-router-dom';
import { NavProps } from './Nav.props';
import './Nav.styles.css';

const Nav = (props: NavProps) => {
  const {
    items = [],
  } = props;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.url}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Nav;