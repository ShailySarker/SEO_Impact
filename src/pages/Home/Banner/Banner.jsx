
const Banner = () => {
    return (
        <div className="grid grid-cols-2 px-28 py-16 gap-20 items-center">
            <div className="p-12">
                <img className="w-64" src="https://i.ibb.co/5BLCp4c/Introducing.png" alt="" />
                <h2 className="text-[#379FFF] font-bold text-5xl mt-5 mb-7 ">SEO Impact</h2>
                <p className="pr-16 text-lg text-slate-500 mb-8">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                <div className="flex gap-4 items-center">
                    <button className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold">Get Started</button>
                    <img src="https://i.ibb.co/X3x2gSV/carbon-arrow-up.png" alt="" />
                    <p className="text-slate-400">Click here to know more!</p>

                </div>
                <div className="mt-12 flex flex-col">
                    <input className="py-4 px-7 border-2 rounded-lg" type="text" name="enterWebsite" id="" placeholder="Enter your website here...." />
                    <button className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold mt-5 mx-44 ">Check Score</button>
                </div>
            </div>
            <div>
                <img className="" src="https://i.ibb.co/V2HrT1r/Group-11.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;