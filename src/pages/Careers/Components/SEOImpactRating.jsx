import photo from "../../../assets/images/Careers/SEOImpactRating_photo.png";
import star from "../../../assets/images/Careers/SEOImpactRating_star.png";


const SEOImpactRating = () => {
    return (
        <div className="flex lg:mx-48 md:mx-16 mx-10 lg:pt-8 mb-20">
            <div className="grid md:grid-cols-3 grid-cols-1 items-center bg-[#F1F8FF] p-12 lg:gap-0 md:gap-10 gap-16">
                <div className="flex gap-3 md:mx-0 mx-auto">
                    <img className="lg:w-auto w-6 " src={star} alt="" />
                    <img className="lg:w-auto w-6" src={star} alt="" />
                    <img className="lg:w-auto w-6" src={star} alt="" />
                    <img className="lg:w-auto w-6" src={star} alt="" />
                    <img className="lg:w-auto w-6" src={star} alt="" />
                </div>
                <div>
                    <h4 className="font-bold text-3xl lg:text-start text-center">SEO Impact</h4>
                </div>
                <div>
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SEOImpactRating;