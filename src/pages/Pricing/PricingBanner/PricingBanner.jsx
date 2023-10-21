
const PricingBanner = () => {
    return (
        <div className="my-12">
            <h2 className="font-bold text-5xl text-center mb-20">Pricing</h2>
            <div className="lg:ml-36 md:ml-12 ml-6 grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-0 md:gap-24 gap-20">
                <div className="lg:pl-24 pr-6 md:pr-0">
                    <h2 className="font-bold md:text-5xl text-3xl text-[#007BFE] md:pb-5 pb-3">Unlock</h2>
                    <h3 className="font-bold lg:text-4xl md:text-3xl text-2xl pt-2 lg:pr-72">success with our SEO tools.</h3>
                    <p className="lg:pt-10 md:pt-8 pt-6 lg:text-4xl text-xl font-semibold text-slate-500 lg:pr-56 md:pr-24">Don’t wait just buy the plan and enjoy your success</p>
                </div>
                <div className="flex justify-end items-center">
                    <img className="md:w-[600px] w-[400px] md:h-[500px] h-[300px] relative md:left-96 left-80" src="https://i.ibb.co/1MpKpby/Group-147.png" alt="" />
                    <img className="md:w-[600px] w-[400px] md:h-[600px] h-[400px]" src="https://i.ibb.co/51nsq4L/Ellipse-42.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PricingBanner;