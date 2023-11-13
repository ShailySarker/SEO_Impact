import DeleteRound from '../../../../../components/DeleteRound/DeleteRound';
import ProgressBarRed from '../../../../../components/ProgressBarRed/ProgressBarRed';
import SearchBarRound from '../../../../../components/SearchBarRound/SearchBarRound';
import ProgressBarCyan from '../../../../../components/ProgressBarCyan/ProgressBarCyan';
import ProgressBarPurple from '../../../../../components/ProgressBarPurple/ProgressBarPurple';
import ProgressBarAmber from '../../../../../components/ProgressBarAmber/ProgressBarAmber';
import mackbook from '../../../../../assets/images/Resources/RankingChecker/RankingCheckerAfterCheck/RankingCheckerResultingOverview_macbook.png';


const RankingCheckerResultingOverview = () => {
    return (
        <div>
            <h4 className="font-semibold lg:text-3xl md:text-2xl text-xl lg:text-start text-center">Your results for cbb.coastalbroadband.in </h4>
            <div className="my-20 flex flex-col justify-center items-center">
                <div className="radial-progress text-[#007BFE] transform " style={{
                    "--value": 76, "--size": "16rem", "--thickness": "1rem",
                    transform: "rotate(223.5deg)"
                }}>
                    <span style={{ transform: "rotate(136deg)" }} className="lg:text-7xl md:text-6xl text-5xl font-semibold text-black">76</span>
                </div>
                <p className="lg:text-3xl md:text-2xl text-xl font-bold text-center relative bottom-3 ">Overall Score</p>
            </div>
            <div className="border-2 py-12 lg:px-16 md:px-0  rounded-xl">
                <div>
                    <img className="mx-auto md:w-auto w-60" src={mackbook} alt="mackbook" />
                    <h4 className="text-center mt-16 mb-5 font-semibold md:text-2xl text-lg">https://cbb.coastalbroadband.in</h4>
                    <h5 className="md:text-xl font-semibold text-center text-slate-500 border-b-2 pb-11">August 25 16:00:34</h5>
                </div>
                <div className="mt-16 lg:px-16 px-8">
                    <div className="flex justify-between items-center md:flex-row flex-col gap-4">
                        <div className="flex items-center gap-6">
                            <DeleteRound />
                            <h3 className="font-semibold text-xl">Performance</h3>

                        </div>
                        <div className="">
                            <ProgressBarRed />
                        </div>
                    </div>
                    <div className="flex justify-between items-center md:flex-row flex-col gap-4 md:mt-7 mt-16">
                        <div className="flex items-center gap-6">
                            <SearchBarRound />
                            <h3 className="font-semibold text-xl">SEO</h3>

                        </div>
                        <div className="">
                            <ProgressBarCyan />
                        </div>
                    </div>
                    <div className="flex justify-between items-center md:flex-row flex-col gap-4 md:mt-7 mt-16">
                        <div className="flex items-center gap-6">
                            <p className="w-10 h-10 bg-[#CB4BF8] rounded-full"></p>
                            <h3 className="font-semibold text-xl">Mobile</h3>

                        </div>
                        <div className="">
                            <ProgressBarPurple />
                        </div>
                    </div>
                    <div className="flex justify-between items-center md:flex-row flex-col gap-4 md:mt-7 mt-16">
                        <div className="flex items-center gap-6">
                            <p className="w-10 h-10 bg-[#F89E4B] rounded-full"></p>
                            <h3 className="font-semibold text-xl">Security</h3>

                        </div>
                        <div className="">
                            <ProgressBarAmber />
                        </div>
                    </div>

                    <div className="mt-20 mb-4 flex flex-col gap-6 items-center">
                        <button className="text-white bg-[#007BFE] py-3 px-6 w-56 rounded-xl font-semibold">Download PDF</button>
                        <button className="text-black py-3 px-6 rounded-xl w-56 border-2 font-semibold">Share</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RankingCheckerResultingOverview;