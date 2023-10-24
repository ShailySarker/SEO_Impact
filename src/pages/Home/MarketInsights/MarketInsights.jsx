
const MarketInsights = () => {
    return (
        <div className=" grid lg:grid-cols-2 grid-cols-1 md:pl-20 pl-6 gap-28 md:gap-36 lg:gap-0 items-center">
            <div>
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-10 text-[#212121]">Increase your <br />Market Insights</h2>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold pr-6 md:pr-40">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare. Justo curabitur iaculis id senectus sodales mattis sed mattis nisl. Phasellus ipsum ultricies.</p>
                {/* <p className="md:text-2xl text-[#757575] font-semibold pr-32 md;pr-0">Lorem ipsum dolor sit amet consectetur. Quis eget <br />vivamus neque velit enim id urna pharetra vel. <br />Sapien ut natoque facilisi tortor viverra eget. Amet <br />rhoncus leo sed nulla est senectus morbi tellus <br />ornare. Justo curabitur iaculis id senectus sodales <br />mattis sed mattis nisl. Phasellus ipsum ultricies.</p>
 */}
                <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 w-36 rounded-xl font-semibold mt-16 text-lg">Learn More</button>

            </div>
            <div className="flex justify-end">
                <div className="relative -top-16 md:-right-20 -right-12">
                    <div className="relative md:-right-60 -right-32">
                        <div className="border-2 rounded-xl md:w-64 w-40 bg-white md:py-8 py-4 md:px-6 px-3 flex flex-col justify-center">
                            <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5">200</h3>
                            <p className="font-bold">Geo Databases</p>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-12 justify-start items-start">
                        <div className="border-2 rounded-xl md:w-64 w-40 bg-white md:py-8 py-4 md:px-6 px-3 flex flex-col justify-center">
                            <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5">25B</h3>
                            <p className="font-bold">Keywords</p>
                        </div>
                        <div className="border-2 rounded-xl md:w-64 w-40 bg-white md:py-8 py-4 md:px-6 px-3 flex flex-col justify-center">
                            <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5">808M</h3>
                            <p className="font-bold">Domain Profiles</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <div className="relative md:-right-60 -right-32 border-2 rounded-xl md:w-64 w-40 bg-white md:py-8 py-4 md:px-6 px-3 flex flex-col justify-center ">
                            <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5">43T</h3>
                            <p className="font-bold">Backlinks</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img className="lg:h-[640px] md:h-[600px] h-[480px]" src="https://i.ibb.co/1vSs8Cj/Rectangle-21.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default MarketInsights;