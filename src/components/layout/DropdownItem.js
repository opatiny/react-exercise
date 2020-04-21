import React from 'react';

export default function DropdownItem(props) {
  return (
    <div className="dropdown">
      <button className="dropbtn">Lists</button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}
