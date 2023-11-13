import SearchBar from "../../../../components/SearchBar/SearchBar";
import RankingCheckerResultingOverview from "./Components/RankingCheckerResultingOverview";
import Performance from "./Components/Performance";
import SEOPart from "./Components/SEOPart";
import Mobile from "./Components/Mobile";
import Security from "./Components/Security";
import WhatNext from "../WhatNext/WhatNext";

const RankingCheckerAfterCheck = () => {
    return (
        <div className="mt-12 ">
            <div className="md:ml-16 ml-6">
                <SearchBar></SearchBar>
            </div>

            <div className="my-24 lg:mx-[106px] md:mx-16 mx-6">
                <RankingCheckerResultingOverview></RankingCheckerResultingOverview>
                <Performance></Performance>
                <SEOPart></SEOPart>
                <Mobile></Mobile>
                <Security></Security>
                <WhatNext></WhatNext>
            </div>
        </div>
    );
};

export default RankingCheckerAfterCheck;