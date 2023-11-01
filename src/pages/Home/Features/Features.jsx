import FeatureSectionSearchBar from "../../../components/FeatureSectionSearchBar/FeatureSectionSearchBar";

const Features = () => {
    return (
        <div className="md:mt-32 mt-12 lg:mt-0 md:mb-0">
            <div className="bg-[#007BFE] lg:pt-12 md:pt-8 pt-8 pb-56 md:pb-44 items-center flex lg:gap-80 md:flex-row flex-col relative">
                <div className="md:justify-start lg:w-auto md:w-72 w-24">
                    <FeatureSectionSearchBar></FeatureSectionSearchBar>
                </div>
                <div className="">
                    <h3 className="text-white text-3xl font-bold md:pt-16 lg:pt-0">“See What’s Inside”</h3>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-5 p-4 md:gap-8  lg:p-12 md:p-8 border-2 rounded-3xl absolute -mt-44 mb-96 bg-white justify-center items-center lg:mx-28 md:mx-16 mx-8">
                <div>
                    <img src="https://i.ibb.co/F6JGYmS/Frame-3.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/qdLDLvy/Frame-4.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/XXZs8L4/Frame-3-1.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/JBKL698/Frame-7.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;