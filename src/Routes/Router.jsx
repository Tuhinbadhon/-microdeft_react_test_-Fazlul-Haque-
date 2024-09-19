import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Form from "../components/Form/Form";
import Card from "../components/Card/Card";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/card",
        element: <Card />,
      },
    ],
  },
]);
