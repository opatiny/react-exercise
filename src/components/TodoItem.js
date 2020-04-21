import PropTypes from 'prop-types';
import React, { Component } from 'react';

// in-line style:
// <div style={{ backgroundColor: 'red'}}>
//     <p>{this.props.todo.title}</p>
// </div>

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: this.props.todo.completed ? 'lightgreen' : '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    };
  };
  getButtonStyle = () => {
    return {
      background: this.props.todo.completed ? '#f4f4f4' : 'lightgreen',
      cursor: 'pointer',
      border: 'none',
    };
  };
  returnDate = (epoch) => {
    let date = new Date(epoch);
    return `${date.getFullYear()}.${
      date.getMonth() + 1
    }.${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`;
  };
  render() {
    const { id, title, epoch } = this.props.todo; // destructuring
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="button"
            onClick={this.props.toggleCompleted.bind(this, id)}
            value="    "
            style={this.getButtonStyle()}
          />{' '}
          {this.returnDate(epoch)}
          {' : '}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            type="button"
            style={buttonStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

// here we precise the type of todo? wut?
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const buttonStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};
