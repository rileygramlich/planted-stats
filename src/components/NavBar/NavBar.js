import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {

  function handleLogout() {
    userService.logout()
    setUser(null)
  }

  return (
    <nav>
      <Link to="/home">Planted</Link>
      &nbsp; | &nbsp;
      <Link to="/home/new">New Entry</Link>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  );
}
