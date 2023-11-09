import Buying from "./Components/Buying";
import DemoVideo from "./Components/DemoVideo";
import DifferentPackages from "./Components/DifferentPackages";
import Guide from "./Components/Guide";
import PopularPackages from "./Components/PopularPackages";
import PricingBanner from "./Components/PricingBanner";
import PricingDesign from "./Components/PricingDesign";
import WebsiteGrowth from "./Components/WebsiteGrowth";

const Pricing = () => {
    return (
        <div>
            <PricingBanner></PricingBanner>
            <PricingDesign></PricingDesign>
            <Guide></Guide>
            <DifferentPackages></DifferentPackages>
            <PopularPackages></PopularPackages>
            <WebsiteGrowth></WebsiteGrowth>
            <DemoVideo></DemoVideo>
            <Buying></Buying>
        </div>
    );
};

export default Pricing;