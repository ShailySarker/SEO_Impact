import photo1 from '../../../assets/images/ContactUs/SocialMedia_facebookLogo.png';
import photo2 from '../../../assets/images/ContactUs/SocialMedia_instagramLogo.png';
import photo3 from '../../../assets/images/ContactUs/SocialMedia_linkedInLogo.png';
import photo4 from '../../../assets/images/ContactUs/SocialMedia_youtubeLogo.png';
import photo5 from '../../../assets/images/ContactUs/SocialMedia_twitterLogo.png';
import photo6 from '../../../assets/images/ContactUs/SocialMedia_whatsappLogo.png';
import photo7 from '../../../assets/images/ContactUs/SocialMedia_messengerLogo.png';
import photo8 from '../../../assets/images/ContactUs/SocialMedia_threadsLogo.png';


const SocialMedia = () => {
    return (
        <div className="lg:mt-32 md:mt-16 pt-5 mb-36 lg:mx-24 md:mx-16 mx-6 items-center">
            <div className="mb-24">
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Our Social Media Links</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-12 md:gap-8 gap-6 justify-center items-center">
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
                    <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={photo1} alt="Facebook" />
                    <h3 className="text-center font-semibold lg:text-2xl text-xl md:pb-4 pb-2">Follow Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">Facebook Page</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
                    <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={photo2} alt="Instagram" />
                    <h3 className="text-center font-semibold lg:text-2xl text-xl md:pb-4 pb-2">Follow Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">Instagram Page</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
                    <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={photo3} alt="LinkedIn" />
                    <h3 className="text-center font-semibold md:text-2xl text-xl md:pb-4 pb-2">Follow Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">LinkedIn Profile</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
                    <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={photo4} alt="YouTube" />
                    <h3 className="text-center font-semibold md:text-2xl text-xl md:pb-4 pb-2">Join Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">YouTube Channel</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
                    <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={photo5} alt="Twitter" />
                    <h3 className="text-center font-semibold md:text-2xl text-xl md:pb-4 pb-2">Follow Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">Twitter Profile</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
                    <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={photo6} alt="WhatsApp" />
                    <h3 className="text-center font-semibold md:text-2xl text-xl md:pb-4 pb-2">Join Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">WhatsApp Group</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
                    <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={photo7} alt="Messenger" />
                    <h3 className="text-center font-semibold md:text-2xl text-xl md:pb-4 pb-2">Join Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">Messenger Group</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
                    <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={photo8} alt="Threads" />
                    <h3 className="text-center font-semibold md:text-2xl text-xl md:pb-4 pb-2">Join Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">Threads Group</h2>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;