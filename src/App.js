import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from "react-router-dom";
=======
import MemeDisplay from "./components/MemeDisplay/MemeDisplay";
import Footer from "./components/Footer/Footer";
>>>>>>> develop

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Header />
        <Switch>{/* <Route path="/" exact component={HomePage} /> */}</Switch>
      </BrowserRouter>
=======
      <Header />
      <MemeDisplay />
      <Footer />
>>>>>>> develop
    </div>
  );
}

export default App;
