
const AboutUsBanner = () => {
    return (
        <div className="my-12">
            <h2 className="font-bold text-5xl text-center mb-36">About Us</h2>
            <div className="grid grid-cols-2 gap-36 items-center">
                <div className="ml-28">
                    <h2 className="font-bold text-5xl pb-10">SEO Impact</h2>
                    <h4 className="text-2xl font-semibold text-slate-400 pb-20 pr-28">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h4>
                    <button className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold">Learn More</button>

                </div>
                <div>
                    <img src="https://i.ibb.co/YNmfjxB/pana.png" alt="" />
                </div>
            </div>
            <div className=" my-36">
                <img src="https://i.ibb.co/d4WCd6z/Vector-10.png" alt="" />
            </div>
        </div>
    );
};

export default AboutUsBanner;