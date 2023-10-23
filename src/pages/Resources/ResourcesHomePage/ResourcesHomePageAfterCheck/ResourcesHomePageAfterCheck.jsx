import SearchBar from "../../../../components/SearchBar/SearchBar";
import ResourcesHomePageResultingOverview from "../ResourcesHomePageResultingOverview/ResourcesHomePageResultingOverview";
import Mobile from "../Mobile/Mobile";
import Performance from "../Performance/Performance";
import SEOPart from "../SEOPart/SEOPart";
import Security from "../Security/Security";
import WhatNext from "../WhatNext/WhatNext";

const ResourcesHomePageAfterCheck = () => {
    return (
        <div className="mt-12 ">
            <div className="md:ml-16 ml-6">
                <SearchBar></SearchBar>
            </div>

            <div className="my-24 lg:mx-36 md:mx-16 mx-6">
                <ResourcesHomePageResultingOverview></ResourcesHomePageResultingOverview>
                {/* <Performance></Performance>
                <SEOPart></SEOPart>
                <Mobile></Mobile>
                <Security></Security>
                <WhatNext></WhatNext> */}
            </div>
        </div>
    );
};

export default ResourcesHomePageAfterCheck;