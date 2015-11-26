"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'App',

  getInitialState: function () {
    return {
      total: 0
    }
  },

  render: function () {
    return (
      <div className="App">
        <h1 className="App__header">Counter App</h1>
        <h2>Total: {this.state.total}</h2>

        <Counter name="Cats"/>
        <Counter name="Dogs"/>
      </div>
    );
  },
});


var Counter = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },

  decrement: function () {
    this.setState({count: this.state.count - 1});
  },

  increment: function () {
    this.setState({count: this.state.count + 1});
  },

  render: function () {
    return (
      <div className="counter">
        {this.props.name}: {this.state.count}&nbsp;
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
});