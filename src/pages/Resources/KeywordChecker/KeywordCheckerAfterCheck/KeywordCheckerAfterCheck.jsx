// import KeywordCheckerHeader from "./Components/KeywordCheckerHeader";
// import KeywordCheckerOverview from "./Components/KeywordCheckerOverview";
// import KeywordScore from "./Components/KeywordScore";
// import SEOImprovements from "./Components/SEOImprovements";

import React, { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../../../components/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";

const KeywordCheckerHeader = React.lazy(() => import("./Components/KeywordCheckerHeader"));
const KeywordCheckerOverview = React.lazy(() => import("./Components/KeywordCheckerOverview"));
const KeywordScore = React.lazy(() => import("./Components/KeywordScore"));
const SEOImprovements = React.lazy(() => import("./Components/SEOImprovements"));

const KeywordCheckerAfterCheck = () => {
    return (
        <div className="mt-12 lg:mx-16 md:mx-16 mx-6">
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <KeywordCheckerHeader />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <KeywordScore />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <KeywordCheckerOverview />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <SEOImprovements />
            </Suspense>
            {/* <KeywordCheckerHeader></KeywordCheckerHeader>
            <KeywordScore></KeywordScore>
            <KeywordCheckerOverview></KeywordCheckerOverview>
            <SEOImprovements></SEOImprovements> */}
        </div>
    );
};

export default KeywordCheckerAfterCheck;