import React from "react";
import { Routes, Route } from "react-router-dom";
import Section from "./pages/Section";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Change this to the actual route name later */}
      <Route path="/" element={<Section />} />{" "}
    </Routes>
  );
}

export default App;
