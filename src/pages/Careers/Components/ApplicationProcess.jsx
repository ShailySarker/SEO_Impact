const data = [
    {
        id: 1,
        stepNo: "Step_01",
        title: "Explore Our Job and Internship Lists"
    },
    {
        id: 2,
        stepNo: "Step_02",
        title: "Read All Requirements Carefully"
    },
    {
        id: 3,
        stepNo: "Step_03",
        title: "Choose Your Suitable Job/Internship"
    },
    {
        id: 4,
        stepNo: "Step_04",
        title: "Complete the Applying Process"
    }
];

const ApplicationProcessInfo = ({ item }) => {
    return (
        <div className="flex items-center lg:justify-center lg:gap-8 md:gap-12 gap-7 ">
            <div>
                <h2 className="md:text-3xl text-xl font-semibold text-[#007BFE]">{item.stepNo}:</h2>
            </div>
            <div className="bg-[#EBF5FF] hover:bg-[#007BFE] hover:text-white rounded-xl flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE] w-full transform transition-transform duration-700 ease-in-out">
                <h3 className="md:text-3xl text-xl font-semibold p-5 ">{item.title}</h3>
            </div>
        </div>
    );
};

const ApplicationProcess = () => {
    return (
        <div className="lg:mt-32 md:mt-16 pt-5 mb-36 lg:mx-16 md:mx-16 mx-6 grid grid-cols-1 gap-28 items-center">
            <div>
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Application Process</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-12 lg:mx-32 md:mx-12">
                {
                    data.map((item) => (
                        <ApplicationProcessInfo
                            item={item}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div >
    );
};

export default ApplicationProcess;