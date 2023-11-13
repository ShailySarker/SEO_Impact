import React, { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../components/Others/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";

const ContactUsBanner = React.lazy(() => import("./Components/ContactUsBanner"));
const FeedbackUs = React.lazy(() => import("./Components/FeedbackUs"));
const SocialMedia = React.lazy(() => import("./Components/SocialMedia"));

const ContactUs = () => {
    return (
        <div>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <ContactUsBanner />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <SocialMedia />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <FeedbackUs />
            </Suspense>
        </div>
    );
};

export default ContactUs;