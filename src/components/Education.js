import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schools: [
        {
          school: "",
          dateStarted: "",
          dateEnded: "",
          qualification: "",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <form>
          <label>School</label>
          <input />

          <label>Date Started</label>
          <input type="date" />

          <label>Date Ended</label>
          <input type="date" />

          <label>Qualification</label>
          <input />

          <button type="submit">Add School</button>
        </form>
      </div>
    );
  }
}

export default Education;
