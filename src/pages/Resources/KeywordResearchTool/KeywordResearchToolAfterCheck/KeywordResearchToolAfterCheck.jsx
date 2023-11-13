import React, { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../../../components/Others/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";
const KeywordIdeas = React.lazy(() => import("./Components/KeywordIdeas"));
const KeywordResearchToolHeader = React.lazy(() => import("./Components/KeywordResearchToolHeader"));
const KeywordsPerPage = React.lazy(() => import("./Components/KeywordsPerPage"));

const KeywordResearchToolAfterCheck = () => {
    return (
        <div>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <KeywordResearchToolHeader />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <KeywordIdeas />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <KeywordsPerPage />
            </Suspense>
        </div>
    );
};

export default KeywordResearchToolAfterCheck;