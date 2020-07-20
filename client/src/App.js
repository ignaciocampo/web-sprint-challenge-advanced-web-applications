import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from './components/BubblePage'
import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login";
import "./styles.scss";
import ColorList from "./components/ColorList";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

<PrivateRoute exact path='/bubblepage' component={BubblePage}/>
<PrivateRoute exact path='/colorlist' component={ColorList}/>

      </div>
    </Router>
  );
}

export default App;
