import SearchBar from "../../../../components/SearchBar/SearchBar";
import ResourcesHomePageResultingOverview from "../../ResourcesHomePageResultingOverview/ResourcesHomePageResultingOverview";

const ResourcesHomePageAfterCheck = () => {
    return (
        <div className="mt-12 ">
            <div className="ml-16">
                <SearchBar></SearchBar>
            </div>

            <div className="my-24 mx-48">
                <ResourcesHomePageResultingOverview></ResourcesHomePageResultingOverview>
            </div>
        </div>
    );
};

export default ResourcesHomePageAfterCheck;