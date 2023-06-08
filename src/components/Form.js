/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable quotes */
/* eslint-disable react/no-unused-state */

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "",
        number: "",
        email: "",
      },
      info: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { person } = this.state;
    this.setState({
      info: [person],
    });
    console.log(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      person: {
        ...prevState.person,
        [name]: value,
      },
    }));
    console.log(name, value);
  };

  render() {
    const { person } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="nameInput">Name</label>
          <input
            onChange={this.handleChange}
            value={person.name}
            name="name"
            id="nameInput"
          />
          <label htmlFor="emailInput">Email</label>
          <input
            onChange={this.handleChange}
            value={person.email}
            name="email"
            id="emailInput"
          />
          <label>Number</label>
          <input
            onChange={this.handleChange}
            value={person.number}
            name="number"
            id="numberInput"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
