import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MemeDisplay from "./components/MemeDisplay/MemeDisplay";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MemeDisplay />
      <Footer />
    </div>
  );
}

export default App;
