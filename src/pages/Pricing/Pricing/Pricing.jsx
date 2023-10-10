import DifferentPackages from "../DifferentPackages/DifferentPackages";
import PricingBanner from "../PricingBanner/PricingBanner";
import PricingDesign from "../PricingDesign/PricingDesign";

const Pricing = () => {
    return (
        <div>
            <PricingBanner></PricingBanner>
            <PricingDesign></PricingDesign>
            <DifferentPackages></DifferentPackages>
        </div>
    );
};

export default Pricing;