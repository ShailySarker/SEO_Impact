
const KeywordScore = () => {
    return (
        <div className="mt-28 ">
            <h2 className="font-semibold lg:text-5xl md:text-4xl text-3xl ">Your Keyword Score</h2>
            <div className="mt-16 flex flex-col justify-center items-center">
                <div className="radial-progress text-[#007BFE] transform " style={{
                    "--value": 76, "--size": "16rem", "--thickness": "1rem",
                    transform: "rotate(223.5deg)"
                }}>
                    <span style={{ transform: "rotate(136deg)"}} className="lg:text-7xl md:text-6xl text-5xl font-semibold text-black">76</span>
                </div>
                <p className="md:text-3xl text-xl font-bold text-center relative bottom-3 ">Overall Score</p>

            </div>
        </div>
    );
};

export default KeywordScore;