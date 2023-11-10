import React from "react";
import { Suspense } from "react";
import ComponentLazyLoaderDesign from "../../components/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";

const ApplicationProcess = React.lazy(() => import("./Components/ApplicationProcess"));
const Benefits = React.lazy(() => import("./Components/Benefits"));
const CareersBanner = React.lazy(() => import("./Components/CareersBanner"));
const ContactRecruiter = React.lazy(() => import("./Components/ContactRecruiter"));
const DifferentCareers = React.lazy(() => import("./Components/DifferentCareers"));
const EmployeeTestimonials = React.lazy(() => import("./Components/EmployeeTestimonials"));
const InternshipOpportunities = React.lazy(() => import("./Components/InternshipOpportunities"));
const JobOpening = React.lazy(() => import("./Components/JobOpening"));
const SEOImpactRating = React.lazy(() => import("./Components/SEOImpactRating"));
const TrainingAndDevelopment = React.lazy(() => import("./Components/TrainingAndDevelopment"));

const Careers = () => {
    return (
        <div>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <CareersBanner />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <DifferentCareers />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <Benefits />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <JobOpening />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <InternshipOpportunities />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <ApplicationProcess />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <ContactRecruiter />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <EmployeeTestimonials />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <TrainingAndDevelopment />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <SEOImpactRating />
            </Suspense>
        </div>
    );
};

export default Careers;