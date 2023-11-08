import searchBar from "../../assets/images/Home/Features_search.png";
import design from "../../assets/images/Home/Features_design.png";

const FeatureSectionSearchBar = () => {
    return (
        <div className='text-white flex '>
            <img className="w-56 h-44" src={design} alt="design" />
            <img className="w-28 h-28" src={searchBar} alt="searchBar" />
        </div>
    );
};

export default FeatureSectionSearchBar;