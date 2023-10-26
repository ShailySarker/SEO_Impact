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
import ResourcesHomePage from "../pages/Resources/ResourcesHomePage/ResourcesHomePage/ResourcesHomePage";
import KeywordChecker from "../pages/Resources/KeywordChecker/KeywordChecker/KeywordChecker";
import KeywordCheckerAfterCheck from "../pages/Resources/KeywordChecker/KeywordCheckerAfterCheck/KeywordCheckerAfterCheck";
import BackLinkChecker from "../pages/Resources/BackLinkChecker/BackLinkChecker/BackLinkChecker";
import BackLinkCheckerAfterCheck from "../pages/Resources/BackLinkChecker/BackLinkCheckerAfterCheck/BackLinkCheckerAfterCheck";
import ResourcesHomePageAfterCheck from "../pages/Resources/ResourcesHomePage/ResourcesHomePageAfterCheck/ResourcesHomePageAfterCheck";
import SocialImpactLayout from "../layout/SocialImpactLayout/SocialImpactLayout";
import WhatIsNew from "../pages/SocialImpact/WhatIsNew/WhatIsNew";
import Blogs from "../pages/SocialImpact/Blogs/Blogs";
import ClientReview from "../pages/SocialImpact/ClientReview/ClientReview";
import SocialMediaReview from "../pages/SocialImpact/SocialMediaReview/SocialMediaReview";
import FAQs from "../pages/SocialImpact/FAQs/FAQs";
import SnippetGenerator from "../pages/Resources/SnippetGenerator/SnippetGenerator/SnippetGenerator";
import SnippetGeneratorAfterCheck from "../pages/Resources/SnippetGenerator/SnippetGeneratorAfterCheck/SnippetGeneratorAfterCheck";
import KeywordResearchTool from "../pages/Resources/KeywordResearchTool/KeywordResearchTool/KeywordResearchTool";
import KeywordResearchToolAfterCheck from "../pages/Resources/KeywordResearchTool/KeywordResearchToolAfterCheck/KeywordResearchToolAfterCheck";

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
                path: "homePage",
                element: <ResourcesHomePage></ResourcesHomePage>
            },
            {
                path: "homePageAfterChecking",
                element: <ResourcesHomePageAfterCheck></ResourcesHomePageAfterCheck>
            },
            {
                path: "myProjects",
                element: <MyProjects></MyProjects>
            },
            {
                path: "keywordChecker",
                element: <KeywordChecker></KeywordChecker>
            },
            {
                path:"keywordCheckerAfterChecking",
                element: <KeywordCheckerAfterCheck></KeywordCheckerAfterCheck>
            },
            {
                path: "backLinkChecker",
                element: <BackLinkChecker></BackLinkChecker>
            },
            {
                path: "backLinkCheckerAfterChecking",
                element: <BackLinkCheckerAfterCheck></BackLinkCheckerAfterCheck>
            },
            {
                path: "snippetGenerator",
                element: <SnippetGenerator></SnippetGenerator>
            },
            {
                path: "snippetGeneratorAfterChecking",
                element: <SnippetGeneratorAfterCheck></SnippetGeneratorAfterCheck>
            },
            {
                path: "keywordResearchTool",
                element: <KeywordResearchTool></KeywordResearchTool>
            },
            {
                path: "keywordResearchToolAfterChecking",
                element: <KeywordResearchToolAfterCheck></KeywordResearchToolAfterCheck>
            }
        ]
    },

    // Social Impact
    {
        path:"/socialImpact",
        element: <SocialImpactLayout></SocialImpactLayout>,
        children: [
            {
                path: "whatIsNew",
                element: <WhatIsNew></WhatIsNew>
            },
            {
                path: "blogs",
                element:<Blogs></Blogs>
            },
            {
                path: "clientReview",
                element:<ClientReview></ClientReview>
            },
            {
                path: "socialMediaReview",
                element: <SocialMediaReview></SocialMediaReview>
            },
            {
                path: "FAQs",
                element: <FAQs></FAQs>
            }
        ]
    }



]);