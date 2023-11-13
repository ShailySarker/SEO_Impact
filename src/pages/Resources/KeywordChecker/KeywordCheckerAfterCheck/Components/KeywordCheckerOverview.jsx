import CheckRound from "../../../../../components/CheckRound/CheckRound";
import desktop from "../../../../../assets/images/Resources/KeywordChecker/KeywordCheckerAfterCheck/KeywordCheckerOverview_desktopWindow.png";


const KeywordCheckerOverview = () => {
    return (
        <div className="mt-32">
            <h2 className="font-semibold lg:text-5xl md:text-4xl text-3xl">Overview of Keyword Check</h2>
            <div className="mt-24">
                <img className="mx-auto w-4/5" src={desktop} alt="desktop" />
                <div className="mt-20 lg:mx-44 md:mx-10">
                    <div className="grid grid-cols-2 items-center">
                        <h3 className="md:text-2xl text-lg font-semibold">Meta Attributes</h3>
                        <progress className="progress progress-info h-4" value="60" max="100"></progress>
                    </div>
                    <div className="grid grid-cols-2 items-center mt-8">
                        <h3 className="md:text-2xl text-lg font-semibold">HTML Optimization</h3>
                        <progress className="progress progress-info h-4" value="60" max="100"></progress>
                    </div>
                    <div className="grid grid-cols-2 items-center mt-8">
                        <h3 className="md:text-2xl text-lg font-semibold">Others</h3>
                        <progress className="progress progress-info h-4" value="100" max="100"></progress>
                    </div>
                </div>
            </div>


            {/* Meta Attributes Section */}
            <div className="mt-28 lg:mr-44">
                <div className="flex items-center gap-20">
                    <h3 className="font-bold lg:text-5xl md:text-4xl text-3xl ">Meta Attributes</h3>
                    <p className="bg-[#379FFF] text-white font-semibold text-xl rounded-full w-16 h-16 flex justify-center items-center">60%</p>
                </div>
                <div className="flex items-center gap-16 mt-12 border-b-2 pb-8">
                    <h3 className="font-bold lg:text-4xl md:text-3xl text-2xl">Title</h3>
                    <div className="flex gap-5">
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="bg-[#379eff68] py-10 px-8 mt-16">
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">Google</h3>
                </div>
                <div className="mt-16 flex  gap-8 items-center">
                    <CheckRound />
                    <h3 className="md:text-2xl text-xl font-semibold">In the title : Google</h3>
                </div>
                <div className="mt-12 flex  gap-16 items-center border-b-2 pb-8">
                    <h3 className="font-semibold lg:text-4xl md:text-3xl text-2xl ">Meta Description</h3>
                    <div className="flex gap-5">
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="bg-[#FBF6DD] py-10 px-8 mt-16">
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">Not within the first 120 characters : Google</h3>
                </div>
            </div>


            {/* HTML Content Section */}
            <div className="mt-28 lg:mr-44">
                <div className="flex items-center gap-20">
                    <h3 className="font-bold lg:text-5xl md:text-4xl text-3xl ">HTML Content</h3>
                    <p className="bg-[#379FFF] text-white font-semibold text-xl rounded-full w-16 h-16 flex justify-center items-center">60%</p>
                </div>
                {/* Image Seo part */}
                <div className="flex items-center gap-16 mt-12 border-b-2 pb-8">
                    <h3 className="font-bold lg:text-4xl md:text-3xl text-2xl">Image Seo</h3>
                    <div className="flex gap-5">
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="bg-[#FBF6DD] py-10 px-8 mt-16">
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">Not found in an image title : Google</h3>
                </div>
                <div>
                    <div className="mt-16 flex  gap-8 items-center">
                        <CheckRound />
                        <h3 className="md:text-2xl text-xl font-semibold">Found an attribute of an image : Google</h3>
                    </div>
                    <div className="flex  gap-8 items-center mt-6">
                        <CheckRound />
                        <h3 className="md:text-2xl text-xl font-semibold">Found in the image URLS : Google</h3>
                    </div>
                </div>
                {/* Content part */}
                <div className="mt-12 flex  gap-16 items-center border-b-2 pb-8">
                    <h3 className="font-semibold lg:text-4xl md:text-3xl text-2xl ">Content</h3>
                    <div className="flex gap-5">
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="bg-[#379eff68] py-10 px-8 mt-16">
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">The term is used 3 times in 12 words</h3>
                </div>
                <div>
                    <div className="mt-16 flex  gap-8 items-center">
                        <CheckRound />
                        <h3 className="md:text-2xl text-xl font-semibold">Found an attribute of an image : Google</h3>
                    </div>
                    <div className="flex  gap-8 items-center mt-6">
                        <CheckRound />
                        <h3 className="md:text-2xl text-xl font-semibold">Found in the image URLS : Google</h3>
                    </div>
                </div>
                {/* Bold and Strong tag part */}
                <div className="mt-12 flex  gap-16 items-center border-b-2 pb-8">
                    <h3 className="font-semibold lg:text-4xl md:text-3xl text-2xl ">Bold and Strong tags</h3>
                    <div className="flex gap-5">
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="bg-[#FBF6DD] py-10 px-8 mt-16">
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">No strong tag contains following keyword : Google</h3>
                </div>
                {/* Headings part */}
                <div className="mt-12 flex  gap-16 items-center border-b-2 pb-8">
                    <h3 className="font-semibold lg:text-4xl md:text-3xl text-2xl ">Headings</h3>
                    <div className="flex gap-5">
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="bg-[#F1D2CE] py-10 px-8 mt-16">
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">Not used within the headings : Google</h3>
                </div>
                {/* H1 Headings part  */}
                <div className="mt-12 flex  gap-16 items-center border-b-2 pb-8">
                    <h3 className="font-semibold lg:text-4xl md:text-3xl text-2xl ">H1 Headings</h3>
                    <div className="flex gap-5">
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="bg-[#F1D2CE] py-10 px-8 mt-16">
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">Missing keywords in H1 headings : Google</h3>
                </div>
            </div>

            {/* Others Section */}
            <div className="mt-28 lg:mr-44">
                <div className="flex items-center gap-20">
                    <h3 className="font-bold lg:text-5xl md:text-4xl text-3xl ">Others</h3>
                    <p className="bg-[#379FFF] text-white font-semibold text-xl rounded-full w-16 h-16 flex justify-center items-center">60%</p>
                </div>
                {/* Domain part */}
                <div className="flex items-center gap-16 mt-12 border-b-2 pb-8">
                    <h3 className="font-bold lg:text-4xl md:text-3xl text-2xl">Domain</h3>
                    <div className="flex gap-5">
                        <p className="bg-[#379FFF] w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="mt-16 flex  gap-8 items-center">
                    <CheckRound />
                    <h3 className="md:text-2xl text-xl font-semibold">Occurs in the domain : Google</h3>
                </div>
                {/* Stop Words part */}
                <div className="flex items-center gap-16 mt-12 border-b-2 pb-8">
                    <h3 className="font-bold lg:text-4xl md:text-3xl text-2xl">Stop Words</h3>
                    <div className="flex gap-5">
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                        <p className="bg-slate-300 w-7 h-7 rounded-full"></p>
                    </div>
                </div>
                <div className="mt-16 flex  gap-8 items-center">
                    <CheckRound />
                    <h3 className="md:text-2xl text-xl font-semibold">None of the keyword is known as stop word</h3>
                </div>
            </div>
        </div>
    );
};

export default KeywordCheckerOverview;