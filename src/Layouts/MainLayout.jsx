import React from "react";
import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";
import Form from "../components/Form/Form";
import Card from "../components/Card/Card";

const MainLayout = () => {
  return (
    <div>
      <Home />
      <Form />
      <Card />
      <Outlet />
    </div>
  );
};

export default MainLayout;
