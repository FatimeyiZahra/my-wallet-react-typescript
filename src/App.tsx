import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
    <Routes>
       <Route path="/" element={<SignUp/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/home" element={<Home/>}/>
    </Routes>
     
    </>
  );
};

export default App;
