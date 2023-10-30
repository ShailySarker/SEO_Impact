import ApplicationProcess from "../ApplicationProcess/ApplicationProcess";
import Benefits from "../Benefits/Benefits";
import CareersBanner from "../CareersBanner/CareersBanner";
import ContactRecruiter from "../ContactRecruiter/ContactRecruiter";
import DifferentCareers from "../DifferentCareers/DifferentCareers";
import EmployeeTestimonials from "../EmployeeTestimonials/EmployeeTestimonials";
import InternshipOpportunities from "../InternshipOpportunities/InternshipOpportunities";
import JobOpening from "../JobOpening/JobOpening";
import SEOImpactRating from "../SEOImpactRating/SEOImpactRating";
import TrainingAndDevelopment from "../TrainingAndDevelopment/TrainingAndDevelopment";

const Careers = () => {
    return (
        <div>
            <CareersBanner></CareersBanner>
            <DifferentCareers></DifferentCareers>
            <Benefits></Benefits>
            <JobOpening></JobOpening>
            <InternshipOpportunities></InternshipOpportunities>
            <ApplicationProcess></ApplicationProcess>
            <ContactRecruiter></ContactRecruiter>
            <EmployeeTestimonials></EmployeeTestimonials>
            <TrainingAndDevelopment></TrainingAndDevelopment>
            <SEOImpactRating></SEOImpactRating>
        </div>
    );
};

export default Careers;