
const PurposeBox = () => {
    return (
        <div>
            <div className="bg-[#007BFE] md:w-52 w-40 h-40 md:h-52 rounded-full flex mx-auto ">
            </div>

            <div className="grid grid-cols-2 md:gap-16 gap-10 relative md:bottom-80 bottom-[200px] ">
                <div className="bg-[#EBF5FF] rounded-xl md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE] transition duration-300 ease-in-out hover:bg-[#007BFE] hover:text-white">
                    <h3 className="md:text-3xl text-xl font-semibold p-5 ">Easily Usable </h3>
                </div>
                <div className="bg-[#EBF5FF] rounded-xl md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE] transition duration-300 ease-in-out hover:bg-[#007BFE] hover:text-white">
                    <h3 className="md:text-3xl text-xl font-semibold p-5 ">Quick Service</h3>
                </div>
                <div className="bg-[#EBF5FF] rounded-xl md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE] transition duration-300 ease-in-out hover:bg-[#007BFE] hover:text-white">
                    <h3 className="md:text-3xl text-xl font-semibold p-5 ">Trustable </h3>
                </div>
                <div className="bg-[#EBF5FF] rounded-xl md:h-48 flex justify-center items-center shadow-lg text-center border-2 border-[#007BFE] transition duration-300 ease-in-out hover:bg-[#007BFE] hover:text-white">
                    <h3 className="md:text-3xl text-xl font-semibold p-5 ">Better Result </h3>
                </div>
            </div>

        </div>
    );
};

export default PurposeBox;