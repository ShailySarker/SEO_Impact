import { Link } from "react-router-dom";

const BackLinkChecker = () => {
    return (
        <div className="mt-12 ml-16">
            <h2 className="font-semibold text-5xl">Backlink Checker</h2>
            <div className="mt-24 flex flex-col items-center gap-10">
                <input className="border-2 py-3 px-7 w-96 rounded-lg" type="search" name="" id="" placeholder="Enter your website...." />
                <Link to="/resources/backLinkCheckerAfterChecking">
                    <button className="text-white bg-[#007BFE] py-3 px-6 rounded-xl w-36 font-semibold mt-8">Check</button>
                </Link>
            </div>
        </div>
    );
};

export default BackLinkChecker;