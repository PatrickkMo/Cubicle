import "./App.css";

import {
  Navigate,
  Outlet,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React from "react";

import useLocalStorage from "./hooks/useLocalStorage";

import Login from "./components/Login";
import Home from "./components/Home";

const AuthWrapper = () => {
  const [userData] = useLocalStorage("userData", {});
  // console.log(userData.userId ? "OK" : "redirect");
  return userData.userId ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthWrapper />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
