import ApplicationProcess from "../ApplicationProcess/ApplicationProcess";
import Benefits from "../Benefits/Benefits";
import CareersBanner from "../CareersBanner/CareersBanner";
import ContactRecruiter from "../ContactRecruiter/ContactRecruiter";
import DifferentCareers from "../DifferentCareers/DifferentCareers";
import InternshipOpportunities from "../InternshipOpportunities/InternshipOpportunities";
import JobOpening from "../JobOpening/JobOpening";
import SEOImpactRating from "../SEOImpactRating/SEOImpactRating";

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
            <SEOImpactRating></SEOImpactRating>
        </div>
    );
};

export default Careers;