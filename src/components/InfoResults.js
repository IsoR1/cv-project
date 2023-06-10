/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable quotes */
/* eslint-disable react/no-unused-state */

import React, { Component } from "react";
import PropTypes from "prop-types";

class InfoResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    let count = 0;
    return (
      <ul>
        {Object.keys(data).map((key) => (
          <li key={(count += 1)}>{data[key]}</li>
        ))}
      </ul>
      // console.log(props)
    );
  }
}
InfoResults.propTypes = {
  data: PropTypes.object.isRequired,
};
export default InfoResults;
