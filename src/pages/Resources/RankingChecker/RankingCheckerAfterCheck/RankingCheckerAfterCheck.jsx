import SearchBar from "../../../../components/SearchBar/SearchBar";
import RankingCheckerResultingOverview from "../RankingCheckerResultingOverview/RankingCheckerResultingOverview";

const RankingCheckerAfterCheck = () => {
    return (
        <div className="mt-12 ">
            <div className="md:ml-16 ml-6">
                <SearchBar></SearchBar>
            </div>

            <div className="my-24 lg:mx-[106px] md:mx-16 mx-6">
                <RankingCheckerResultingOverview></RankingCheckerResultingOverview>
            </div>
        </div>
    );
};

export default RankingCheckerAfterCheck;