// function-based component! (vs class-based components)

import React from 'react';
import { Link } from 'react-router-dom';

import ListMenu from './Dropdown';

export default function Header() {
  return (
    <header style={headerStyle}>
      <ListMenu style={{ padding: '5px' }} />
      <div style={{ flex: '10', padding: '5px' }}>
        <h1>To Do Lists</h1>
        <Link style={linkStyle} to="/">
          Home
        </Link>{' '}
        |{' '}
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </div>
    </header>
  );
}

const headerStyle = {
  background: '#334',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  display: 'flex',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};
