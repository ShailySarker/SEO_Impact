import BigScreenTable from './BigScreenTable';
import SmallScreenTable from './SmallScreenTable';
import "./KeywordResearchToolResultingOverview.css";
import photo1 from '../../../../../assets/images/Resources/KeywordResearchTool/KeywordResearchToolAfterCheck/KeywordResearchToolResultingOverview/pepicons-pop_down-up.png';
import photo2 from '../../../../../assets/images/Resources/KeywordResearchTool/KeywordResearchToolAfterCheck/KeywordResearchToolResultingOverview/solar_download-bold-duotone.png';


const KeywordResearchToolResultingOverview = () => {
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
            <div className='mb-44 mx-0'>
                <h3 className="md:text-xl text-lg font-bold mb-12">Keywords Per page</h3>
                <div className='flex gap-10'>
                    <div className='flex border-2 md:gap-16 bg-[#F5F5F5] py-3 md:px-7 px-3 gap-5 md:h-16 h-14 rounded-xl'>
                        <h3 className="md:text-2xl text-xl font-bold mb-12">50</h3>
                        <img className='md:w-8 w-6 md:h-8 h-6' src={photo1} alt="" />
                    </div>
                    <div className='flex border-2 md:gap-8 gap-5 bg-[#F5F5F5] py-3 md:px-7 px-3 md:h-16 h-14 rounded-xl'>
                        <h3 className="md:text-2xl text-xl font-bold mb-12">CSV Export</h3>
                        <img className='md:w-8 w-6 md:h-8 h-6' src={photo2} alt="" />
                    </div>
                </div>

                {/* table.... */}
                <div>
                    {/* medium and large screen */}
                    <BigScreenTable></BigScreenTable>

                    {/* small screen */}
                    <SmallScreenTable></SmallScreenTable>
                </div>
            </div>
        </div>
    );
};

export default KeywordResearchToolResultingOverview;