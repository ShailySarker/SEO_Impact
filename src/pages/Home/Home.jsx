import Banner from "./Components/Banner";
import ClientReview from "./Components/ClientReview";
import Features from "./Components/Features";
import CompanyOverview from "./Components/CompanyOverview";
import MarketInsights from "./Components/MarketInsights";
import SEOImpact from "./Components/SEOImpact";
import SEOTools from "./Components/SEOTools";
import TrustedCompanies from "./Components/TrustedCompanies";
import FeaturesAdvertising from "./Components/FeaturesAdvertising";
import WhatIsNew from "./Components/WhatIsNew";
import FAQs from "./Components/FAQs";
import WhyChooseUs from "./Components/WhyChooseUs";
import Purpose from "./Components/Purpose";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <FeaturesAdvertising></FeaturesAdvertising>
            <Features></Features>
            <ClientReview></ClientReview>
            <TrustedCompanies></TrustedCompanies>
            <CompanyOverview></CompanyOverview>
            <SEOTools></SEOTools>
            <MarketInsights></MarketInsights>
            <WhatIsNew></WhatIsNew>
            <Purpose></Purpose>
            <WhyChooseUs></WhyChooseUs>
            <FAQs></FAQs>
            <SEOImpact></SEOImpact>
        </div>
    );
};

export default Home;