import company1 from '../../../assets/images/Home/TrustedCompanies_Apple-logo.png';
import company2 from '../../../assets/images/Home/TrustedCompanies_Microsoft-logo.png';
import company3 from '../../../assets/images/Home/TrustedCompanies_Samsung-logo.png';
import company4 from '../../../assets/images/Home/TrustedCompanies_Nvidia-logo.png';


const TrustedCompanies = () => {
    return (
        <div>
            <h2 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl mb-6">Trusted By Many Companies</h2>
            <div className="mt-16 bg-[#EBF5FF] grid lg:grid-cols-4 grid-cols-2 md:py-16 p-10 md:px-28 md:gap-20 gap-10 items-center">
                <img className="mx-auto h-10" src={company1} alt="company1" />
                <img className="mx-auto h-10" src={company2} alt="company2" />
                <img className="mx-auto" src={company3} alt="company3" />
                <img className="mx-auto h-8" src={company4} alt="company4" />
            </div>
        </div>
    );
};

export default TrustedCompanies;