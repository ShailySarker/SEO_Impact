import FeatureSectionSearchBar from "../../../components/FeatureSectionSearchBar/FeatureSectionSearchBar";

const Features = () => {
    return (
        <div className="">
            <div className="bg-[#007BFE] pt-12 pb-44 items-center flex gap-80 relative">
                <div className=" justify-start">
                    <FeatureSectionSearchBar></FeatureSectionSearchBar>
                </div>
                <div className="">
                    <h3 className="text-white text-3xl font-bold">“See What’s Inside”</h3>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-12 mx-28 p-12 border-2 rounded-3xl absolute -mt-44 mb-96 bg-white ">
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