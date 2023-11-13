import bgImage from '../../../assets/images/Home/ClientReview_bgImage.png';
import reviewer from '../../../assets/images/Home/ClientReview_reviewer.png';

const ClientReview = () => {
    return (
        <div className="lg:mb-52 md:mb-96 mb-[460px]">
            <div className="flex justify-end lg:mt-36 md:mt-0 mt-[460px]">
                <img className="lg:w-auto md:w-[500px] w-[320px] " src={bgImage} alt="bgImage" />
            </div>
            <div className="flex justify-center flex-col absolute lg:-mt-[390px] md:-mt-[210px] -mt-32 ">
                <h2 className="lg:text-4xl md:text-3xl text-2xl lg:px-80 md:px-36 px-16 text-center font-bold"> <span className="text-[#379FFF]">“SEO Impact</span> a Keyword Research tool like Google Trends, Woorank, Seobility”</h2>
                <div className="mt-12 flex flex-col justify-center mx-auto text-center ">
                    <img className="md:w-52 w-40 mx-auto " src={reviewer} alt="reviewer" />
                    <h3 className="text-xl font-bold mt-7 mb-4">Emily Brown</h3>
                    <p className="font-semibold md:text-lg">SEO Impact, Marketing Specialist</p>
                    <p className="md:text-lg">Source : SEO Impact Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;