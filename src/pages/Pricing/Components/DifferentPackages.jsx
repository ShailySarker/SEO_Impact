import logo from "../../../assets/images/Pricing/DifferentPackages_logo.png";
import Basic from "../../../assets/images/Pricing/DifferentPackages_basic.png";
import Premium from "../../../assets/images/Pricing/DifferentPackages_premium.png";
import Enterprise from "../../../assets/images/Pricing/DifferentPackages_enterprise.png";

const differentPackagesData = [
    {
        id: 1,
        logoImage: Basic,
        priceAfterDiscount: 350,
        priceBeforeDiscount: 450,
        discountPercentage: 35,
        title: "More data and insights for growing business",
        topFeature1: "1 Project to optimize your website",
        topFeature2: "Track 50 keywords",
        topFeature3: "Analyze upto 2500 pages",
        topFeature4: "Unlimited PDF Reports",
        buttonName: "Try Basic"
    },
    {
        id: 2,
        logoImage: Premium,
        priceAfterDiscount: 850,
        priceBeforeDiscount: 1050,
        discountPercentage: 35,
        title: "More data and insights for growing business",
        topFeature1: "3 Project to optimize your website",
        topFeature2: "Track 200 keywords",
        topFeature3: "Analyze upto 2500 pages",
        topFeature4: "Unlimited PDF Reports",
        buttonName: "Try Premium"
    },
    {
        id: 3,
        logoImage: Enterprise,
        priceAfterDiscount: 2050,
        priceBeforeDiscount: 2550,
        discountPercentage: 35,
        title: "More data and insights for growing business",
        topFeature1: "5 Project to optimize your website",
        topFeature2: "Track 5000 keywords",
        topFeature3: "Analyze upto 2500 pages",
        topFeature4: "Unlimited PDF Reports",
        buttonName: "Try Enterprise"
    }
];

const DifferentPackageInfo = ({ item }) => {
    const { logoImage, priceAfterDiscount, priceBeforeDiscount, discountPercentage, title, topFeature1, topFeature2, topFeature3, topFeature4, buttonName } = item;

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
                <button className="text-white bg-[#007BFE] w-40 py-3 px-6 rounded-xl font-semibold">{buttonName}</button>
            </div>
        </div>
    );
};

const DifferentPackages = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-20 lg:mx-16 md:mx-12 mx-6 mb-24 lg:pt-10">
            {
                differentPackagesData.map((item) => (
                    <DifferentPackageInfo
                        item={item}
                        key={item.id}
                    />
                ))
            }
        </div>
    );
};

export default DifferentPackages;

