import SearchBar from "../../../../components/SearchBar/SearchBar";
import RankingCheckerResultingOverview from "../RankingCheckerResultingOverview/RankingCheckerResultingOverview";
import Performance from "../Performance/Performance";
import SEOPart from "../SEOPart/SEOPart";
import Mobile from "../Mobile/Mobile";
import Security from "../Security/Security";
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