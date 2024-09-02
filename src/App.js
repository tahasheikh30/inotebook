import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import Alerts from "./Components/Alerts";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  //Function for Dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  //Function for Alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };


  return (
    <div>
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} title="iNotebook" />
      <Alerts alert={alert}/>
      <Routes>
        <Route exact path="/" element={<Home mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
