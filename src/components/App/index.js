"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'App',

  getInitialState: function () {
    return {
      counterName: '',
      counters: [
        'Cats',
        'Dogs'
      ],
      total: 0
    }
  },

  addCounter: function (e) {
    var counters = this.state.counters.slice();
    counters.push(this.state.counterName);
    this.setState({
      counters: counters,
      counterName: ''
    });
    e.preventDefault();
  },

  handleTextChange: function (e) {
    this.setState({counterName: e.target.value});
  },

  render: function () {
    return (
      <div className="App">
        <h1 className="App__header">Counter App</h1>
        <h2>Total: {this.state.total}</h2>

        {this.state.counters.map(function (name) {
          return (
            <Counter name={name}/>
          );
        })}

        <form onSubmit={this.addCounter}>
          <label htmlFor="counterName">New counter</label>
          <input 
            type="text" 
            id="counterName" 
            name="counterName" 
            onChange={this.handleTextChange} 
            value={this.state.counterName} />
          <button type="submit">Add</button>
        </form>
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