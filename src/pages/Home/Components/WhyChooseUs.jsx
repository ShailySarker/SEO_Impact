const data = [
    {
        id: 1,
        title: "Easily Usable"
    },
    {
        id: 2,
        title: "Quick Service"
    },
    {
        id: 3,
        title: "Trustable"
    },
    {
        id: 4,
        title: "Better Result"
    },
]

const ReasonForChoosing = ({ title }) => {
    return (
        <div>
            <div className="bg-[#EBF5FF] rounded-xl lg:w-60 md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE] transition duration-300 ease-in-out hover:bg-[#007BFE] hover:text-white transform hover:scale-105">
                <h3 className="md:text-3xl text-xl font-semibold p-5 ">{title}</h3>
            </div>
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <div className="lg:mt-32 md:mt-16 mt-12 mb-28 lg:mx-36 md:mx-16 mx-6">
            <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Why Choose Us?</h3>
            <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare. Justo curabitur iaculis id senectus sodales mattis sed mattis nisl. Phasellus ipsum ultricies.</p>
            <div className="md:mt-24 mt-16 grid lg:grid-cols-4 lg:justify-evenly  grid-cols-2 md:gap-20 gap-10 lg:gap-0">
                {
                    data.map((item) => (
                        <ReasonForChoosing
                            title={item.title}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;