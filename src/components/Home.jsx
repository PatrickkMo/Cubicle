import React from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import Room from "./Room";
import Sidebar from "./Sidebar";

import "./Home.css";

const Home = () => {
  const [userData] = useLocalStorage("userData", {});

  return (
    <div id="home">
      <h1 className="welcome">Welcome back, {userData.username}!</h1>
      <div className="room">
        <Room />
      </div>
    </div>
  );
};

export default Home;
