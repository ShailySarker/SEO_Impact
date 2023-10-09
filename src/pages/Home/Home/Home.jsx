import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview/ClientReview";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import Features from "../Features/Features";
import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Features></Features>
            <ClientReview></ClientReview>
            <TrustedCompanies></TrustedCompanies>
            <CompanyOverview></CompanyOverview>
        </div>
    );
};

export default Home;