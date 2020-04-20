import React, { Component } from 'react';

export default class AddTodo extends Component {
  // this is a component state
  state = {
    title: '',
  };

  onSubmit = (event) => {
    event.preventDefault(); // ?
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  handleNewEntry = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="add To Do ..."
          value={this.state.title}
          onChange={this.handleNewEntry}
        />
        <input
          type="submit"
          value="Submit"
          className="button"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
