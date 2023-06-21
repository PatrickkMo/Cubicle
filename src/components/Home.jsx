import React from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import Room from "./Room";
import Sidebar from "./Sidebar";

import "./Home.css";

const Home = () => {
  const [userData] = useLocalStorage("userData", {});

  return (
    <div id="home">
      <Sidebar />
      <div>Welcome back, {userData.username}!</div>
      <div className="room">
        <Room />
      </div>
    </div>
  );
};

export default Home;
