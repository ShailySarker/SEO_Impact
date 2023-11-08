import NewLogo from "../../../components/NewLogo/NewLogo";
const data = [
    {
        id: 1,
        title: "Snippet Generator",
        description: "A Snippet Generator is a tool that helps optimize search engine result snippets, improving click-through rates and enhancing SEO impact."
    },
    {
        id: 2,
        title: "Keyword Research Tool",
        description: "A Keyword Research Tool enhances SEO by identifying valuable keywords for content optimization."
    },
    {
        id: 3,
        title: "Ranking Checker",
        description: "A Ranking Checker is a tool that assesses a website’s position in search engine results, helping SEO efforts by tracking keyword rankings."
    }
];

const InformationDetails = ({ title, description }) => {
    return (
        <div>
            <NewLogo></NewLogo>
            <div className="border-2 shadow-lg py-10 px-7 rounded-xl lg:h-[450px]">
                <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center mb-3">{title}</h2>`
                <p className="text-lg  text-[#757575] font-medium mb-12">{description}</p>
                <div className="card-actions justify-center">
                    <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl font-semibold md:w-auto w-24">Try Now</button>
                </div>
            </div>
        </div>
    )
}

const WhatIsNew = () => {
    return (
        <div className="lg:mt-10 md:mt-12 mt-8 pb-28 lg:mx-36 md:mx-16 mx-6">
            <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">What’s <span className="text-[rgb(0,123,254)]">New?</span></h3>
            <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold md:text-center text-start">New features refer to the latest additions or improvements in a service. They enhance functionality, offer fresh capabilities, and often provide a better user experience. In software, new features can include additional tools, improved performance, and updated designs, keeping products up-to-date and competitive. Let’s introduce our new features:</p>
            <div className="mt-20 md:mr-0 mr-8">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-16">
                    {
                        data.map((item) => (
                            <InformationDetails
                                title={item.title}
                                description={item.description}
                                key={item.id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WhatIsNew;