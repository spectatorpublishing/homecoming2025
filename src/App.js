import React from "react";
import Section from "./pages/Section";
import "./App.css";
import './App.css';
import NavBar from "./components/NavBar";
import "./pages/StaffCredits.css";  
import StaffCredits from "./pages/StaffCredits";
import Letter from "./components/Letter";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Letter />
        <NavBar />
      </header>
      <Section />
      <StaffCredits />
    </div>
  );
}