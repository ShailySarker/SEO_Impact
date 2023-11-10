import { createBrowserRouter } from "react-router-dom";

import React, { Suspense } from "react";
import LazyLoaderDesign from "../components/LazyLoaderDesign/LazyLoaderDesign";

import MainLayout from "../layout/MainLayout/MainLayout";

const Home = React.lazy(() => import("../pages/Home/Home"))
const Pricing = React.lazy(() => import("../pages/Pricing/Pricing"));
const Careers = React.lazy(() => import("../pages/Careers/Careers"));
const ContactUs = React.lazy(() => import("../pages/ContactUs/ContactUs"));
const AboutUs = React.lazy(() => import("../pages/AboutUs/AboutUs/AboutUs"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Register/Register"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
const MyProjects = React.lazy(() => import("../pages/Resources/MyProjects/MyProjects"));
const KeywordChecker = React.lazy(() => import("../pages/Resources/KeywordChecker/KeywordChecker/KeywordChecker"));
const KeywordCheckerAfterCheck = React.lazy(() => import("../pages/Resources/KeywordChecker/KeywordCheckerAfterCheck/KeywordCheckerAfterCheck"));
const RankingChecker = React.lazy(() => import("../pages/Resources/RankingChecker/RankingChecker/RankingChecker"));
const RankingCheckerAfterCheck = React.lazy(() => import("../pages/Resources/RankingChecker/RankingCheckerAfterCheck/RankingCheckerAfterCheck"));
const BackLinkChecker = React.lazy(() => import("../pages/Resources/BackLinkChecker/BackLinkChecker/BackLinkChecker"));
const BackLinkCheckerAfterCheck = React.lazy(() => import("../pages/Resources/BackLinkChecker/BackLinkCheckerAfterCheck/BackLinkCheckerAfterCheck"));
const SnippetGenerator = React.lazy(() => import("../pages/Resources/SnippetGenerator/SnippetGenerator/SnippetGenerator"));
const SnippetGeneratorAfterCheck = React.lazy(() => import("../pages/Resources/SnippetGenerator/SnippetGeneratorAfterCheck/SnippetGeneratorAfterCheck"));
const KeywordResearchTool = React.lazy(() => import("../pages/Resources/KeywordResearchTool/KeywordResearchTool/KeywordResearchTool"));
const KeywordResearchToolAfterCheck = React.lazy(() => import("../pages/Resources/KeywordResearchTool/KeywordResearchToolAfterCheck/KeywordResearchToolAfterCheck"));


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <Home />
                </Suspense>
            },
            {
                path: "/pricing",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <Pricing />
                </Suspense>
            },
            {
                path: "/careers",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <Careers />
                </Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <ContactUs />
                </Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <AboutUs />
                </Suspense>
            }
        ]
    },
    {
        path: "/login",
        element: <Suspense fallback={
            <LazyLoaderDesign />}>
            <Login />
        </Suspense>
    },
    {
        path: "/signUp",
        element: <Suspense fallback={
            <LazyLoaderDesign />}>
            <Register />
        </Suspense>
    },

    // NotFound
    {
        path: "/*",
        element: <Suspense fallback={
            <LazyLoaderDesign />}>
            <NotFound />
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
                    <LazyLoaderDesign />}>
                    <MyProjects />
                </Suspense>
            },
            {
                path: "keywordChecker",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <KeywordChecker />
                </Suspense>
            },
            {
                path: "keywordCheckerAfterChecking",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <KeywordCheckerAfterCheck />
                </Suspense>
            },
            {
                path: "rankingChecker",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <RankingChecker />
                </Suspense>
            },
            {
                path: "rankingCheckerAfterChecking",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <RankingCheckerAfterCheck />
                </Suspense>
            },
            {
                path: "backLinkChecker",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <BackLinkChecker />
                </Suspense>
            },
            {
                path: "backLinkCheckerAfterChecking",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <BackLinkCheckerAfterCheck />
                </Suspense>
            },
            {
                path: "snippetGenerator",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <SnippetGenerator />
                </Suspense>
            },
            {
                path: "snippetGeneratorAfterChecking",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <SnippetGeneratorAfterCheck />
                </Suspense>
            },
            {
                path: "keywordResearchTool",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <KeywordResearchTool />
                </Suspense>
            },
            {
                path: "keywordResearchToolAfterChecking",
                element: <Suspense fallback={
                    <LazyLoaderDesign />}>
                    <KeywordResearchToolAfterCheck />
                </Suspense>
            }
        ]
    },

]);