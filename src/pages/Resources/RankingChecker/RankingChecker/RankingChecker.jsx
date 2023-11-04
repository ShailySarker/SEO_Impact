import { Link } from "react-router-dom";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import design from '../../../../assets/images/Resources/RankingChecker/RankingChecker/design.png';


const RankingChecker = () => {
    return (
        <div className="my-12 md:ml-16 mx-6">
            <SearchBar></SearchBar>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-5 mt-16">
                <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl lg:mr-24 mr-12"><span className="text-[#007BFE]">Experience</span> seamless elegance on the go </h2>
                <img className="" src={design} alt="design" />
            </div>
            <div className="lg:mt-36 md:mt-28 mt-24 flex flex-col items-center md:gap-16 gap-12">
                <input className="border-2 py-3 px-7 lg:w-80 md:w-96 w-72 rounded-lg" type="search" name="" id="" placeholder="Enter your website...." />
                <Link to="/resources/rankingCheckerAfterChecking">
                    <button className="text-white bg-[#007BFE] py-3 px-6 rounded-xl w-36 font-semibold">Check Score</button>
                </Link>
            </div>
        </div>
    );
};

export default RankingChecker;