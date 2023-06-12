/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import EducationResults from "./EducationResults";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schools: [],
      newSchool: {
        schoolName: "",
        dateStarted: "",
        dateEnded: "",
        subject: "",
        degree: "",
      },
      submittedData: [],
      formSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newSchool: {
        ...prevState.newSchool,
        [name]: value,
      },
    }));
  }

  onSubmit(e) {
    e.preventDefault();

    const { newSchool } = this.state;

    this.setState((prevState) => ({
      schools: [...prevState.schools, newSchool],
      submittedData: [...prevState.schools, newSchool],
      formSubmitted: true,
      newSchool: {
        schoolName: "",
        dateStarted: "",
        dateEnded: "",
        subject: "",
        degree: "",
      },
    }));
    // console.log(this.state);
  }

  render() {
    const { schools, formSubmitted, schoolsKey, newSchool, submittedData } =
      this.state;
    const showResults = schools.length > 0;
    return (
      <div className="education-form-div">
        <form className="education-form" onSubmit={this.onSubmit}>
          <label htmlFor="nameInput">SchoolName</label>
          <input
            onChange={this.handleChange}
            value={newSchool.schoolName}
            name="schoolName"
            id="nameInput"
          />

          <label htmlFor="dateStartedInput">Date Started</label>
          <input
            type="date"
            onChange={this.handleChange}
            name="dateStarted"
            value={newSchool.dateStarted}
            id="dateStartedInput"
          />

          <label htmlFor="dateEnded">Date Ended</label>
          <input
            type="date"
            onChange={this.handleChange}
            name="dateEnded"
            value={newSchool.dateEnded}
            id="dateEnded"
          />

          <label htmlFor="subjectInput">Subject</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="subject"
            value={newSchool.subject}
            id="subjectInput"
          />

          <label htmlFor="degreeInput">Degree</label>
          <input
            type="text"
            name="degree"
            onChange={this.handleChange}
            value={newSchool.degree}
            id="degreeInput"
          />

          <button type="submit">Submit</button>
        </form>
        {formSubmitted &&
          submittedData.map((school) => (
            <ul>
              {Object.keys(school).map((key) =>
                // <li>{school[key]}</li>
                school[key] ? <li>{school[key]}</li> : null
              )}
            </ul>
          ))}
      </div>
    );
  }
}

export default Education;

// Object.keys(z).map((key) => {
//   return z[key]
// })

// {schools.map((school) => (
//   <ul>
//     {Object.keys(school).map((key) => (
//       <li>{school[key]}</li>
//     ))}
//   </ul>
// ))}

// {schools.map((school) => {
//   <ul>
//     {Object.keys(school).map((key) => (
//       <li>{school[key]}</li>
//     ))}
//   </ul>;
// })}
