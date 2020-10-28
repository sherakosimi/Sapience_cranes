import React from "react";
import { ProvideFirebase } from "./firebase/useFirebase";
import { Router } from "@reach/router";
import MainPage from "./posts/MainPage";
import "./App.css";
import "antd/dist/antd.css";
import Lala from "./posts/Lala";
import Test from "./posts/Test";
import Application from "./posts/Application";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  return (
    <ProvideFirebase>
      <Router>
        <Application path = "/application"/>
        <Test path = "/ss"/>
        <Lala path = "/"/>
      <MainPage path="/ss" />
      </Router>
    </ProvideFirebase>
  );
}

export default App;
