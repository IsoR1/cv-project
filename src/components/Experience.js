/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
import React, { useState, useEffect } from "react";
import uniqId from "uniqid";

function Experience() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [job, setJob] = useState({
    companyName: "",
    role: "",
    dateStarted: "",
    dateEnded: "",
    id: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setJob((prevState) => ({
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

    const updatedJobs = jobList.map((obj) => {
      if (obj.id === e.target.dataset.id) {
        return {
          ...obj,
          [name]: value,
        };
      }
      return obj;
    });
    setJobList([...updatedJobs]);
    setSubmittedData([...updatedJobs]);
  }

  function onSubmit(e) {
    e.preventDefault();
    const randomId = uniqId();

    const jobWithId = {
      ...job,
      id: randomId,
    };

    setJobList([...jobList, jobWithId]);
    setSubmittedData([...jobList, jobWithId]),
      setJob({
        companyName: "",
        role: "",
        dateStarted: "",
        dateEnded: "",
        id: 0,
      });
    setFormSubmitted(true);
  }

  return (
    <div className="exp-con">
      <div className="exp-form-div">
        <form className="exp-form" onSubmit={onSubmit}>
          <label htmlFor="companyNameInput">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={job.companyName}
            onChange={handleChange}
            id="companyNameInput"
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            value={job.role}
            onChange={handleChange}
            id="role"
          />
          <label htmlFor="dateStarted">Date Started</label>
          <input
            type="date"
            name="dateStarted"
            value={job.dateStarted}
            onChange={handleChange}
            id="dateStarted"
          />
          <label htmlFor="dateEnded">Date Ended</label>
          <input
            type="date"
            name="dateEnded"
            value={job.dateEnded}
            onChange={handleChange}
            id="dateEnded"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="exp-ul-div">
        {formSubmitted &&
          submittedData.map((jobEntry) => (
            <ul key={jobEntry.id} className="exp-results-ul">
              {Object.keys(jobEntry).map((key) =>
                key !== "id" && jobEntry[key] ? (
                  <li key={key} className="exp-results-li">
                    {" "}
                    {editMode ? (
                      key === "dateStarted" || key === "dateEnded" ? (
                        <input
                          value={jobEntry[key]}
                          name={key}
                          data-id={jobEntry.id}
                          onChange={handleEdit}
                          type="date"
                        />
                      ) : (
                        <input
                          value={jobEntry[key]}
                          name={key}
                          data-id={jobEntry.id}
                          onChange={handleEdit}
                        />
                      )
                    ) : (
                      jobEntry[key]
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

export default Experience;
