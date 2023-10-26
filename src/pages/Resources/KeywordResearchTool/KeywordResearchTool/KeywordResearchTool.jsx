
const KeywordResearchTool = () => {
    return (
        <div className="mt-12 md:mx-16 mx-6 md:mb-28 mb-20">
            <h2 className="font-semibold lg:text-5xl md:text-4xl text-3xl lg:text-start text-center">Keyword Research Tool</h2>
            <h1 className="mt-20 lg:text-7xl md:text-6xl text-5xl font-bold "><span className="text-[#007BFE]">Find</span> Keyword <br /> ideas with <br />Research tool</h1>
            <div className="flex gap-7 md:flex-row flex-col mt-20 items-center">
                <button className="text-[#007BFE] bg-[#379FFF1A] md:py-4 md:px-6 p-2 rounded-xl w-40 md:w-52 font-semibold ">Related Searches</button>
                <button className="text-slate-300 border-2 md:py-4 md:px-6 p-2 rounded-xl w-40 md:w-52 font-semibold ">Related Keywords</button>
            </div>
            <div className="flex justify-center mt-20 mb-12">
                <form >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text md:text-xl text-lg font-bold mb-3">Keyword Analysis</span>
                        </label>
                        <input type="text" placeholder="Keyword" name='keyword' className="input input-bordered mb-7 md:w-96 w-80 md:h-14 h-12 px-8" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text md:text-xl text-lg font-bold mb-3">Analysis Type</span>
                        </label>
                        <input type="text" placeholder="Related searches" name='keyword' className="input input-bordered mb-7 md:w-96 w-80 md:h-14 h-12 px-8" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text md:text-xl text-lg font-bold mb-3">Search engine</span>
                        </label>
                        <input type="text" placeholder="Google.com" name='keyword' className="input input-bordered mb-7 md:w-96 w-80 md:h-14 h-12 px-8" required />
                    </div>

                    <div className="form-control mt-10">

                        <input type="submit" className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 lg:w-48 w-44 rounded-xl font-semibold mx-auto" value='Keyword Research' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default KeywordResearchTool;