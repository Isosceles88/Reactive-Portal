import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(
          (
            user //change from state to props
          ) => (
            <UserItem key={user.id} user={user} /> //adding a key,we can use {user.id} also import UserItem to loop through it
          )
        )}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
/* user={user} passing it in as a prop to UserItem 
(we are now using props = changer User item to const {....html_url }=this.props) */

//user={user} passing in the entier user
