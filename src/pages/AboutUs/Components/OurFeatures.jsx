import feature1 from "../../../assets/images/AboutUs/OurFeatures_feature1.png";
import feature2 from "../../../assets/images/AboutUs/OurFeatures_feature2.png";
import feature3 from "../../../assets/images/AboutUs/OurFeatures_feature3.png";
import feature4 from "../../../assets/images/AboutUs/OurFeatures_feature4.png";


const OurFeatures = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-12 lg:mx-44 mx-16 md:mt-0 mt-16 lg:p-12 md:p-8 mb-12 md:mb-20">
                <div>
                    <img src={feature1} alt="feature1" />
                </div>
                <div>
                    <img src={feature2} alt="feature2" />
                </div>
                <div>
                    <img src={feature3} alt="feature3" />
                </div>
                <div>
                    <img src={feature4} alt="feature4" />
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;