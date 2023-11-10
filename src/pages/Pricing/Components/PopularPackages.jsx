import PopularLogo from "../../../components/PopularLogo/PopularLogo";
import logo from "../../../assets/images/Pricing/PopularPackages_logo.png";
import Premium from "../../../assets/images/Pricing/PopularPackages_premium.png";
import Enterprise from "../../../assets/images/Pricing/PopularPackages_enterprise.png";

const data = [
    {
        id: 1,
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
        id: 2,
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

const PopularPackageInfo = ({ item }) => {
    const { logoImage, priceAfterDiscount, priceBeforeDiscount, discountPercentage, topFeature1, topFeature2, topFeature3, topFeature4, buttonName } = item;

    return (
        <div className="pb-6">
            <PopularLogo></PopularLogo>
            <div className="border-2 border-[#007BFE] py-5 px-8 shadow-lg rounded-3xl">
                <div className="flex flex-col text-center">
                    <img className="mx-auto pt-2 w-[175px]" src={logoImage} alt="logoImage" />
                    <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mt-5 mb-2 text-[#007BFE]">${priceAfterDiscount}.00</h2>
                    <h4 className="text-[#DEDEDE] md:text-xl text-lg font-bold pb-8"><span className="line-through">${priceBeforeDiscount}.00</span> | {discountPercentage}% OFF</h4>
                </div>
                <div>
                    <h3 className="text-lg font-bold  text-[#007BFE] pt-3 pb-8">Top Features :</h3>
                    <div className="flex flex-col gap-3 mb-7">
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
                <div className="mt-8 flex justify-center">
                    <button className="text-white bg-[#007BFE] md:w-40 w-36 mb-4 md:py-3 md:px-6 p-2 rounded-xl font-semibold">{buttonName}</button>
                </div>
            </div>
        </div>
    );
}

const PopularPackages = () => {
    return (
        <div className="lg:mt-32 md:mt-16 mt-12 mb-36 lg:mx-16 md:mx-16 mx-6">
            <div>
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Popular Packages</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center lg:mx-56">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tor</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-16 lg:mx-48 md:mx-5 mx-6 mt-24">
                {
                    data.map((item) => (
                        <PopularPackageInfo
                            item={item}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PopularPackages;