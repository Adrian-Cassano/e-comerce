import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Views/Home"
import News from "./Views/News"
import Landing from "./Views/Landing"


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/Landing"} exact element={<Landing />} />
        <Route path={"/News"} exact element={<News />} />
        
      </Routes>
    </Router>
  );
}

export default App;
