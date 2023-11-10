import ApplicationProcess from "./Components/ApplicationProcess";
import Benefits from "./Components/Benefits";
import CareersBanner from "./Components/CareersBanner";
import ContactRecruiter from "./Components/ContactRecruiter";
import DifferentCareers from "./Components/DifferentCareers";
import EmployeeTestimonials from "./Components/EmployeeTestimonials";
import InternshipOpportunities from "./Components/InternshipOpportunities";
import JobOpening from "./Components/JobOpening";
import SEOImpactRating from "./Components/SEOImpactRating";
import TrainingAndDevelopment from "./Components/TrainingAndDevelopment";

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