import React, { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../components/Others/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";
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
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <Banner />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <FeaturesAdvertising />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <Features />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <ClientReview />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <TrustedCompanies />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <CompanyOverview />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <SEOTools />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <MarketInsights />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <WhatIsNew />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <Purpose />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <WhyChooseUs />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <FAQs />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign/>}>
                <SEOImpact />
            </Suspense>
        </div>
    );
};

export default Home;