import BigScreenTable from "./BigScreenTable";
import SmallScreenTable from "./SmallScreenTable";
import './KeywordsPerPage.css';
import photo1 from '../../../../../assets/images/Resources/KeywordResearchTool/KeywordResearchToolAfterCheck/KeywordsPerPage_pepiconsPopDownUp.png';
import photo2 from '../../../../../assets/images/Resources/KeywordResearchTool/KeywordResearchToolAfterCheck/KeywordsPerPage_solarDownloadBoldDuotone.png';

const KeywordsPerPage = () => {
    return (
        <div className='mb-44 md:mx-16 mx-6'>
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
    );
};

export default KeywordsPerPage;