import logo from "../../../assets/images/Pricing/DifferentPackages_logo.png";
import Basic from "../../../assets/images/Pricing/DifferentPackages_basic.png";
import Premium from "../../../assets/images/Pricing/DifferentPackages_premium.png";
import Enterprise from "../../../assets/images/Pricing/DifferentPackages_enterprise.png";


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
                        <h3 className="text-lg font-bold mt-6">More data and insights for growing business</h3>
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
                        <h3 className="text-lg font-bold mt-6">More data and insights for growing business</h3>
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

{/**
import logo from "../../../assets/images/Pricing/DifferentPackages_logo.png";
import Basic from "../../../assets/images/Pricing/DifferentPackages_basic.png";
import Premium from "../../../assets/images/Pricing/DifferentPackages_premium.png";
import Enterprise from "../../../assets/images/Pricing/PopularPackages_enterprise.png";

const data = [
    {
        id: 1,
        logoImage: {Basic},
        priceAfterDiscount: 350,
        priceBeforeDiscount: 450,
        discountPercentage: 35,
        title: "More data and insights for growing business",
        topFeature1: "1 Project to optimize your website",
        topFeature2: "Track 50 keywords",
        topFeature3: "Analyze upto 2500 pages",
        topFeature4: "Unlimited PDF Reports",
    },
    {
        id: 2,
        logoImage: { Premium },
        priceAfterDiscount: 850,
        priceBeforeDiscount: 1050,
        discountPercentage: 35,
        title: "More data and insights for growing business",
        topFeature1: "3 Project to optimize your website",
        topFeature2: "Track 200 keywords",
        topFeature3: "Analyze upto 2500 pages",
        topFeature4: "Unlimited PDF Reports",
    },
    {
        id: 3,
        logoImage: { Enterprise },
        priceAfterDiscount: 2050,
        priceBeforeDiscount: 2550,
        discountPercentage: 35,
        title: "More data and insights for growing business",
        topFeature1: "5 Project to optimize your website",
        topFeature2: "Track 5000 keywords",
        topFeature3: "Analyze upto 2500 pages",
        topFeature4: "Unlimited PDF Reports",
    }
];

const DifferentPackagesInfo = ({ item }) => {
    const { logoImage, priceAfterDiscount, priceBeforeDiscount, discountPercentage, title, topFeature1, topFeature2, topFeature3, topFeature4 } = item;
    console.log(item)
    return (
        <div className="pb-6">
            <div className="border-2 py-5 px-7 rounded-3xl">
                <div className="flex flex-col text-center border-b-2">
                    <img className="mx-auto pt-2 w-[175px]" src={logoImage} alt="package logo" />
                    <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-2 text-[#007BFE]">${priceAfterDiscount}.00</h2>
                    <h4 className="text-[#DEDEDE] md:text-xl text-lg font-bold pb-8"><span className="line-through">${priceBeforeDiscount}.00</span> | {discountPercentage}% OFF</h4>
                </div>
                <div>
                    <h3 className="text-lg font-bold mt-6">{title}</h3>
                    <h3 className="text-lg font-bold  text-[#007BFE] pt-3 pb-8">Top Features :</h3>
                    <div className="flex flex-col gap-3 mb-3">
                        <div className="flex gap-5 items-center">
                            <img src={logo} alt="logo" />
                            <h3 className="text-lg">{topFeature1}</h3>
                        </div>
                        <div className="flex gap-5 items-center">
                            <img src={logo} alt="logo" />
                            <h3 className="text-lg">{topFeature2}</h3>
                        </div>
                        <div className="flex gap-5 items-center">
                            <img src={logo} alt="logo" />
                            <h3 className="text-lg">{topFeature3}</h3>
                        </div>
                        <div className="flex gap-5 items-center">
                            <img src={logo} alt="logo" />
                            <h3 className="text-lg">{topFeature4}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <button className="text-white bg-[#007BFE] w-40 py-3 px-6 rounded-xl font-semibold">Try Basic</button>
            </div>
        </div>
    );
};

const DifferentPackages = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-20 lg:mx-16 md:mx-12 mx-6 mb-24 lg:pt-10">
            {
                data.map((item) => (
                    <DifferentPackagesInfo
                        item={item}
                        key={item.id}
                    />
                ))
            }
            <div className="pb-6">
                <div className="border-2 py-5 px-7 rounded-3xl">
                    <div className="flex flex-col text-center border-b-2">
                        <img className="mx-auto pt-2 w-[175px]" src={Basic} alt="Basic" />
                        <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-2 text-[#007BFE]">$350.00</h2>
                        <h4 className="text-[#DEDEDE] md:text-xl text-lg font-bold pb-8"><span className="line-through">$450.00</span> | 35% OFF</h4>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mt-6">More data and h for growing business</h3>
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
            
            </div>
            );
        };
        
        export default DifferentPackages;

*/}