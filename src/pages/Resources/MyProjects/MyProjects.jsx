import SearchBar from "../../../components/SearchBar/SearchBar";

const MyProjects = () => {
    return (
        <div className="mt-12 ml-16 mr-20">
            <SearchBar></SearchBar>
            <div className="border-2 rounded-2xl mt-20">
                <h3 className="font-semibold text-3xl px-10 py-5 border-b-2">My Projects</h3>
                <div className="grid grid-cols-2 mt-10 mb-44 mx-12 gap-32">
                    <div className="border-2 pl-5 py-4 rounded-xl">
                        <div className="flex justify-between border-b-2 border-slate-500 pb-4">
                            <h4 className="font-bold text-xl text-[#007BFE]">Project 01</h4>
                            <div className="flex ">
                                <h4 className="font-bold text-xl text-slate-500 border-r-2 pr-5">Edit</h4>
                                <h4 className="font-bold text-xl text-[#FE0000] pl-5 pr-8" >Delete</h4>
                            </div>
                        </div>
                        <div className="my-10 flex gap-5 items-center">
                            <img src="https://i.ibb.co/rHPmJ1Y/Rectangle-147.png" alt="" />
                            <div className="flex flex-col gap-2 pr-2">
                                <p className="font-medium text-sm">Name : Network Development</p>
                                <p className="font-medium text-sm">Domain : cbb.coastalbroadband.in</p>
                            </div>
                        </div>
                    </div>
                    <div className="   rounded-xl bg-[#9B9B9B] flex justify-center items-center">
                        <button className="font-semibold text-[150px] text-slate-700 p-4">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;