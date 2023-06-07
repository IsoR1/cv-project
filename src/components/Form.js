/* eslint-disable quotes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: { text: "" },
      number: { text: "" },
      email: { text: "" },
      info: [],
    };
  }

  render() {
    return (
      <div>
        <form>
          <input />
          <input />
          <input />
        </form>
      </div>
    );
  }
}

export default Form;
