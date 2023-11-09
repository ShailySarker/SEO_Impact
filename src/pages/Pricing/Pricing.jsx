import React, { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../components/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";
const PricingBanner = React.lazy(() => import("./Components/PricingBanner"));
const PricingDesign = React.lazy(() => import("./Components/PricingDesign"));
const Guide = React.lazy(() => import("./Components/Guide"));
const DifferentPackages = React.lazy(() => import("./Components/DifferentPackages"));
const PopularPackages = React.lazy(() => import("./Components/PopularPackages"));
const WebsiteGrowth = React.lazy(() => import("./Components/WebsiteGrowth"));
const DemoVideo = React.lazy(() => import("./Components/DemoVideo"));
const Buying = React.lazy(() => import("./Components/Buying"));

const Pricing = () => {
    return (
        <div>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <PricingBanner />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <PricingDesign />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <Guide />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <DifferentPackages />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <PopularPackages />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <WebsiteGrowth />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <DemoVideo />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <Buying />
            </Suspense>
        </div>
    );
};

export default Pricing;