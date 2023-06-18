/* eslint-disable function-paren-newline */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable quotes */
import "./App.css";
import React from "react";
import uniqid from "uniqid";
import Info from "./components/Info";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";

// eslint-disable-next-line react/prefer-stateless-function
function App() {
  return (
    <div className="container">
      <Header />
      <Info />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
