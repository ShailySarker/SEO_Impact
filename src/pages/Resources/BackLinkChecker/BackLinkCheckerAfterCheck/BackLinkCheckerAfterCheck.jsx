import BackLinkResultDescription from "../BackLinkResultDescription/BackLinkResultDescription";
import BackLinkResultOverview from "../BackLinkResultOverview/BackLinkResultOverview";

const BackLinkCheckerAfterCheck = () => {
    return (
        <div className="mt-12 ml-16">
            <h2 className="font-semibold text-5xl">BackLink Checker</h2>
            <div className="mt-24 flex flex-col items-center gap-10">
                <input className="border-2 py-3 px-7 w-96 rounded-lg" type="search" name="" id="" placeholder="cbb.coastalbroadband.in" disabled/>
            </div>
            <BackLinkResultOverview></BackLinkResultOverview>
            <BackLinkResultDescription></BackLinkResultDescription>
        </div>
    );
};

export default BackLinkCheckerAfterCheck;