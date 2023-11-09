const data = [
    {
        id: 1,
        stepNo: "Step_01",
        stepTitle: "Visit Different Packages Section"
    },
    {
        id: 2,
        stepNo: "Step_02",
        stepTitle: "Choose Your Suitable One"

    },
    {
        id: 3,
        stepNo: "Step_03",
        stepTitle: "Complete the Process of Buying"

    }
];

const StepInfo = ({ stepNo, stepTitle }) => {
    return (
        <div className="flex items-center lg:justify-center lg:gap-8 gap-12 ">
            <div>
                <h2 className="md:text-3xl text-xl font-semibold text-[#007BFE]">{stepNo}:</h2>
            </div>
            <div className="bg-[#EBF5FF] rounded-xl flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE] w-full transition duration-300 ease-in-out hover:bg-[#007BFE] hover:text-white transform hover:scale-105">
                <h3 className="md:text-3xl text-xl font-semibold p-5 ">{stepTitle}</h3>
            </div>
        </div>
    );
};
const Guide = () => {
    return (
        <div className="lg:mt-32 md:mt-16 mt-12 mb-36 lg:mx-16 md:mx-16 mx-6 grid lg:grid-cols-2 grid-cols-1 gap-20 items-center">
            <div>
                <h3 className="lg:text-start text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Guide</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:text-start text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare. Justo curabitur iaculis id senectus sodales mattis sed mattis nisl. Phasellus ipsum ultricies.</p>
            </div>
            <div className="flex flex-col gap-10">
                {
                    data.map((item) => (
                        <StepInfo
                            stepNo={item.stepNo}
                            stepTitle={item.stepTitle}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div >
    );
};

export default Guide;