import React, { Suspense } from "react";
import SearchBar from "../../../../components/Others/SearchBar/SearchBar";
import ComponentLazyLoaderDesign from "../../../../components/Others/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";
const RankingCheckerResultingOverview = React.lazy(() => import("./Components/RankingCheckerResultingOverview"));
const Performance = React.lazy(() => import("./Components/Performance"));
const SEOPart = React.lazy(() => import("./Components/SEOPart"));
const Mobile = React.lazy(() => import("./Components/Mobile"));
const Security = React.lazy(() => import("./Components/Security"));
const WhatNext = React.lazy(() => import("./Components/WhatNext"));

const RankingCheckerAfterCheck = () => {
    return (
        <div className="mt-12 ">
            <div className="md:ml-16 ml-6">
                <SearchBar />
            </div>
            <div className="my-24 lg:mx-[106px] md:mx-16 mx-6">
                <Suspense fallback={<ComponentLazyLoaderDesign />}>
                    <RankingCheckerResultingOverview />
                </Suspense>
                <Suspense fallback={<ComponentLazyLoaderDesign />}>
                    <Performance />
                </Suspense>
                <Suspense fallback={<ComponentLazyLoaderDesign />}>
                    <SEOPart />
                </Suspense>
                <Suspense fallback={<ComponentLazyLoaderDesign />}>
                    <Mobile />
                </Suspense>
                <Suspense fallback={<ComponentLazyLoaderDesign />}>
                    <Security />
                </Suspense>
                <Suspense fallback={<ComponentLazyLoaderDesign />}>
                    <WhatNext />
                </Suspense>
            </div>
        </div>
    );
};

export default RankingCheckerAfterCheck;