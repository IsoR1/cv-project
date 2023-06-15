/* eslint-disable no-nested-ternary */
/* eslint-disable react/sort-comp */
/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import uniqid from "uniqid";

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
      id: 0,
      submittedData: [],
      formSubmitted: false,
      editMode: false,
      editedSchoolIndex: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.switchEditState = this.switchEditState.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { editMode } = this.state;
    this.setState((prevState) => ({
      newSchool: {
        ...prevState.newSchool,
        [name]: value,
      },
    }));
  }

  switchEditState() {
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
  }

  handleEdit(e) {
    e.preventDefault();
    const { editMode, newSchool, schools, id } = this.state;
    const { name, value } = e.target;
    if (!editMode) {
      return;
    }
    const updatedSchools = schools.map((school) => {
      if (school.id === e.target.dataset.id) {
        return {
          ...school,
          [name]: value,
        };
      }
      return school;
    });
    this.setState({
      schools: updatedSchools,
      submittedData: updatedSchools,
    });
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();

    const { newSchool, id } = this.state;

    const schoolId = uniqid();

    const schoolWithId = {
      ...newSchool,
      id: schoolId,
    };

    this.setState((prevState) => ({
      schools: [...prevState.schools, schoolWithId],
      submittedData: [...prevState.schools, schoolWithId],
      formSubmitted: true,
      newSchool: {
        schoolName: "",
        dateStarted: "",
        dateEnded: "",
        subject: "",
        degree: "",
      },
    }));
  }

  render() {
    const {
      schools,
      formSubmitted,
      schoolsKey,
      newSchool,
      submittedData,
      editMode,
    } = this.state;
    const showResults = schools.length > 0;
    const count = 0;
    return (
      <div className="edu-con">
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
        </div>
        <div className="edu-ul-div">
          {formSubmitted &&
            submittedData.map((school) => (
              <ul key={count + 1} className="edu-results-ul">
                {Object.keys(school).map((key) =>
                  key !== "id" && school[key] ? (
                    <li key={key} className="edu-results-li">
                      {" "}
                      {editMode ? (
                        key === "dateStarted" || key === "dateEnded" ? (
                          <input
                            value={school[key]}
                            name={key}
                            data-id={school.id}
                            onChange={this.handleEdit}
                            type="date"
                          />
                        ) : (
                          <input
                            value={school[key]}
                            name={key}
                            data-id={school.id}
                            onChange={this.handleEdit}
                          />
                        )
                      ) : (
                        school[key]
                      )}
                    </li>
                  ) : null
                )}
                <button type="button" onClick={this.switchEditState}>
                  Edit
                </button>
              </ul>
            ))}
        </div>
      </div>
    );
  }
}

export default Education;
