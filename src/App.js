import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>{/* <Route path="/" exact component={HomePage} /> */}</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
