import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Views/Home"
import News from "./Views/News"
import Register from "./Views/Register"
import LogIn from "./Views/LogIn"


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/Register"} exact element={<Register />} />
        <Route path={"/LogIn"} exact element={<LogIn />} />
        <Route path={"/News"} exact element={<News />} />
        
      </Routes>
    </Router>
  );
}

export default App;
