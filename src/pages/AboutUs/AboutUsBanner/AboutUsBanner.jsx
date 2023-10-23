
const AboutUsBanner = () => {
    return (
        <div className="my-12">
            <h2 className="font-bold text-5xl text-center lg:mb-36 mb-24 ">About Us</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-36 gap-24 items-center lg:mx-0 md:mx-16 mx-6 mb-10">
                <div className="lg:ml-28">
                    <h2 className="font-bold md:text-5xl text-3xl pb-10">SEO Impact</h2>
                    <h4 className="md:text-2xl text-lg font-semibold text-slate-400 md:pb-20 pb-16 lg:pr-28">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h4>
                    <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 w-28 md:w-36 rounded-xl font-semibold">Learn More</button>

                </div>
                <div className="md:px-12 lg:px-0">
                    <img src="https://i.ibb.co/YNmfjxB/pana.png" alt="" />
                </div>
            </div>
            <div className=" md:py-40 py-20">
                <img src="https://i.ibb.co/d4WCd6z/Vector-10.png" alt="" />
            </div>
        </div>
    );
};

export default AboutUsBanner;