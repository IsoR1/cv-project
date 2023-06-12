/* eslint-disable function-paren-newline */
import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      submittedData: [],
      jobList: [],
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

  onSubmit = (e) => {
    e.preventDefault();
    const { job } = this.state;

    this.setState((prevState) => ({
      jobList: [...prevState.jobList, job],
      submittedData: [...prevState.jobList, job],
      job: {
        companyName: "",
        role: "",
        dateStarted: "",
        dateEnded: "",
      },
    }));
    console.log(this.state);
  };

  render() {
    const { job, submittedData, submitted } = this.state;
    return (
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
    );
  }
}

export default Experience;
