// import BackLinkHeader from "./Components/BackLinkHeader";
// import BackLinkResultDescription from "./Components/BackLinkResultDescription";

import React, { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../../../components/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";

// import BackLinkResultOverview from "./Components/BackLinkResultOverview";
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
            {/* <BackLinkHeader></BackLinkHeader>            <BackLinkResultOverview></BackLinkResultOverview>
            <BackLinkResultDescription></BackLinkResultDescription> */}
        </div>
    );
};

export default BackLinkCheckerAfterCheck;