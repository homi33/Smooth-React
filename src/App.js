import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
      </Routes>
    </>
  );
}

export default App;
