import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Pricing from "../pages/Pricing/Pricing/Pricing";
import Careers from "../pages/Careers/Careers/Careers";
// import Resources from "../pages/Resources/ResourcesHomePage/ResourcesHomePage";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs/AboutUs";
import Login from "../pages/RegisterLogin/Login/Login";
import Register from "../pages/RegisterLogin/Register/Register";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import MyProjects from "../pages/Resources/MyProjects/MyProjects";
import ResourcesHomePage from "../pages/Resources/ResourcesHomePage/ResourcesHomePage";

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
                path: "/careers",
                element: <Careers></Careers>
            },
            // {
            //     path:"/resources",
            //     element:<Resources></Resources>
            // },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signUp",
        element: <Register></Register>
    },

    // dashboard
    {
        path: "/resources",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "",
                element: <ResourcesHomePage></ResourcesHomePage>
            },
            {
                path: "myProjects",
                element: <MyProjects></MyProjects>
            }
        ]
    },



]);