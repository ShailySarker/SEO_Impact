import Buying from "../Buying/Buying";
import DifferentPackages from "../DifferentPackages/DifferentPackages";
import PricingBanner from "../PricingBanner/PricingBanner";
import PricingDesign from "../PricingDesign/PricingDesign";

const Pricing = () => {
    return (
        <div>
            <PricingBanner></PricingBanner>
            <PricingDesign></PricingDesign>
            <DifferentPackages></DifferentPackages>
            {/* <Buying></Buying> */}
        </div>
    );
};

export default Pricing;