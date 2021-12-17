import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MemeDisplay from "./components/MemeDisplay/MemeDisplay";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <MemeDisplay />
      <Footer />
    </div>
  );
}

export default App;
