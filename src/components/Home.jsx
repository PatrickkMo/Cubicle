import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";
import Cubicle from "./Cubicle";
import portfolioImage from "../assets/portfolio.png";
import profileImage from "../assets/profile.png";
import coworkersImage from "../assets/coworkers.png";


import "./Home.css";

const Home = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useLocalStorage("userData", {});

  return (
    <>
      <div className="home">
        <h1 className="welcome">Welcome back, {userData.username}!</h1>
        <div className="image-container">
          <img src={portfolioImage} alt="" className="image" />
          <img src={profileImage} alt="" className="image" />
          <img src={coworkersImage} alt="" className="image" />
        </div>
      </div>
    </>
  );
};

export default Home;
