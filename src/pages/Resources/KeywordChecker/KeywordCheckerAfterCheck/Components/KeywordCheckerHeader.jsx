
const KeywordCheckerHeader = () => {
    return (
        <div>
            <h2 className="font-semibold lg:text-5xl md:text-4xl text-3xl md:text-start text-center">Keyword Checker</h2>
            <div className="md:mt-24 mt-20 flex flex-col items-center md:gap-10 gap-5">
                <input className="border-2 py-3 px-7 md:w-96 w-72 rounded-lg" type="search" name="" id="" placeholder="Google" disabled />
                <input className="border-2 py-3 px-7 md:w-96 w-72 rounded-lg" type="search" name="" id="" placeholder="www.google.co.in" disabled />

                <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl w-36 font-semibold mt-8">Check</button>

            </div>
        </div>
    );
};

export default KeywordCheckerHeader;