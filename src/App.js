import React, { Component } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/about"> About </NavLink>
          </header>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
