import DeleteRound from "../../../components/DeleteRound/DeleteRound";
import ProgressBarAmber from "../../../components/ProgressBarAmber/ProgressBarAmber";
import ProgressBarCyan from "../../../components/ProgressBarCyan/ProgressBarCyan";
import ProgressBarPurple from "../../../components/ProgressBarPurple/ProgressBarPurple";
import ProgressBarRed from "../../../components/ProgressBarRed/ProgressBarRed";
import SearchBarRound from "../../../components/SearchBarRound/SearchBarRound";

const ResourcesHomePageResultingOverview = () => {
    return (
        <div>
            <h4 className="font-semibold text-3xl">Your results for cbb.coastalbroadband.in </h4>
            <div className="my-20 flex flex-col justify-center items-center">
                <div className="radial-progress text-[#007BFE] transform " style={{
                    "--value": 76, "--size": "16rem", "--thickness": "1rem",
                    transform: "rotate(223.5deg)"
                }}>
                    <span style={{ transform: "rotate(136deg)" }} className="text-7xl font-semibold text-black">76</span>
                </div>
                <p className="text-3xl font-bold text-center relative bottom-3 ">Overall Score</p>
            </div>
            <div className="border-2 py-12 px-16 rounded-xl">
                <div>
                    <img className="mx-auto" src="https://i.ibb.co/cCxhYYh/Macbook.png" alt="" />
                    <h4 className="text-center mt-16 mb-5 font-semibold text-2xl">https://cbb.coastalbroadband.in</h4>
                    <h5 className="text-xl font-semibold text-center text-slate-500 border-b-2 pb-11">August 25 16:00:34</h5>
                </div>
                <div className="mt-16 px-16">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <DeleteRound></DeleteRound>
                            <h3 className="font-semibold text-xl">Performance</h3>

                        </div>
                        <div className="">
                            <ProgressBarRed></ProgressBarRed>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <div className="flex items-center gap-6">
                            <SearchBarRound></SearchBarRound>
                            <h3 className="font-semibold text-xl">SEO</h3>

                        </div>
                        <div className="">
                            <ProgressBarCyan></ProgressBarCyan>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <div className="flex items-center gap-6">
                            <p className="w-10 h-10 bg-[#CB4BF8] rounded-full"></p>
                            <h3 className="font-semibold text-xl">Mobile</h3>

                        </div>
                        <div className="">
                            <ProgressBarPurple></ProgressBarPurple>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <div className="flex items-center gap-6">
                            <p className="w-10 h-10 bg-[#F89E4B] rounded-full"></p>
                            <h3 className="font-semibold text-xl">Security</h3>

                        </div>
                        <div className="">
                            <ProgressBarAmber></ProgressBarAmber>
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

export default ResourcesHomePageResultingOverview;