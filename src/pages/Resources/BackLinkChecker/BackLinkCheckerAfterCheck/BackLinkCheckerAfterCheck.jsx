import React, { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../../../components/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";
const BackLinkHeader = React.lazy(() => import("./Components/BackLinkHeader"));
const BackLinkResultDescription = React.lazy(() => import("./Components/BackLinkResultDescription"));
const BackLinkResultOverview = React.lazy(() => import("./Components/BackLinkResultOverview"));

const BackLinkCheckerAfterCheck = () => {
    return (
        <div>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <BackLinkHeader />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <BackLinkResultOverview />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <BackLinkResultDescription />
            </Suspense>
        </div>
    );
};

export default BackLinkCheckerAfterCheck;