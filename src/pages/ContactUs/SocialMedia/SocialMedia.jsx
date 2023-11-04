import photo1 from '../../../assets/images/ContactUs/SocialMedia/Facebook_icon.png';
import photo2 from '../../../assets/images/ContactUs/SocialMedia/instagram-icon.png';
import photo3 from '../../../assets/images/ContactUs/SocialMedia/LinkedIn_icon.png';
import photo4 from '../../../assets/images/ContactUs/SocialMedia/youtube.png';
import photo5 from '../../../assets/images/ContactUs/SocialMedia/twitter-logo.png';
import photo6 from '../../../assets/images/ContactUs/SocialMedia/whatsapp-icon.png';
import photo7 from '../../../assets/images/ContactUs/SocialMedia/Messenger_logo.png';
import photo8 from '../../../assets/images/ContactUs/SocialMedia/Threads.png';


const SocialMedia = () => {
    return (
        <div className="lg:mt-32 md:mt-16 pt-5 mb-36 lg:mx-16 md:mx-16 mx-6 items-center">
            <div className="mb-24">
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Our Social Media Links</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-12 md:gap-5 gap-6 justify-center items-center">
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200 h-72 lg:h-[360px] md:h-[320px]">
                    <img className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-24 h-24 mx-auto md:mb-12 mb-8" src={photo1} alt="Facebook" />
                    <h3 className="text-center font-semibold lg:text-3xl text-2xl pb-4">Follow Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-3xl text-2xl lg:pb-6 pb-3">Facebook Page</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200 h-72 lg:h-[360px] md:h-[320px]">
                    <img className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-24 h-24 mx-auto md:mb-12 mb-8" src={photo2} alt="Instagram" />
                    <h3 className="text-center font-semibold lg:text-3xl text-2xl pb-4">Follow Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-3xl text-2xl lg:pb-6 pb-3">Instagram Page</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200 h-72 lg:h-[360px] md:h-[320px]">
                    <img className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-24 h-24 mx-auto md:mb-12 mb-8" src={photo3} alt="LinkedIn" />
                    <h3 className="text-center font-semibold md:text-3xl text-2xl pb-4">Follow Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-3xl text-2xl lg:pb-6 pb-3">LinkedIn Profile</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200 h-72 lg:h-[360px] md:h-[320px]">
                    <img className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-24 h-24 mx-auto md:mb-12 mb-8" src={photo4} alt="YouTube" />
                    <h3 className="text-center font-semibold md:text-3xl text-2xl pb-4">Join Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-3xl text-2xl lg:pb-6 pb-3">YouTube Channel</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200 h-72 lg:h-[360px] md:h-[320px]">
                    <img className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-24 h-24 mx-auto md:mb-12 mb-8" src={photo5} alt="Twitter" />
                    <h3 className="text-center font-semibold md:text-3xl text-2xl pb-4">Follow Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-3xl text-2xl lg:pb-6 pb-3">Twitter Profile</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200 h-72 lg:h-[360px] md:h-[320px]">
                    <img className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-24 h-24 mx-auto md:mb-12 mb-8" src={photo6} alt="WhatsApp" />
                    <h3 className="text-center font-semibold md:text-3xl text-2xl pb-4">Join Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-3xl text-2xl lg:pb-6 pb-3">WhatsApp Group</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200 h-72 lg:h-[360px] md:h-[320px]">
                    <img className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-24 h-24 mx-auto md:mb-12 mb-8" src={photo7} alt="Messenger" />
                    <h3 className="text-center font-semibold md:text-3xl text-2xl pb-4">Join Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-3xl text-2xl lg:pb-6 pb-3">Messenger Group</h2>
                </div>
                <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200 h-72 lg:h-[360px] md:h-[320px]">
                    <img className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-24 h-24 mx-auto md:mb-12 mb-8" src={photo8} alt="Threads" />
                    <h3 className="text-center font-semibold md:text-3xl text-2xl pb-4">Join Our </h3>
                    <h2 className="text-[#007BFE] font-bold text-center lg:text-3xl text-2xl lg:pb-6 pb-3">Threads Group</h2>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;