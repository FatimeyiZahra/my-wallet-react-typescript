import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
    <Routes>
       <Route path="/" element={<SignUp/>}/>
       <Route path="/login" element={<Login/>}/>
      
    </Routes>
     
    </>
  );
};

export default App;
