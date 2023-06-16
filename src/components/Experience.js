/* eslint-disable react/jsx-indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
import React, { Component } from "react";
import uniqId from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
      submittedData: [],
      editMode: false,
      jobList: [],
      id: uniqId(),
      job: {
        companyName: "",
        role: "",
        dateStarted: "",
        dateEnded: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      job: {
        ...prevState.job,
        [name]: value,
      },
    }));
  };

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
    e.preventDefault();
    const { editMode, submittedData, jobList, job } = this.state;
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
    this.setState({
      jobList: updatedJobs,
      submittedData: updatedJobs,
    });
    console.log(this.state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { job } = this.state;

    const randomId = uniqId();

    const jobWithId = {
      ...job,
      id: randomId,
    };

    this.setState((prevState) => ({
      jobList: [...prevState.jobList, jobWithId],
      submittedData: [...prevState.jobList, jobWithId],
      job: {
        companyName: "",
        role: "",
        dateStarted: "",
        dateEnded: "",
      },
      formSubmitted: true,
    }));
    console.log(this.state);
  };

  render() {
    const { job, submittedData, formSubmitted, editMode } = this.state;
    return (
      <div className="exp-con">
        <div className="exp-form-div">
          <form className="exp-form" onSubmit={this.onSubmit}>
            <label htmlFor="companyNameInput">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={job.companyName}
              onChange={this.handleChange}
              id="companyNameInput"
            />
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              value={job.role}
              onChange={this.handleChange}
              id="role"
            />
            <label htmlFor="dateStarted">Date Started</label>
            <input
              type="date"
              name="dateStarted"
              value={job.dateStarted}
              onChange={this.handleChange}
              id="dateStarted"
            />
            <label htmlFor="dateEnded">Date Ended</label>
            <input
              type="date"
              name="dateEnded"
              value={job.dateEnded}
              onChange={this.handleChange}
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
                            onChange={this.handleEdit}
                            type="date"
                          />
                        ) : (
                          <input
                            value={jobEntry[key]}
                            name={key}
                            data-id={jobEntry.id}
                            onChange={this.handleEdit}
                          />
                        )
                      ) : (
                        jobEntry[key]
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

export default Experience;
