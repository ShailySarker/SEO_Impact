import photo1 from '../../../assets/images/ContactUs/SocialMedia_facebookLogo.png';
import photo2 from '../../../assets/images/ContactUs/SocialMedia_instagramLogo.png';
import photo3 from '../../../assets/images/ContactUs/SocialMedia_linkedInLogo.png';
import photo4 from '../../../assets/images/ContactUs/SocialMedia_youtubeLogo.png';
import photo5 from '../../../assets/images/ContactUs/SocialMedia_twitterLogo.png';
import photo6 from '../../../assets/images/ContactUs/SocialMedia_whatsappLogo.png';
import photo7 from '../../../assets/images/ContactUs/SocialMedia_messengerLogo.png';
import photo8 from '../../../assets/images/ContactUs/SocialMedia_threadsLogo.png';

const data = [
    {
        id: 1,
        image: photo1,
        tag: "Follow Our",
        socialMedia: "Facebook Page"
    },
    {
        id: 2,
        image: photo2,
        tag: "Follow Our",
        socialMedia: "Instagram Page"
    },
    {
        id: 3,
        image: photo3,
        tag: "Follow Our",
        socialMedia: "LinkedIn Profile"
    },
    {
        id: 4,
        image: photo4,
        tag: "Join Our",
        socialMedia: "YouTube Channel"
    },
    {
        id: 5,
        image: photo5,
        tag: "Follow Our",
        socialMedia: "Twitter Profile"
    },
    {
        id: 6,
        image: photo6,
        tag: "Join Our",
        socialMedia: "WhatsApp Group"
    },
    {
        id: 7,
        image: photo7,
        tag: "Join Our",
        socialMedia: "Messenger Group"
    },
    {
        id: 8,
        image: photo8,
        tag: "Join Our",
        socialMedia: "Threads Group"
    }
];

const SocialMediaInfo = ({ item }) => {
    const { id, image, tag, socialMedia } = item;

    return (
        <div className="border-2 px-2 lg:py-8 md:py-5 py-4 rounded-xl border-[#007BFE] hover:shadow-2xl hover:shadow-blue-200">
            <img className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 mx-auto lg:mb-12 md:mb-8 mb-5" src={image} alt={`SocialMedial_${id} Photo`} />
            <h3 className="text-center font-semibold lg:text-2xl text-xl md:pb-4 pb-2">{tag}</h3>
            <h2 className="text-[#007BFE] font-bold text-center lg:text-2xl text-xl pb-2">{socialMedia}</h2>
        </div>
    );
};

const SocialMedia = () => {
    return (
        <div className="lg:mt-32 md:mt-16 pt-5 mb-36 lg:mx-24 md:mx-16 mx-6 items-center">
            <div className="mb-24">
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Our Social Media Links</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-12 md:gap-8 gap-6 justify-center items-center">
                {
                    data.map((item) => (
                        <SocialMediaInfo
                            item={item}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default SocialMedia;