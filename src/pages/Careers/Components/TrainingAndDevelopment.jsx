import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import program1 from "../../../assets/images/Careers/TrainingAndDevelopment/program1.jpg";
import program2 from "../../../assets/images/Careers/TrainingAndDevelopment/program2.jpg";
import program3 from "../../../assets/images/Careers/TrainingAndDevelopment/program3.jpg";
import program4 from "../../../assets/images/Careers/TrainingAndDevelopment/program4.jpg";
import program5 from "../../../assets/images/Careers/TrainingAndDevelopment/program5.jpg";
import program6 from "../../../assets/images/Careers/TrainingAndDevelopment/program6.jpg";


const TrainingAndDevelopment = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
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
        <div className="lg:pt-8 md:pt-5 pt-0 lg:mb-36 lg:mx-16 md:mb-0 mb-9 md:mx-16 mx-6">
            <div className='lg:mb-28 md:mb-20 mb-2'>
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Training and Development Program</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            </div>
            <div className="mt-20 mb-28">
                <Slider {...settings}>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 lg:h-[580px] md:h-[540px] h-[450px] mb-12'>
                        <img className='rounded-xl lg:h-[270px] w-full md:h-[230px] h-52' src={program1} alt="Program1 Photo" />
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pt-12 md:pt-9 pt-7 lg:pb-7 md:pb-6 pb-4 text-center text-black'>Orientation Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These programs are for new hires and are designed to introduce them to the company’s culture, policies, and procedures.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 lg:h-[580px] md:h-[540px] h-[450px] mb-12'>
                    <img className='rounded-xl lg:h-[270px] w-full md:h-[230px] h-52' src={program2} alt="Program2 Photo" />
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pt-12 md:pt-9 pt-7 lg:pb-7 md:pb-6 pb-4 text-center text-black'>Technical Skills Workshops</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These workshops concentrate on improving specific technical skills, such as coding, data analysis, or software proficiency.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 lg:h-[580px] md:h-[540px] h-[450px] mb-12'>
                    <img className='rounded-xl lg:h-[270px] w-full md:h-[230px] h-52' src={program3} alt="Program3 Photo" />
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pt-12 md:pt-9 pt-7 lg:pb-7 md:pb-6 pb-4 text-center text-black'>Leadership Development</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'>Geared towards grooming future leaders, these programs focus on enhancing leadership skills, decision-making, and strategic thinking.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 lg:h-[580px] md:h-[540px] h-[450px] mb-12'>
                    <img className='rounded-xl lg:h-[270px] w-full md:h-[230px] h-52' src={program4} alt="Program4 Photo" />
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pt-12 md:pt-9 pt-7 lg:pb-7 md:pb-6 pb-4 text-center text-black'>Customer Service Training</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'>For customer-facing roles, this training helps employees develop excellent communication and problem-solving skills.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 lg:h-[580px] md:h-[540px] h-[450px] mb-12'>
                    <img className='rounded-xl lg:h-[270px] w-full md:h-[230px] h-52' src={program5} alt="Program5 Photo" />
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pt-12 md:pt-9 pt-7 lg:pb-7 md:pb-6 pb-4 text-center text-black'>Soft Skills Training</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'>Focusing on emotional intelligence, time management, stress management, and teamwork, these programs improve personal effectiveness.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 lg:h-[580px] md:h-[540px] h-[450px] mb-12'>
                    <img className='rounded-xl lg:h-[270px] w-full md:h-[230px] h-52' src={program6} alt="Program6 Photo" />
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pt-12 md:pt-9 pt-7 lg:pb-7 md:pb-6 pb-4 text-center text-black'>Wellness Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'>Designed to promote employee well-being, they include yoga classes, mindfulness sessions, and stress management workshops.</p>
                    </div>
                </Slider>
            </div >
        </div >
    );
};

export default TrainingAndDevelopment;