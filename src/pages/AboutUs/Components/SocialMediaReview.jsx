import facebook from '../../../assets/images/AboutUs/SocialMediaReview_facebookLogo.png';
import instagram from "../../../assets/images/AboutUs/SocialMediaReview_instagramLogo.png";
import linkedIn from "../../../assets/images/AboutUs/SocialMediaReview_linkedInLogo.png";
import youTube from "../../../assets/images/AboutUs/SocialMediaReview_youtubeLogo.png";
import twitter from "../../../assets/images/AboutUs/SocialMediaReview_twitterLogo.png";
import whatsapp from "../../../assets/images/AboutUs/SocialMediaReview_whatsappLogo.png";
import messenger from "../../../assets/images/AboutUs/SocialMediaReview_messengerLogo.png";
import threads from "../../../assets/images/AboutUs/SocialMediaReview_twitterLogo.png";

const socialMediaReviewData = [
    {
        id: 1,
        review: "SEO Impact is creating new milestone",
        image: facebook,
        reviewerName: "Rio Anna",
        reviewMedia: "Facebook Page"

    },
    {
        id: 2,
        review: "SEO Impact is creating new milestone",
        image: instagram,
        reviewerName: "Rio Anna",
        reviewMedia: "Instagram Page"
    },
    {
        id: 3,
        review: "SEO Impact is creating new milestone",
        image: linkedIn,
        reviewerName: "Rio Anna",
        reviewMedia: "LinkedIn Profile"
    },
    {
        id: 4,
        review: "SEO Impact is creating new milestone",
        image: youTube,
        reviewerName: "Rio Anna",
        reviewMedia: "YouTube Channel"
    },
    {
        id: 5,
        review: "SEO Impact is creating new milestone",
        image: twitter,
        reviewerName: "Rio Anna",
        reviewMedia: "Twitter Profile"
    },
    {
        id: 6,
        review: "SEO Impact is creating new milestone",
        image: whatsapp,
        reviewerName: "Rio Anna",
        reviewMedia: "WhatsApp Group"
    },
    {
        id: 7,
        review: "SEO Impact is creating new milestone",
        image: messenger,
        reviewerName: "Rio Anna",
        reviewMedia: "Messenger Group"
    },
    {
        id: 8,
        review: "SEO Impact is creating new milestone",
        image: threads,
        reviewerName: "Rio Anna",
        reviewMedia: "Threads Group"
    }
];

const SocialMediaReviewInfo = ({ reviewer }) => {
    const { id, review, image, reviewerName, reviewMedia } = reviewer;
    return (
        <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col hover:bg-[#EBF5FF] transform transition-transform duration-500 ease-in-out shadow-lg">
            <h2 className="lg:text-3xl text-xl font-bold text-center pb-10 text-black">“<span className="text-[#007BFE]">{review}</span>”</h2>
            <img className='lg:w-28 w-20 h-20 lg:h-28 mx-auto mb-4' src={image} alt={`Social Media_${id} logo`} />
            <h3 className="font-bold pt-7 lg:text-3xl text-2xl text-right">{reviewerName}</h3>
            <p className="pt-4 lg:text-xl text-lg font-semibold text-right border-b-2 pb-6">- From <span className="text-[#007BFE]">{reviewMedia}</span></p>
        </div>
    );
};

const SocialMediaReview = () => {
    return (
        <div className="lg:pt-16 md:pt-12 pt-10 mb-28 lg:mx-20 md:mx-16 mx-6">
            <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10 ">Social Media Reviews</h3>
            <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center lg:mx-32 md:mx-12 mx-2">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget.</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-0 md:mx-12 mx-5 md:gap-10 gap-6 mt-20">
                {
                    socialMediaReviewData.map((reviewer) => (
                        <SocialMediaReviewInfo
                            reviewer={reviewer}
                            key={reviewer.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default SocialMediaReview;