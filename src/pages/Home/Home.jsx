import React, { Suspense } from "react";
const Banner = React.lazy(() => import("./Components/Banner"));
const FeaturesAdvertising = React.lazy(() => import("./Components/FeaturesAdvertising"));
const Features = React.lazy(() => import("./Components/Features"));
const ClientReview = React.lazy(() => import("./Components/ClientReview"));
const TrustedCompanies = React.lazy(() => import("./Components/TrustedCompanies"));
const CompanyOverview = React.lazy(() => import("./Components/CompanyOverview"));
const SEOTools = React.lazy(() => import("./Components/SEOTools"));
const MarketInsights = React.lazy(() => import("./Components/MarketInsights"));
const WhatIsNew = React.lazy(() => import("./Components/WhatIsNew"));
const Purpose = React.lazy(() => import("./Components/Purpose"));
const WhyChooseUs = React.lazy(() => import("./Components/WhyChooseUs"));
const FAQs = React.lazy(() => import("./Components/FAQs"));
const SEOImpact = React.lazy(() => import("./Components/SEOImpact"));

const Home = () => {
    return (
        <div className="">
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <Banner />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <FeaturesAdvertising />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <Features />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <ClientReview />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <TrustedCompanies />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <CompanyOverview />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <SEOTools />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <MarketInsights />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <WhatIsNew />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <Purpose />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <WhyChooseUs />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <FAQs />
            </Suspense>
            <Suspense fallback={<div className=" text-center text-2xl font-bold">Loading...</div>}>
                <SEOImpact />
            </Suspense>
        </div>
    );
};

export default Home;