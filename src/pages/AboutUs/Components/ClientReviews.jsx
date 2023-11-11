import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "../../../components/SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "../../../components/SamplePrevArrow/SamplePrevArrow";
import './ClientReviews.css';
import client from "../../../assets/images/AboutUs/ClientReviews_client.png";

const clientReviewData = [
    {
        id: 1,
        image: client,
        name: "Lily Rio",
        rating: 5,
        review: "Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel."
    },
    {
        id: 2,
        image: client,
        name: "Lira Rio",
        rating: 5,
        review: "Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel."
    },
    {
        id: 3,
        image: client,
        name: "Lini Rio",
        rating: 4.5,
        review: "Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel."
    },
    {
        id: 4,
        image: client,
        name: "Lina Rio",
        rating: 5,
        review: "Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel."
    },
    {
        id: 5,
        image: client,
        name: "Luba Rio",
        rating: 4,
        review: "Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel."
    },
    {
        id: 6,
        image: client,
        name: "Lucky Rio",
        rating: 4.5,
        review: "Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel."
    },
    {
        id: 7,
        image: client,
        name: "Luny Rio",
        rating: 5,
        review: "Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel."
    },
    {
        id: 8,
        image: client,
        name: "Luna Leo",
        rating: 4.5,
        review: "Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel."
    }
];

const ClientReviewsInfo = ({ reviewer }) => {
    const { id, image, name, rating, review } = reviewer;

    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating % 1) !== 0;
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} color="#007BFE" />
    ));

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half-star" color="#007BFE" />);
    }

    stars.push(...Array.from({ length: remainingStars }, (_, index) => (
        <FaStar key={`empty-star-${index}`} color="#D1D5DB" />
    )));

    return (
        <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl mb-12">
            <div className="bg-[#007BFE] rounded-t-xl p-5">
                <img className="w-44 h-44 mx-auto " src={image} alt={`client_${id} photo`} />
            </div>
            <div className="p-5 flex flex-col justify-center items-center gap-6">
                <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">{name}</h3>
                <div className="rating text-xl font-semibold flex gap-2 items-center">{stars}</div>
                <p className="text-lg font-semibold">{review}</p>
            </div>
        </div>
    );
};

const ClientReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [

            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="lg:pt-16 md:pt-12 pt-10 mb-28 lg:mx-36 md:mx-16 mx-6">
            <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Client Reviews</h3>
            <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            <div className="w-4/5 mx-auto  md:mt-24 mt-16">
                <Slider {...settings}>
                    {
                        clientReviewData.map((reviewer) => (
                            <ClientReviewsInfo
                                reviewer={reviewer}
                                key={reviewer.id}
                            />
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default ClientReviews;