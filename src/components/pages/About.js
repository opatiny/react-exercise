import React from 'react';

// the <React.Fragment> tag is a tag that is empty -> it corresponds to nothing in the DOM
export default function About() {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>To Do List app v1.0.0.</p>
      <p>
        Developed following this tutorial:{' '}
        <a className="link" href="https://www.youtube.com/watch?v=sBws8MSXN7A">
          https://www.youtube.com/watch?v=sBws8MSXN7A
        </a>
      </p>
    </React.Fragment>
  );
}
