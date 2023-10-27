import Buying from "../Buying/Buying";
import DifferentPackages from "../DifferentPackages/DifferentPackages";
import Guide from "../Guide/Guide";
import PricingBanner from "../PricingBanner/PricingBanner";
import PricingDesign from "../PricingDesign/PricingDesign";

const Pricing = () => {
    return (
        <div>
            <PricingBanner></PricingBanner>
            <PricingDesign></PricingDesign>
            <Guide></Guide>
            <DifferentPackages></DifferentPackages>
            <Buying></Buying>
        </div>
    );
};

export default Pricing;