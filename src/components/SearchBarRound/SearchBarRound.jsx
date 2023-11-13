import search from '../../assets/images/Resources/RankingChecker/RankingCheckerAfterCheck/RankingCheckerResultingOverview_search.png';


const SearchBarRound = () => {
    return (
        <div>
            <p className="w-10 h-10 bg-[#03BDA5] rounded-full"></p>
            <img className="relative -mb-5 bottom-[30px] -right-[11px]" src={search} alt="search" />
        </div>
    );
};

export default SearchBarRound;