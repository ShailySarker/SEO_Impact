import PurposeBox from "../../../components/PurposeBox/PurposeBox";

const Purpose = () => {
    return (
        <div className="lg:mt-40 md:mt-28 mt-12 mb-28 md:mx-16 mx-6 ">
            <div className="relative md:-mb-[310px] -mb-[200px]">
                {/* <div className="bg-[#007BFE] md:w-52 w-40 h-40 md:h-52 rounded-full flex mx-auto relative lg:left-[310px] md:top-[633px] lg:top-80 md:-mt-[300px] top-[595px] -mt-[200px]">
                </div> */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-24 items-center ">
                    <div className="relative lg:bottom-52 md:bottom-28 bottom-10">
                        <h3 className=" font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Purpose</h3>
                        <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare. Justo curabitur iaculis id senectus sodales mattis sed mattis nis</p>
                    </div>
                    <PurposeBox></PurposeBox>

                    {/* <div className="grid grid-cols-2 md:gap-16 gap-10 ">
                        <div className="bg-[#EBF5FF] hover:bg-[#007BFE] hover:text-white rounded-xl md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE]">
                            <h3 className="md:text-3xl text-xl font-semibold p-5 ">Easily Usable </h3>
                        </div>
                        <div className="bg-[#EBF5FF] hover:bg-[#007BFE] hover:text-white rounded-xl md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE]">
                            <h3 className="md:text-3xl text-xl font-semibold p-5 ">Quick Service</h3>
                        </div>
                        <div className="bg-[#EBF5FF] hover:bg-[#007BFE] hover:text-white rounded-xl md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE]">
                            <h3 className="md:text-3xl text-xl font-semibold p-5 ">Trustable </h3>
                        </div>
                        <div className="bg-[#EBF5FF] hover:bg-[#007BFE] hover:text-white rounded-xl md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE]">
                            <h3 className="md:text-3xl text-xl font-semibold p-5 ">Better Result </h3>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Purpose;