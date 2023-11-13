import React, { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../components/Others/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";
const AboutUsBanner = React.lazy(() => import("./Components/AboutUsBanner"));
const Achievements = React.lazy(() => import("./Components/Achievements"));
const Blogs = React.lazy(() => import("./Components/Blogs"));
const ClientReviews = React.lazy(() => import("./Components/ClientReviews"));
const OurFeatures = React.lazy(() => import("./Components/OurFeatures"));
const OurGoals = React.lazy(() => import("./Components/OurGoals"));
const OurTeam = React.lazy(() => import("./Components/OurTeam"));
const SocialMediaReview = React.lazy(() => import("./Components/SocialMediaReview"));

const AboutUs = () => {
    return (
        <div>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <AboutUsBanner />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <OurFeatures />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <OurTeam />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <OurGoals />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <Blogs />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <ClientReviews />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <SocialMediaReview />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <Achievements />
            </Suspense>
        </div>
    );
};

export default AboutUs;