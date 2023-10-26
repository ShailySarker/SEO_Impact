import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Features from "../Features/Features";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import MarketInsights from "../MarketInsights/MarketInsights";
import SEOImpact from "../SEOImpact/SEOImpact";
import SEOTools from "../SEOTools/SEOTools";
import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";
import FeaturesAdvertising from "../FeaturesAdvertising/FeaturesAdvertising";
import WhatIsNew from "../WhatIsNew/WhatIsNew";
import FAQs from "../FAQs/FAQs";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Purpose from "../Purpose/Purpose";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <FeaturesAdvertising></FeaturesAdvertising>
            <Features></Features>
            {/* <WhatIsNew></WhatIsNew> */}
            <ClientReview></ClientReview>
            <TrustedCompanies></TrustedCompanies>
            <CompanyOverview></CompanyOverview>
            <SEOTools></SEOTools>
            <MarketInsights></MarketInsights>
            <Purpose></Purpose>
            <WhyChooseUs></WhyChooseUs>
            <FAQs></FAQs>
            <SEOImpact></SEOImpact>
        </div>
    );
};

export default Home;