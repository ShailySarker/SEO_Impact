import facebook from '../../../assets/images/AboutUs/SocialMediaReview/Facebook_icon.png';
import instagram from "../../../assets/images/AboutUs/SocialMediaReview/instagram-icon.png";
import linkedIn from "../../../assets/images/AboutUs/SocialMediaReview/LinkedIn_icon.png";
import youTube from "../../../assets/images/AboutUs/SocialMediaReview/youtube.png";
import twitter from "../../../assets/images/AboutUs/SocialMediaReview/twitter-logo.png";
import whatsapp from "../../../assets/images/AboutUs/SocialMediaReview/whatsapp-icon.png";
import messenger from "../../../assets/images/AboutUs/SocialMediaReview/Messenger_logo.png";
import threads from "../../../assets/images/AboutUs/SocialMediaReview/Threads.png";


const SocialMediaReview = () => {
    return (
        <div className="lg:pt-16 md:pt-12 pt-10 mb-28 lg:mx-20 md:mx-16 mx-6">
            <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10 ">Social Media Reviews</h3>
            <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center lg:mx-32 md:mx-12 mx-2">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget.</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-0 md:mx-12 mx-5 md:gap-10 gap-6 mt-20">
                <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
                    <h2 className="lg:text-3xl text-xl font-bold text-center pb-10">“<span className="text-[#007BFE]">SEO Impact</span> is creating new milestone”</h2>
                    <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={facebook} alt="" />
                    <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">Rio Anna</h3>
                    <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">Facebook Page</span></p>
                </div>
                <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
                    <h2 className="lg:text-3xl text-xl font-bold text-center pb-10">“<span className="text-[#007BFE]">SEO Impact</span> is creating new milestone”</h2>
                    <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={instagram} alt="" />
                    <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">Rio Anna</h3>
                    <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">Instagram Page</span></p>
                </div>
                <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
                    <h2 className="lg:text-3xl text-xl font-bold text-center pb-10">“<span className="text-[#007BFE]">SEO Impact</span> is creating new milestone”</h2>
                    <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={linkedIn} alt="" />
                    <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">Rio Anna</h3>
                    <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">LinkedIn Profile</span></p>
                </div>
                <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
                    <h2 className="lg:text-3xl text-xl font-bold text-center pb-10">“<span className="text-[#007BFE]">SEO Impact</span> is creating new milestone”</h2>
                    <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={youTube} alt="" />
                    <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">Rio Anna</h3>
                    <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">YouTube Channel</span></p>
                </div>
                <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
                    <h2 className="lg:text-3xl text-xl font-bold text-center pb-10">“<span className="text-[#007BFE]">SEO Impact</span> is creating new milestone”</h2>
                    <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={twitter} alt="" />
                    <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">Rio Anna</h3>
                    <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">Twitter Profile</span></p>
                </div>
                <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
                    <h2 className="lg:text-3xl text-xl font-bold text-center pb-10">“<span className="text-[#007BFE]">SEO Impact</span> is creating new milestone”</h2>
                    <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={whatsapp} alt="" />
                    <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">Rio Anna</h3>
                    <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">WhatsApp Group</span></p>
                </div>
                <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
                    <h2 className="lg:text-3xl text-xl font-bold text-center pb-10">“<span className="text-[#007BFE]">SEO Impact</span> is creating new milestone”</h2>
                    <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={messenger} alt="" />
                    <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">Rio Anna</h3>
                    <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">Messenger Group</span></p>
                </div>
                <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
                    <h2 className="lg:text-3xl text-xl font-bold text-center pb-10">“<span className="text-[#007BFE]">SEO Impact</span> is creating new milestone”</h2>
                    <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={threads} alt="" />
                    <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">Rio Anna</h3>
                    <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">Threads Group</span></p>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaReview;