import FeatureSectionSearchBar from "../../../components/Others/FeatureSectionSearchBar/FeatureSectionSearchBar";
import feature1 from '../../../assets/images/Home/Features_feature1.png';
import feature2 from '../../../assets/images/Home/Features_feature2.png';
import feature3 from '../../../assets/images/Home/Features_feature3.png';
import feature4 from '../../../assets/images/Home/Features_feature4.png';

const Features = () => {
    return (
        <div className="md:mt-32 mt-12 lg:mt-0 md:mb-0">
            <div className="bg-[#007BFE] lg:pt-12 md:pt-8 pt-8 pb-56 md:pb-44 items-center flex lg:gap-80 md:flex-row flex-col relative">
                <div className="md:justify-start lg:w-auto md:w-72 w-24">
                    <FeatureSectionSearchBar/>
                </div>
                <div className="">
                    <h3 className="text-white text-3xl font-bold md:pt-16 lg:pt-0">“See What’s Inside”</h3>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-5 p-4 md:gap-8  lg:p-12 md:p-8 border-2 rounded-3xl absolute -mt-44 mb-96 bg-white justify-center items-center lg:mx-28 md:mx-16 mx-8">
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

export default Features;