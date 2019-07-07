import { hot } from "react-hot-loader/root";
import React from "react";

import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="app">
      <LoginForm />
    </div>
  );
}

export default hot(App);
