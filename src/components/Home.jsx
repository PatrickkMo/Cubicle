import React from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import Cubicle from "./Cubicle";
import Sidebar from "./Sidebar";

import "./Home.css";

const Home = () => {
  const [userData] = useLocalStorage("userData", {});

  return (
    <div id="home">
      <Sidebar />
      <div>Welcome back, {userData.username}!</div>
      <Cubicle />
    </div>
  );
};

export default Home;
