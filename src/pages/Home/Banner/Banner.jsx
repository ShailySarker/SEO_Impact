
const Banner = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-28 lg:py-16 lg:gap-20 md:gap-7 gap-5 items-center">
            <div className="md:p-12 p-6">
                <img className="md:w-64 w-48" src="https://i.ibb.co/5BLCp4c/Introducing.png" alt="" />
                <h2 className="text-[#379FFF] font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-7 ">SEO Impact</h2>
                <p className="pr-16 md:text-lg text-slate-500 mb-8">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                <div className="flex md:gap-5 gap-3 items-center">
                    <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl font-semibold">Get Started</button>
                    <img src="https://i.ibb.co/X3x2gSV/carbon-arrow-up.png" alt="" />
                    <p className="text-slate-400">Click here to know more!</p>

                </div>
                <div className="mt-12 flex flex-col">
                    <input className="md:ml-40 lg:ml-0 md:py-4 md:px-7 p-2 border-2 rounded-lg lg:w-auto md:w-96" type="text" name="enterWebsite" id="" placeholder="Enter your website here...." />
                    <button className="text-white bg-[#007BFE] md:py-3 md:px-6 rounded-xl font-semibold mt-6 md:w-40 w-32 ml-16 p-2 lg:ml-44 md:ml-[270px] text-center ">Check Score</button>
                </div>
            </div>
            <div>
                <img className="lg:w-auto md:w-3/4 md:ml-32 lg:ml-0 md:p-0 p-6" src="https://i.ibb.co/V2HrT1r/Group-11.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;