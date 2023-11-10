import { FaStar, FaStarHalf } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "../../../components/SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "../../../components/SamplePrevArrow/SamplePrevArrow";
import './ClientReviews.css';

import client from "../../../assets/images/AboutUs/ClientReviews/Client.png";


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
                    <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl">
                        <div className="bg-[#007BFE] rounded-t-xl p-5">
                            <img className="w-44 h-44 mx-auto" src={client} alt="client photo" />
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center gap-6">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">Lily Rio</h3>
                            <p className="text-xl font-semibold"><span className="text-[#007BFE] flex gap-2 items-center"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></p>
                            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. </p>
                        </div>
                    </div>
                    <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl">
                        <div className="bg-[#007BFE] rounded-t-xl p-5">
                            <img className="w-44 h-44 mx-auto " src={client} alt="client photo" />
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center gap-6">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">Lira Rio</h3>
                            <p className="text-xl font-semibold"><span className="text-[#007BFE] flex gap-2 items-center"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></p>
                            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. </p>
                        </div>
                    </div>
                    <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl">
                        <div className="bg-[#007BFE] rounded-t-xl p-5">
                            <img className="w-44 h-44 mx-auto" src={client} alt="client photo" />
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center gap-6">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">Lini Rio</h3>
                            <p className="text-xl font-semibold"><span className="text-[#007BFE] flex gap-2 items-center"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></p>
                            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. </p>
                        </div>
                    </div>
                    <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl">
                        <div className="bg-[#007BFE] rounded-t-xl p-5">
                            <img className="w-44 h-44 mx-auto" src={client} alt="client photo" />
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center gap-6">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">Lina Rio</h3>
                            <p className="text-xl font-semibold"><span className="text-[#007BFE] flex gap-2 items-center"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalf></FaStarHalf></span></p>
                            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. </p>
                        </div>
                    </div>
                    <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl">
                        <div className="bg-[#007BFE] rounded-t-xl p-5">
                            <img className="w-44 h-44 mx-auto" src={client} alt="client photo" />
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center gap-6">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">Luba Rio</h3>
                            <p className="text-xl font-semibold"><span className="text-[#007BFE] flex gap-2 items-center"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></p>
                            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. </p>
                        </div>
                    </div>
                    <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl">
                        <div className="bg-[#007BFE] rounded-t-xl p-5">
                            <img className="w-44 h-44 mx-auto" src={client} alt="client photo" />
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center gap-6">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">Lucky Rio</h3>
                            <p className="text-xl font-semibold"><span className="text-[#007BFE] flex gap-2 items-center"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalf></FaStarHalf></span></p>
                            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. </p>
                        </div>
                    </div>
                    <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl">
                        <div className="bg-[#007BFE] rounded-t-xl p-5">
                            <img className="w-44 h-44 mx-auto" src={client} alt="client photo" />
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center gap-6">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">Luny Rio</h3>
                            <p className="text-xl font-semibold"><span className="text-[#007BFE] flex gap-2 items-center"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></p>
                            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. </p>
                        </div>
                    </div>
                    <div className="lg:h-[510px] md:h-[480px] h-[500px] border-2 rounded-xl">
                        <div className="bg-[#007BFE] rounded-t-xl p-5">
                            <img className="w-44 h-44 mx-auto" src={client} alt="client photo" />
                        </div>
                        <div className="p-5 flex flex-col justify-center items-center gap-6">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">Luna Leo</h3>
                            <p className="text-xl font-semibold"><span className="text-[#007BFE] flex gap-2 items-center"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalf></FaStarHalf></span></p>
                            <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ClientReviews;