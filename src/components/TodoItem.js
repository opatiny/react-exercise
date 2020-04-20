import PropTypes from 'prop-types';
import React, { Component } from 'react';

// in-line style:
// <div style={{ backgroundColor: 'red'}}>
//     <p>{this.props.todo.title}</p>
// </div>

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };
  render() {
    const { id, title } = this.props.todo; // destructuring
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
        </p>
      </div>
    );
  }
}

// here we precise the type of todo? wut?
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
