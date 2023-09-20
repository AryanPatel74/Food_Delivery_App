import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";
import About from "./Components/About";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
