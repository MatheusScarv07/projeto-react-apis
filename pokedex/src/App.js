import React from "react";

import "./App.css";

import { Router } from "./Router/Router";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
