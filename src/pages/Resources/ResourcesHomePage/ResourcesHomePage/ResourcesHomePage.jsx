import { Link } from "react-router-dom";
import SearchBar from "../../../../components/SearchBar/SearchBar";

const ResourcesHomePage = () => {
    return (
        <div className="my-12 md:ml-16 mx-6">
            <SearchBar></SearchBar>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-5 mt-16">
                <h2 className="font-bold md:text-5xl text-3xl lg:mr-24 mr-12"><span className="text-[#007BFE]">Experience</span> seamless elegance on the go </h2>
                <img className="" src="https://i.ibb.co/Npg5LBV/Group-187.png" alt="" />
            </div>
            <div className="lg:mt-36 md:mt-28 mt-24 flex flex-col items-center md:gap-16 gap-12">
                <input className="border-2 py-3 px-7 md:w-80 w-72 rounded-lg" type="search" name="" id="" placeholder="Enter your website...." />
                <Link to="/resources/homePageAfterChecking">
                    <button className="text-white bg-[#007BFE] py-3 px-6 rounded-xl w-36 font-semibold">Check Score</button>
                </Link>
            </div>
        </div>
    );
};

export default ResourcesHomePage;