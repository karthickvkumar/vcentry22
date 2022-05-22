import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginAction from "./components/login-form";
import ResetAccount from "./components/reset-account";
import RegisterForm from "./components/register-form";
import ImageContent from "./components/image-content";
import LandingContent from "./components/landing-content";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingContent></LandingContent>}></Route>
        <Route path="login" element={<LoginAction></LoginAction>}></Route>
        <Route path="reset" element={<ResetAccount></ResetAccount>}></Route>
        <Route path="register" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="image" element={<ImageContent></ImageContent>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
