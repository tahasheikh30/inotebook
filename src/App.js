import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import NoteState from "./context/notes/NoteState";

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
      <NoteState>
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} title="iNotebook" />
      <Alerts alert={alert}/>
      <div className='container'>
      <Routes>
        <Route exact path="/" element={<Home mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
        <Route exact path="/login" element={<Login mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
        <Route exact path="/signup" element={<Signup mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
      </Routes>
      </div>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
