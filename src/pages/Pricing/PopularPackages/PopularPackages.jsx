import PopularLogo from "../../../components/PopularLogo/PopularLogo";
import logo from "../../../assets/images/Pricing/PopularPackages/logo.png";
import Premium from "../../../assets/images/Pricing/PopularPackages/Premium.png";
import Enterprise from "../../../assets/images/Pricing/PopularPackages/Enterprise.png";


const PopularPackages = () => {
    return (
        <div className="lg:mt-32 md:mt-16 mt-12 mb-36 lg:mx-16 md:mx-16 mx-6">
            <div>
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Popular Packages</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center lg:mx-56">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tor</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-16 lg:mx-48 md:mx-5 mx-6 mt-24">
                <div className="pb-6">
                    <PopularLogo></PopularLogo>
                    <div className="border-2 border-[#007BFE] py-5 px-8 shadow-lg rounded-3xl">
                        <div className="flex flex-col text-center">
                            <img className="mx-auto pt-2 w-[175px]" src={Premium} alt="Premium" />
                            <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-2 text-[#007BFE]">$850.00</h2>
                            <h4 className="text-[#DEDEDE] md:text-xl text-lg font-bold pb-8"><span className="line-through">1050.00</span> | 35% OFF</h4>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold  text-[#007BFE] pt-3 pb-8">Top Features :</h3>
                            <div className="flex flex-col gap-3 mb-7">
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
                        <div className="mt-8 flex justify-center">
                            <button className="text-white bg-[#007BFE] md:w-40 w-36 mb-4 md:py-3 md:px-6 p-2 rounded-xl font-semibold">Try Premium</button>
                        </div>
                    </div>
                </div>
                <div className="pb-6">
                    <PopularLogo></PopularLogo>
                    <div className="border-2 border-[#007BFE] py-5 px-8 shadow-lg rounded-3xl">
                        <div className="flex flex-col text-center">
                            <img className="mx-auto pt-2 w-[175px]" src={Enterprise} alt="Enterprise" />
                            <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-2 text-[#007BFE]">$2050.00</h2>
                            <h4 className="text-[#DEDEDE] md:text-xl text-lg font-bold pb-8"><span className="line-through">$2550.00</span> | 35% OFF</h4>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold  text-[#007BFE] pt-3 pb-8">Top Features :</h3>
                            <div className="flex flex-col gap-3 mb-7">
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
                        <div className="mt-8 flex justify-center">
                            <button className="text-white bg-[#007BFE] md:w-40 w-36 mb-4 md:py-3 md:px-6 p-2 rounded-xl font-semibold">Try Enterprise</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularPackages;