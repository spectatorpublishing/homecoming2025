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
      <StaffCredits />
    </div>
  );
}