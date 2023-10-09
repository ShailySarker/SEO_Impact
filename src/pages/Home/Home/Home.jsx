import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview/ClientReview";
import Features from "../Features/Features";
import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Features></Features>
            <ClientReview></ClientReview>
            <TrustedCompanies></TrustedCompanies>
        </div>
    );
};

export default Home;