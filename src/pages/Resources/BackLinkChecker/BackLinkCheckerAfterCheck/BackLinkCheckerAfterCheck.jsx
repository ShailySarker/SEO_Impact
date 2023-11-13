import BackLinkResultDescription from "./Components/BackLinkResultDescription";
import BackLinkResultOverview from "./Components/BackLinkResultOverview";

const BackLinkCheckerAfterCheck = () => {
    return (
        <div>
            <div className="mt-12 lg:ml-16 md:ml-14 md:mr-0 mx-6">
                <h2 className="font-semibold lg:text-start text-center lg:text-5xl md:text-4xl text-3xl">Backlink Checker</h2>
                <div className="mt-24 flex flex-col items-center gap-10">
                    <input className="border-2 py-3 px-7 md:w-96 w-72 rounded-lg" type="search" name="" id="" placeholder="cbb.coastalbroadband.in" disabled />
                </div>
            </div>
            <BackLinkResultOverview></BackLinkResultOverview>
            <BackLinkResultDescription></BackLinkResultDescription>
        </div>
    );
};

export default BackLinkCheckerAfterCheck;