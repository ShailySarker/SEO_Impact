import Buying from "../Buying/Buying";
import DifferentPackages from "../DifferentPackages/DifferentPackages";
import Guide from "../Guide/Guide";
import PopularPackages from "../PopularPackages/PopularPackages";
import PricingBanner from "../PricingBanner/PricingBanner";
import PricingDesign from "../PricingDesign/PricingDesign";
import WebsiteGrowth from "../WebsiteGrowth/WebsiteGrowth";

const Pricing = () => {
    return (
        <div>
            <PricingBanner></PricingBanner>
            <PricingDesign></PricingDesign>
            <Guide></Guide>
            <DifferentPackages></DifferentPackages>
            <PopularPackages></PopularPackages>
            <WebsiteGrowth></WebsiteGrowth>
            <Buying></Buying>
        </div>
    );
};

export default Pricing;