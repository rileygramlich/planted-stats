import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from '../../utilities/users-service';

import Home from "../Home/Home";
import AuthPage from "../AuthPage/AuthPage";
import Profile from "../Profile/Profile";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/home/" element={<Home />} />
            <Route path="/home/profile" element={<Profile />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser}/>
      )}
    </main>
  );
}
