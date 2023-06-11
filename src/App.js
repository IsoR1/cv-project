/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable quotes */
import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import Info from "./components/Info";
import InfoResults from "./components/InfoResults";
import Header from "./components/Header";
import Education from "./components/Education";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: null,
      formSubmitted: false,
    };
  }

  handleFormSubmit = (data) => {
    // this.setState({
    //   formData: data,
    //   formSubmitted: true,
    // });
    console.log("success");
  };

  render() {
    const { formData, formSubmitted } = this.state;
    console.log(formData, formSubmitted);
    return (
      <div className="container">
        <Header />
        {/* <Info onSubmit={this.handleFormSubmit} /> */}
        <Info />
        <Education />
      </div>
    );
  }
}

export default App;
