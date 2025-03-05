import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, Link} from "react-router-dom";
import Young from "./pages/Young";
import Old from "./pages/Old";

function App() {

  return (
          <div className="App">
              <nav>
                  <Link to={"/mobile"} style={{display: "none"}}>Young</Link>
                  <Link to={"/mobileo"} style={{display: "none"}}>Old</Link>
              </nav>
              <Routes>
                  <Route path="/mobile" element={<Young/>}/>
                  <Route path="/mobileO" element={<Old/>}/>
              </Routes>
          </div>
  );
}

export default App;
