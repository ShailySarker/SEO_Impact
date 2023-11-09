import logo from "../../../assets/images/Pricing/DifferentPackages/logo.png";
import Basic from "../../../assets/images/Pricing/DifferentPackages/Basic.png";
import Premium from "../../../assets/images/Pricing/DifferentPackages/Premium.png";
import Enterprise from "../../../assets/images/Pricing/DifferentPackages/Enterprise.png";


const DifferentPackages = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-20 lg:mx-16 md:mx-12 mx-6 mb-24 lg:pt-10">
            <div className="pb-6">
                <div className="border-2 py-5 px-7 rounded-3xl">
                    <div className="flex flex-col text-center border-b-2">
                        <img className="mx-auto pt-2 w-[175px]" src={Basic} alt="Basic" />
                        <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-2 text-[#007BFE]">$350.00</h2>
                        <h4 className="text-[#DEDEDE] md:text-xl text-lg font-bold pb-8"><span className="line-through">$450.00</span> | 35% OFF</h4>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mt-6">More data and insignts for growing business</h3>
                        <h3 className="text-lg font-bold  text-[#007BFE] pt-3 pb-8">Top Features :</h3>
                        <div className="flex flex-col gap-3 mb-3">
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">1 Project to optimize your website</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Track 50 keywords</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Analyze upto 2500 pages</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Unlimited PDF Reports</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="text-white bg-[#007BFE] w-40 py-3 px-6 rounded-xl font-semibold">Try Basic</button>
                </div>
            </div>
            <div className="pb-6">
                <div className="border-2 py-5 px-7 rounded-3xl">
                    <div className="flex flex-col text-center border-b-2">
                        <img className="mx-auto pt-2 w-[175px]" src={Premium} alt="Premium" />
                        <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-2 text-[#007BFE]">$850.00</h2>
                        <h4 className="text-[#DEDEDE] md:text-xl text-lg font-bold pb-8"><span className="line-through">$1050.00</span> | 35% OFF</h4>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mt-6">More data and insignts for growing business</h3>
                        <h3 className="text-lg font-bold  text-[#007BFE] pt-3 pb-8">Top Features :</h3>
                        <div className="flex flex-col gap-3 mb-3">
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">3 Project to optimize your website</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Track 200 keywords</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Analyze upto 2500 pages</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Unlimited PDF Reports</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="text-white bg-[#007BFE] w-40 py-3 px-6 rounded-xl font-semibold">Try Premium</button>
                </div>
            </div>
            <div className="pb-6">
                <div className="border-2 py-5 px-7 rounded-3xl">
                    <div className="flex flex-col text-center border-b-2">
                        <img className="mx-auto pt-2 w-[175px]" src={Enterprise} alt="Enterprise" />
                        <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-2 text-[#007BFE]">$2050.00</h2>
                        <h4 className="text-[#DEDEDE] md:text-xl text-lg font-bold pb-8"><span className="line-through">$2550.00</span> | 35% OFF</h4>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mt-6">More data and insights for growing business</h3>
                        <h3 className="text-lg font-bold  text-[#007BFE] pt-3 pb-8">Top Features :</h3>
                        <div className="flex flex-col gap-3 mb-3">
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">5 Project to optimize your website</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Track 5000 keywords</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Analyze upto 2500 pages</h3>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={logo} alt="logo" />
                                <h3 className="text-lg">Unlimited PDF Reports</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="text-white bg-[#007BFE] w-40 py-3 px-6 rounded-xl font-semibold">Try Enterprise</button>
                </div>
            </div>
        </div>
    );
};

export default DifferentPackages;