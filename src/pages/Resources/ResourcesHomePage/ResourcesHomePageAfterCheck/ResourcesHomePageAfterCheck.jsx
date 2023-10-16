import SearchBar from "../../../../components/SearchBar/SearchBar";
import ResourcesHomePageResultingOverview from "../../MyProjects/ResourcesHomePageResultingOverview/ResourcesHomePageResultingOverview";
import Performance from "../Performance/Performance";
import SEOPart from "../SEOPart/SEOPart";

const ResourcesHomePageAfterCheck = () => {
    return (
        <div className="mt-12 ">
            <div className="ml-16">
                <SearchBar></SearchBar>
            </div>

            <div className="my-24 mx-36">
                <ResourcesHomePageResultingOverview></ResourcesHomePageResultingOverview>
                <Performance></Performance>
                <SEOPart></SEOPart>
            </div>
        </div>
    );
};

export default ResourcesHomePageAfterCheck;