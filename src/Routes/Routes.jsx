import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import Menu from "../Pages/MenuPage/Menu";
import Shop from "../Pages/ShopPage/Shop";

import SignUp from "../Pages/SignUpPage/SignUp";
import Login from "../Pages/LoginPage/Login";
import Contact from "../Pages/ContactPage/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element:<SignUp></SignUp>
      },
    ],
  },
]);
