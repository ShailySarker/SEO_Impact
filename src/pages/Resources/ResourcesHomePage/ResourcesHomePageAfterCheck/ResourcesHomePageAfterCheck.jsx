import SearchBar from "../../../../components/SearchBar/SearchBar";
import ResourcesHomePageResultingOverview from "../../ResourcesHomePageResultingOverview/ResourcesHomePageResultingOverview";
import Performance from "../Performance/Performance";

const ResourcesHomePageAfterCheck = () => {
    return (
        <div className="mt-12 ">
            <div className="ml-16">
                <SearchBar></SearchBar>
            </div>

            <div className="my-24 mx-36">
                <ResourcesHomePageResultingOverview></ResourcesHomePageResultingOverview>
                <Performance></Performance>
                
            </div>
        </div>
    );
};

export default ResourcesHomePageAfterCheck;