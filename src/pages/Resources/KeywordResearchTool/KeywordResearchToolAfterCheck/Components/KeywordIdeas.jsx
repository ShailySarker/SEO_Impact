const KeywordIdeas = () => {
    return (
        <div className="md:mx-16 mx-6">
            <div className="mb-16 ">
                <h3 className="md:text-xl text-lg font-bold mb-12">Keyword ideas</h3>
                <div className="flex gap-8 flex-col ">
                    <div className="flex gap-7 md:flex-row flex-col mx-auto md:ml-0 border-2 rounded-lg py-4 px-7 items-center md:mr-auto">
                        <button className="text-[#007BFE] bg-[#379FFF1A] md:py-4 md:px-6 p-2 rounded-xl w-40 lg:w-52 font-semibold ">Related Searches</button>
                        <button className="text-slate-300 border-2 md:py-4 md:px-6 p-2 rounded-xl w-40 lg:w-52 font-semibold ">Auto Complete</button>
                        <button className="text-slate-300 border-2 md:py-4 md:px-6 p-2 rounded-xl w-40 lg:w-52 font-semibold ">Related Keywords</button>
                    </div>
                    <div className="">
                        <input className="border-2 rounded-xl bg-[#F5F5F5] md:py-4 p-2 text-[#000000] md:w-96 w-80 md:h-14 h-12 px-8" type="search" name="searchAnything" placeholder="Search anything here" id="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default KeywordIdeas;