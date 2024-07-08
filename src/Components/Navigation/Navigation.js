import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Signup,
  Login,
  Tracking,
  forgetPassword,
} from "../../Constants/Routes";
import HomePage from "../Public/Home/HomePage";
import SignupPage from "../Public/Auth/SignupPage";
import LoginPage from "../Public/Auth/LoginPage/LoginPage";
import TrackingPage from "../Public/TrackingPage/TrackingPage";
import ForgotPassword from "../Public/Auth/LoginPage/ForgotPassword";
import CreateAccount from "../Public/Auth/LoginPage/CreateAccount";

const Navigation = () => {
  return (
    <Routes>
      <Route path={Home} element={<HomePage />} />
      <Route path={forgetPassword} element={<ForgotPassword />} />
      <Route path={Signup} element={<SignupPage />} />
      <Route path={Login} element={<LoginPage />} />
      <Route path={Tracking} element={<TrackingPage />} />
      <Route path={Signup} element={<CreateAccount />} />
    </Routes>
  );
};

export default Navigation;
