import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginAction from "./components/login-form";
import ResetAccount from "./components/reset-account";
import RegisterForm from "./components/register-form";
import ImageContent from "./components/image-content";
import LandingContent from "./components/landing-content";
import MailPage from "./components/mail";

import InboxPage from "./pages/inbox";
import SentPage from "./pages/sent";
import TrashPage from "./pages/trash";
import StaredPage from "./pages/stared";
import PageNotFound from "./pages/page-not-found";
import ParentComponent from "./pages/parent";
import LifeCycleComponent from "./components/lifecycle";
import "./css/style.css";

import { Provider } from "react-redux";
import configureStore from "./redux/store/redux-store";
const reduxStore = configureStore();

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingContent></LandingContent>}></Route>
          <Route path="login" element={<LoginAction></LoginAction>}></Route>
          <Route path="reset" element={<ResetAccount></ResetAccount>}></Route>
          <Route path="register" element={<RegisterForm></RegisterForm>}></Route>
          <Route path="image" element={<ImageContent></ImageContent>}></Route>
          <Route path="mail" element={<MailPage></MailPage>}>
            <Route path="inbox" element={<InboxPage></InboxPage>}></Route>
            <Route path="sent" element={<SentPage></SentPage>}></Route>
            <Route path="trash" element={<TrashPage></TrashPage>}></Route>
            <Route path="started" element={<StaredPage></StaredPage>}></Route>
            <Route path="parent" element={<ParentComponent></ParentComponent>}></Route>
          </Route>
          <Route path="lifecycle" element={<LifeCycleComponent></LifeCycleComponent>}></Route>

          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
