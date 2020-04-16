import React, { Component } from 'react';
import PropTypes from 'prop-types';

// in-line style:
// <div style={{ backgroundColor: 'red'}}>
//     <p>{this.props.todo.title}</p>
// </div>


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                
                <p>
                    <input type="checkbox" onChange={this.props.markComplete} /> {'    '}
                    {this.props.todo.title}
                </p>
            </div>
        )
    }
}

// here we precise the type of todo? wut?
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}


export default TodoItem
