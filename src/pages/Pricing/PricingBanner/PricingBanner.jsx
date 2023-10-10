
const PricingBanner = () => {
    return (
        <div className="my-12">
            <h2 className="font-bold text-5xl text-center mb-20">Pricing</h2>
            <div className="ml-40 grid grid-cols-2 items-center">
                <div className="pl-24">
                    <h2 className="font-bold text-5xl text-[#007BFE] pb-5">Unlock</h2>
                    <h3 className="font-bold text-4xl pt-2">success with <br />our SEO tools.</h3>
                    <p className="pt-10 text-4xl font-semibold text-slate-500">Don’t wait just buy <br />the plan and enjoy <br />your success</p>
                </div>
                <div className="flex justify-end items-center">
                    <img className="w-[600px] h-[500px] relative left-96" src="https://i.ibb.co/1MpKpby/Group-147.png" alt="" />
                    <img className="w-[600px] h-[600px]" src="https://i.ibb.co/51nsq4L/Ellipse-42.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PricingBanner;