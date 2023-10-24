import { Link } from "react-router-dom";

const BackLinkChecker = () => {
    return (
        <div className="mt-12 md:ml-16 mb-28">
            <h2 className="font-semibold lg:text-5xl md:text-4xl text-3xl lg:text-start text-center">Backlink Checker</h2>
            <div className="md:mt-24 mt-20 flex flex-col items-center gap-10">
                <input className="border-2 py-3 px-7 md:w-96 w-72  rounded-lg" type="search" name="" id="" placeholder="Enter your website...." />
                <Link to="/resources/backLinkCheckerAfterChecking">
                    <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl w-36 font-semibold mt-8">Check</button>
                </Link>
            </div>
        </div>
    );
};

export default BackLinkChecker;