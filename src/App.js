import React from "react";
import { Routes, Route } from "react-router-dom";
import Section from "./pages/Section";
import "./App.css";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import "./pages/StaffCredits.css";  
import StaffCredits from "./pages/StaffCredits";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Section />
      <StaffCredits />
    </div>
  );
}