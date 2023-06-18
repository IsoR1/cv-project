/* eslint-disable no-nested-ternary */
/* eslint-disable react/sort-comp */
/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import uniqId from "uniqid";

function Education() {
  const [schools, setSchools] = useState([]);
  const [newSchool, setNewSchool] = useState({
    schoolName: "",
    dateStarted: "",
    dateEnded: "",
    subject: "",
    degree: "",
    id: 0,
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setNewSchool((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function switchEditState() {
    if (!editMode) {
      setEditMode(true);
    }
    if (editMode) {
      setEditMode(false);
    }
  }

  function handleEdit(e) {
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
    setSchools([...updatedSchools]);
    setSubmittedData([...updatedSchools]);
  }

  function onSubmit(e) {
    e.preventDefault();

    // const schoolId = setId(uniqId());
    const schoolId = uniqId();

    const schoolWithId = {
      ...newSchool,
      id: schoolId,
    };

    setSchools((prevState) => [...prevState, schoolWithId]);
    setSubmittedData((prevState) => [...prevState, schoolWithId]);
    setFormSubmitted(true);
    setNewSchool({
      schoolName: "",
      dateStarted: "",
      dateEnded: "",
      subject: "",
      degree: "",
      id: 0,
    });
  }

  const showResults = schools.length > 0;
  const count = 0;
  return (
    <div className="edu-con">
      <div className="education-form-div">
        <form className="education-form" onSubmit={onSubmit}>
          <label htmlFor="nameInput">SchoolName</label>
          <input
            onChange={handleChange}
            value={newSchool.schoolName}
            name="schoolName"
            id="nameInput"
          />

          <label htmlFor="dateStartedInput">Date Started</label>
          <input
            type="date"
            onChange={handleChange}
            name="dateStarted"
            value={newSchool.dateStarted}
            id="dateStartedInput"
          />

          <label htmlFor="dateEnded">Date Ended</label>
          <input
            type="date"
            onChange={handleChange}
            name="dateEnded"
            value={newSchool.dateEnded}
            id="dateEnded"
          />

          <label htmlFor="subjectInput">Subject</label>
          <input
            type="text"
            onChange={handleChange}
            name="subject"
            value={newSchool.subject}
            id="subjectInput"
          />

          <label htmlFor="degreeInput">Degree</label>
          <input
            type="text"
            name="degree"
            onChange={handleChange}
            value={newSchool.degree}
            id="degreeInput"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="edu-ul-div">
        {formSubmitted &&
          submittedData.map((school) => (
            <ul key={school.id} className="edu-results-ul">
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
                          onChange={handleEdit}
                          type="date"
                        />
                      ) : (
                        <input
                          value={school[key]}
                          name={key}
                          data-id={school.id}
                          onChange={handleEdit}
                        />
                      )
                    ) : (
                      school[key]
                    )}
                  </li>
                ) : null
              )}
              <button type="button" onClick={switchEditState}>
                Edit
              </button>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default Education;
