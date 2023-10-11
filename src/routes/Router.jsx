import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Pricing from "../pages/Pricing/Pricing/Pricing";
import Careers from "../pages/Careers/Careers/Careers";
import Resources from "../pages/Resources/Resources";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs/AboutUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/pricing",
            element: <Pricing></Pricing>
        },
        {
            path:"/careers",
            element: <Careers></Careers>
        },
        {
            path:"/resources",
            element:<Resources></Resources>
        },
        {
            path:"/contact",
            element:<ContactUs></ContactUs>
        },
        {
            path:"/about",
            element:<AboutUs></AboutUs>
        }
      ]
    },
  ]);