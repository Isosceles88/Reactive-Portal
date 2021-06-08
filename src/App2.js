import React, { Component } from "react";
import "./App.css";

class App extends Component {
  foo = () => "Bars"; //this is a method which is part of the class ...this.foo to call
  //p.s. it's above the render!!!!!
  render() {
    const name = "John Doe";
    const loading = true;

    if (loading) {
      return <h4>Loading...</h4>;
    }

    return (
      <div className="App">
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

export default App;
