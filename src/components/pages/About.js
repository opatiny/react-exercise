import React from 'react';

// the <React.Fragment> tag is a tag that is empty -> it corresponds to nothing in the DOM
export default function About() {
  return (
    <React.Fragment>
      <div style={aboutStyle}>
        <h1>About</h1>
        <p>To Do List app</p>
        <p>Version: v1.0.0</p>
        <p>
          GitHub repository:{' '}
          <a className="link" href="https://github.com/opatiny/react-todo-list">
            https://github.com/opatiny/react-todo-list
          </a>
        </p>
        <p>
          Developed following this tutorial:{' '}
          <a
            className="link"
            href="https://www.youtube.com/watch?v=sBws8MSXN7A"
          >
            https://www.youtube.com/watch?v=sBws8MSXN7A
          </a>
        </p>
      </div>
    </React.Fragment>
  );
}

const aboutStyle = {
  padding: '10px',
};
