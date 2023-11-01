import { Suspense } from "react";
import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
// import Home from "../pages/Home/Home/Home";
const Home = lazy(() => import("../pages/Home/Home/Home"));

// import Pricing from "../pages/Pricing/Pricing/Pricing";
const Pricing = lazy(() => import("../pages/Pricing/Pricing/Pricing"));

// import Careers from "../pages/Careers/Careers/Careers";
const Careers = lazy(() => import("../pages/Careers/Careers/Careers"));

// import Resources from "../pages/Resources/ResourcesHomePage/ResourcesHomePage";
// import ContactUs from "../pages/ContactUs/ContactUs/ContactUs";
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs/ContactUs"));

// import AboutUs from "../pages/AboutUs/AboutUs/AboutUs";
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs/AboutUs"));

// import Login from "../pages/RegisterLogin/Login/Login";
const Login = lazy(() => import("../pages/RegisterLogin/Login/Login"));

// import Register from "../pages/RegisterLogin/Register/Register";
const Register = lazy(() => import("../pages/RegisterLogin/Register/Register"));

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
// import MyProjects from "../pages/Resources/MyProjects/MyProjects";
const MyProjects = lazy(() => import("../pages/Resources/MyProjects/MyProjects"));

// import KeywordChecker from "../pages/Resources/KeywordChecker/KeywordChecker/KeywordChecker";
const KeywordChecker = lazy(() => import("../pages/Resources/KeywordChecker/KeywordChecker/KeywordChecker"));

// import KeywordCheckerAfterCheck from "../pages/Resources/KeywordChecker/KeywordCheckerAfterCheck/KeywordCheckerAfterCheck";
const KeywordCheckerAfterCheck = lazy(() => import("../pages/Resources/KeywordChecker/KeywordCheckerAfterCheck/KeywordCheckerAfterCheck"));

// import BackLinkChecker from "../pages/Resources/BackLinkChecker/BackLinkChecker/BackLinkChecker";
const BackLinkChecker = lazy(() => import("../pages/Resources/BackLinkChecker/BackLinkChecker/BackLinkChecker"));

// import BackLinkCheckerAfterCheck from "../pages/Resources/BackLinkChecker/BackLinkCheckerAfterCheck/BackLinkCheckerAfterCheck";
const BackLinkCheckerAfterCheck = lazy(() => import("../pages/Resources/BackLinkChecker/BackLinkCheckerAfterCheck/BackLinkCheckerAfterCheck"));

import SnippetGenerator from "../pages/Resources/SnippetGenerator/SnippetGenerator/SnippetGenerator";
import SnippetGeneratorAfterCheck from "../pages/Resources/SnippetGenerator/SnippetGeneratorAfterCheck/SnippetGeneratorAfterCheck";
import KeywordResearchTool from "../pages/Resources/KeywordResearchTool/KeywordResearchTool/KeywordResearchTool";
import KeywordResearchToolAfterCheck from "../pages/Resources/KeywordResearchTool/KeywordResearchToolAfterCheck/KeywordResearchToolAfterCheck";
// import RankingChecker from "../pages/Resources/RankingChecker/RankingChecker/RankingChecker";
const RankingChecker = lazy(() => import("../pages/Resources/RankingChecker/RankingChecker/RankingChecker"));

// import RankingCheckerAfterCheck from "../pages/Resources/RankingChecker/RankingCheckerAfterCheck/RankingCheckerAfterCheck";
const RankingCheckerAfterCheck = lazy(() => import("../pages/Resources/RankingChecker/RankingCheckerAfterCheck/RankingCheckerAfterCheck"));

import LazyLoaderDesign from "../components/LazyLoaderDesign/LazyLoaderDesign";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Suspense fallback={
                    <div className="flex flex-col justify-center items-center my-20 gap-12">
                        <span className="loading loading-spinner w-52 text-[#007BFE]"></span>
                        <h3 className="text-3xl font-bold">Please wait ...</h3>
                    </div>}>
                    <Home />
                </Suspense>
            },
            {
                path: "/pricing",
                element: <Suspense fallback={
                    <div className="flex flex-col justify-center items-center my-20 gap-12">
                        <span className="loading loading-spinner w-52 text-[#007BFE]"></span>
                        <h3 className="text-3xl font-bold">Please wait ...</h3>
                    </div>}>
                    <Pricing />
                </Suspense>
            },
            {
                path: "/careers",
                element: <Suspense fallback={
                    <div className="flex flex-col justify-center items-center my-20 gap-12">
                        <span className="loading loading-spinner w-52 text-[#007BFE]"></span>
                        <h3 className="text-3xl font-bold">Please wait ...</h3>
                    </div>}>
                    <Careers />
                </Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={
                    <div className="flex flex-col justify-center items-center my-20 gap-12">
                        <span className="loading loading-spinner w-52 text-[#007BFE]"></span>
                        <h3 className="text-3xl font-bold">Please wait ...</h3>
                    </div>}>
                    <ContactUs />
                </Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={
                    <div className="flex flex-col justify-center items-center my-20 gap-12">
                        <span className="loading loading-spinner w-52 text-[#007BFE]"></span>
                        <h3 className="text-3xl font-bold">Please wait ...</h3>
                    </div>}>
                    <AboutUs />
                </Suspense>
            }
        ]
    },
    {
        path: "/login",
        element: <Suspense fallback={
            <div className="flex flex-col justify-center items-center my-20 gap-12">
                <span className="loading loading-spinner w-52 text-[#007BFE]"></span>
                <h3 className="text-3xl font-bold">Please wait ...</h3>
            </div>}>
            <Login />
        </Suspense>
    },
    {
        path: "/signUp",
        element: <Suspense fallback={
            <div className="flex flex-col justify-center items-center my-20 gap-12">
                <span className="loading loading-spinner w-52 text-[#007BFE]"></span>
                <h3 className="text-3xl font-bold">Please wait ...</h3>
            </div>}>
            <Register />
        </Suspense>
    },


    // dashboard
    {
        path: "/resources",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "myProjects",
                element: <Suspense fallback={
                    <div className="flex flex-col justify-center items-center my-20 gap-12">
                        <span className="loading loading-spinner w-52 text-[#007BFE]"></span>
                        <h3 className="text-3xl font-bold">Please wait ...</h3>
                    </div>}>
                    <MyProjects />
                </Suspense>            
            },
            {
                path: "keywordChecker",
                element: <Suspense fallback={
                    <LazyLoaderDesign/>}>
                    <KeywordChecker />
                </Suspense>
            },
            {
                path: "keywordCheckerAfterChecking",
                element: <Suspense fallback={
                    <LazyLoaderDesign/>}>
                    <KeywordCheckerAfterCheck />
                </Suspense>
            },
            {
                path: "rankingChecker",
                element: <Suspense fallback={
                    <LazyLoaderDesign/>}>
                    <RankingChecker />
                </Suspense>
            },
            {
                path: "rankingCheckerAfterChecking",
                element: <Suspense fallback={
                    <LazyLoaderDesign/>}>
                    <RankingCheckerAfterCheck />
                </Suspense>
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

]);