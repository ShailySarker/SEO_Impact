import "./FeaturesAdvertising.css";

const data = [
    {
        id: 1,
        title: "Get Best Deal !!"
    },
    {
        id: 2,
        title: "Get Best Deal !!"
    },
    {
        id: 4,
        title: "Get Best Deal !!"
    },
    {
        id: 5,
        title: "Get Best Deal !!"
    },
    {
        id: 6,
        title: "Get Best Deal !!"
    },
    {
        id: 7,
        title: "Get Best Deal !!"
    },
    {
        id: 8,
        title: "Get Best Deal !!"
    },
    {
        id: 9,
        title: "Get Best Deal !!"
    },
    {
        id: 10,
        title: "Get Best Deal !!"
    },
    {
        id: 11,
        title: "Get Best Deal !!"
    },
    {
        id: 12,
        title: "Get Best Deal !!"
    }
];

const Slider = ({ title }) => {
    return (
        <div className='slide'>
            <div className="mainBox bg-[#EBF5FF] rounded-lg flex justify-center items-center">
                <h3 className="md:text-3xl text-2xl font-semibold p-5 text-center">
                    {title}
                </h3>
            </div>
        </div>
    );
};

const FeaturesAdvertising = () => {
    return (
        <div className='baseStyling'>
            <div className='slider'>
                <div className='slide-track'>
                    {
                        data.map((item) => (
                            <Slider
                                title={item.title}
                                key={item.id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturesAdvertising;