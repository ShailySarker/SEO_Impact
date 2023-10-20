import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Features from "../Features/Features";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import MarketInsights from "../MarketInsights/MarketInsights";
import SEOImpact from "../SEOImpact/SEOImpact";
import SEOTools from "../SEOTools/SEOTools";
import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Features></Features>
            <ClientReview></ClientReview>
            <TrustedCompanies></TrustedCompanies>
            <CompanyOverview></CompanyOverview>
            <SEOTools></SEOTools>
            {/* <MarketInsights></MarketInsights>
            <SEOImpact></SEOImpact> */}
        </div>
    );
};

export default Home;