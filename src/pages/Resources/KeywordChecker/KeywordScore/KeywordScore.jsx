
const KeywordScore = () => {
    return (
        <div className="mt-28 ">
            <h2 className="font-semibold text-5xl">Your Keyword Score</h2>
            <div className="mt-16 flex flex-col justify-center items-center">
                <div className="radial-progress text-[#007BFE] transform " style={{
                    "--value": 76, "--size": "16rem", "--thickness": "1rem",
                    transform: "rotate(223.5deg)"
                }}>
                    <span style={{ transform: "rotate(136deg)"}} className="text-7xl font-semibold text-black">76</span>
                </div>
                <p className="text-3xl font-bold text-center relative bottom-3 ">Overall Score</p>

            </div>
        </div>
    );
};

export default KeywordScore;