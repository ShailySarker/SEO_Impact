import clockImage from '../../../assets/images/Home/SEOTools_materialSymbolsAlarm.png';
import uploadImage from '../../../assets/images/Home/SEOTools_streamlineInterfaceUpload.png';
import laptopImage from '../../../assets/images/Home/SEOTools_ionLaptopSharp.png';

const SEOTools = () => {
    return (
        <div className="md:px-20 px-10 mb-36">
            <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center mb-16 text-[#212121]">Unlock your success now with our <br /> SEO Tools </h2>
            <div className="lg:flex lg:flex-row grid md:grid-cols-2 grid-cols-1 lg:gap-24 lg:justify-center lg:mx-auto gap-16">
                <div>
                    <img className="flex mx-auto bg-[#EBF5FF] p-5 w-24 rounded-t-full relative -mb-10" src={clockImage} alt="clockImage" />
                    <p className="font-bold text-xl bg-[#EBF5FF] py-12 px-28 rounded-3xl ">QUICK</p>
                </div>
                <div>
                    <img className="flex mx-auto bg-[#EBF5FF] p-5 w-24 rounded-t-full relative -mb-10" src={uploadImage} alt="uploadImage" />
                    <p className="font-bold text-xl bg-[#EBF5FF] py-12 px-24 rounded-3xl ">FOCUSSED</p>
                </div>
                <div>
                    <img className="flex mx-auto bg-[#EBF5FF] p-5 w-24 rounded-t-full relative -mb-10" src={laptopImage} alt="laptopImage" />
                    <p className="font-bold text-xl bg-[#EBF5FF] py-12 px-20 rounded-3xl ">ACTIONABLE</p>
                </div>
            </div>
        </div>
    );
};

export default SEOTools;