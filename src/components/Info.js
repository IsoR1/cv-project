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

import React, { useState, useEffect } from "react";
import uniqId from "uniqid";

function Info() {
  const [person, setPerson] = useState({
    name: "",
    number: "",
    email: "",
  });

  useEffect(() => {});

  // this.state = {
  //   person: {
  //     name: "",
  //     number: "",
  //     email: "",
  //   },
  //   submitted: false,
  //   submittedData: null,
  //   editMode: false,
  //   id: uniqId(),
  // };

  function handleChange(e) {
    const { name, value } = e.target;
    if (!state.submitted) {
      setState((prevState) => ({
        person: {
          ...prevState.person,
          [name]: value,
        },
      }));
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    setState({
      submitted: true,
      submittedData: { ...person },
      person: {
        name: "",
        number: "",
        email: "",
      },
    });
  }

  function switchEditState() {
    if (!editMode) {
      setState({
        editMode: true,
      });
    }

    if (editMode) {
      setState({
        editMode: false,
      });
    }
  }

  function handleEdit(e) {
    const { name, value } = e.target;

    if (!editMode) {
      return;
    }
    console.log(person);
    const editedPerson = {
      ...submittedData,
      [name]: value,
    };
    setState({
      person: editedPerson,
      submittedData: editedPerson,
    });
    // console.log(name, value);
    console.log(state);
  }

  // const { person, submitted, submittedData, editMode } = this.state;
  let count = 0;
  return (
    <div className="info-con">
      {!submitted && (
        <div className="info-form-div">
          <form onSubmit={onSubmit}>
            <label htmlFor="nameInput">Name</label>
            <input
              onChange={handleChange}
              value={person.name}
              name="name"
              id="nameInput"
            />
            <label htmlFor="emailInput">Email</label>
            <input
              onChange={handleChange}
              value={person.email}
              name="email"
              id="emailInput"
            />
            <label htmlFor="numberInput">Number</label>
            <input
              onChange={handleChange}
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
                      onChange={handleEdit}
                      name={key}
                    />
                  ) : (
                    submittedData[key]
                  )}
                </li>
              ) : null
            )}
            <button type="button" onClick={switchEditState}>
              Edit
            </button>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Info;
