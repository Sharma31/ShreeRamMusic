import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import "./App.css";
function App() {
    return(
        
        <Router> 
           <div>
           
            <Routes>
            <Route path="/" exact Component={Home} />
            </Routes>
            </div>
        </Router>
       
    )

}
export default App;