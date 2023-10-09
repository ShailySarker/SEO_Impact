
const MarketInsights = () => {
    return (
        <div className=" grid grid-cols-2 pl-20 items-center">
            <div>
                <h2 className="text-5xl font-bold mb-10 text-[#212121]">Increase your <br />Market Insights</h2>
                <p className="text-2xl text-[#757575] font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget <br />vivamus neque velit enim id urna pharetra vel. <br />Sapien ut natoque facilisi tortor viverra eget. Amet <br />rhoncus leo sed nulla est senectus morbi tellus <br />ornare. Justo curabitur iaculis id senectus sodales <br />mattis sed mattis nisl. Phasellus ipsum ultricies.</p>

                <button className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold mt-16">Learn More</button>

            </div>
            <div className="flex justify-end">
                <div className="relative -top-16 -right-20">
                    <div className="relative -right-60">
                        <div className="border-2 rounded-xl w-64 bg-white py-8 px-6 flex flex-col justify-center">
                            <h3 className="text-5xl font-bold mb-5">200</h3>
                            <p className="font-bold">Geo Databases</p>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-12 justify-start items-start">
                        <div className="border-2 rounded-xl w-64 bg-white py-8 px-6 flex flex-col justify-center">
                            <h3 className="text-5xl font-bold mb-5">25B</h3>
                            <p className="font-bold">Keywords</p>
                        </div>
                        <div className="border-2 rounded-xl w-64 bg-white py-8 px-6 flex flex-col justify-center">
                            <h3 className="text-5xl font-bold mb-5">808M</h3>
                            <p className="font-bold">Domain Profiles</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <div className="relative -right-60 border-2 rounded-xl w-64 bg-white py-8 px-6 flex flex-col justify-center ">
                            <h3 className="text-5xl font-bold mb-5">43T</h3>
                            <p className="font-bold">Backlinks</p>
                        </div>
                    </div>
                </div>
                <div className="h-[500px]">
                    <img className="" src="https://i.ibb.co/1vSs8Cj/Rectangle-21.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default MarketInsights;