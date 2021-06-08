import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false, //a moment in a time before we get the data back...if loading show spinner else show data
  };
  async componentDidMount() {
    this.setState({ loading: true }); //opening -- before data retrieval
    const res = await axios.get("https://api.github.com/users"); //gets data now place it in setState

    this.setState({ users: res.data, loading: false }); //data got now set laoding to false
  }
  //NOW PASS USERS INTO THE APP.JS

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
