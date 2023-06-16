/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable function-paren-newline */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable quotes */
/* eslint-disable react/no-unused-state */
/* eslint-disable func-call-spacing */
/* eslint-disable function-paren-newline */

import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqId from "uniqid";

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "",
        number: "",
        email: "",
      },
      submitted: false,
      submittedData: null,
      editMode: false,
      id: uniqId(),
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (!this.state.submitted) {
      this.setState((prevState) => ({
        person: {
          ...prevState.person,
          [name]: value,
        },
      }));
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { person } = this.state;
    this.setState({
      submitted: true,
      submittedData: { ...person },
      person: {
        name: "",
        number: "",
        email: "",
      },
    });
  }

  switchEditState = () => {
    const { editMode } = this.state;
    if (!editMode) {
      this.setState({
        editMode: true,
      });
    }

    if (editMode) {
      this.setState({
        editMode: false,
      });
    }
  };

  handleEdit = (e) => {
    const { submittedData, person, editMode } = this.state;
    const { name, value } = e.target;

    if (!editMode) {
      return;
    }
    console.log(person);
    const editedPerson = {
      ...submittedData,
      [name]: value,
    };
    this.setState({
      person: editedPerson,
      submittedData: editedPerson,
    });
    // console.log(name, value);
    console.log(this.state);
  };

  render() {
    const { person, submitted, submittedData, editMode } = this.state;
    let count = 0;
    return (
      <div className="info-con">
        {!submitted && (
          <div className="info-form-div">
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
              <label htmlFor="numberInput">Number</label>
              <input
                onChange={this.handleChange}
                value={person.number}
                name="number"
                id="numberInput"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
        <div className="info-ul-div">
          {submitted && Object.keys(person).length > 0 && (
            <ul className="info-ul">
              {Object.keys(submittedData).map((key) =>
                submittedData[key] ? (
                  <li key={(count += 1)} className="info-li">
                    {editMode ? (
                      <input
                        value={submittedData[key]}
                        onChange={this.handleEdit}
                        name={key}
                      />
                    ) : (
                      submittedData[key]
                    )}
                  </li>
                ) : null
              )}
              <button type="button" onClick={this.switchEditState}>
                Edit
              </button>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Info;
