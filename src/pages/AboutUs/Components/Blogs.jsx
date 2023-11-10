import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blog from '../../../assets/images/AboutUs/Blogs/program1.jpg';


const Blogs = () => {
    const settings2 = {
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
        <div className="lg:mt-20 md:mt-16 pt-16 mb-20 lg:mx-16 md:mx-16 mx-6 items-center">
            <div className="mb-5">
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Blogs</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget.</p>
            </div>
            <div className="mt-20">
                <Slider {...settings2}>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 mb-16'>
                        <img className='rounded-xl lg:h-[290px] w-full md:h-[240px] h-52 ' src={blog} alt="blog" />
                        <p className='md:text-lg font-bold text-[#007BFE] lg:pt-12 md:pt-9 pt-7 lg:pb-6 md:pb-5 pb-4'>Date: 29/10/23</p>
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pb-7 md:pb-6 pb-4'>Organize Orientation Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These programs are for new hires and are designed to introduce them to the company’s culture, policies, and procedures.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 mb-16'>
                        <img className='rounded-xl lg:h-[290px] w-full md:h-[240px] h-52 ' src={blog} alt="blog" />
                        <p className='md:text-lg font-bold text-[#007BFE] lg:pt-12 md:pt-9 pt-7 lg:pb-6 md:pb-5 pb-4'>Date: 29/10/23</p>
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pb-7 md:pb-6 pb-4'>Organize Orientation Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These programs are for new hires and are designed to introduce them to the company’s culture, policies, and procedures.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 mb-16'>
                        <img className='rounded-xl lg:h-[290px] w-full md:h-[240px] h-52 ' src={blog} alt="blog" />
                        <p className='md:text-lg font-bold text-[#007BFE] lg:pt-12 md:pt-9 pt-7 lg:pb-6 md:pb-5 pb-4'>Date: 29/10/23</p>
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pb-7 md:pb-6 pb-4'>Organize Orientation Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These programs are for new hires and are designed to introduce them to the company’s culture, policies, and procedures.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 mb-16'>
                        <img className='rounded-xl lg:h-[290px] w-full md:h-[240px] h-52 ' src={blog} alt="blog" />
                        <p className='md:text-lg font-bold text-[#007BFE] lg:pt-12 md:pt-9 pt-7 lg:pb-6 md:pb-5 pb-4'>Date: 29/10/23</p>
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pb-7 md:pb-6 pb-4'>Organize Orientation Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These programs are for new hires and are designed to introduce them to the company’s culture, policies, and procedures.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 mb-16'>
                        <img className='rounded-xl lg:h-[290px] w-full md:h-[240px] h-52 ' src={blog} alt="blog" />
                        <p className='md:text-lg font-bold text-[#007BFE] lg:pt-12 md:pt-9 pt-7 lg:pb-6 md:pb-5 pb-4'>Date: 29/10/23</p>
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pb-7 md:pb-6 pb-4'>Organize Orientation Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These programs are for new hires and are designed to introduce them to the company’s culture, policies, and procedures.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 mb-16'>
                        <img className='rounded-xl lg:h-[290px] w-full md:h-[240px] h-52 ' src={blog} alt="blog" />
                        <p className='md:text-lg font-bold text-[#007BFE] lg:pt-12 md:pt-9 pt-7 lg:pb-6 md:pb-5 pb-4'>Date: 29/10/23</p>
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pb-7 md:pb-6 pb-4'>Organize Orientation Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These programs are for new hires and are designed to introduce them to the company’s culture, policies, and procedures.</p>
                    </div>
                    <div className='border-2 rounded-xl border-[#007BFE] md:p-6 p-4 mb-16'>
                        <img className='rounded-xl lg:h-[290px] w-full md:h-[240px] h-52 ' src={blog} alt="blog" />
                        <p className='md:text-lg font-bold text-[#007BFE] lg:pt-12 md:pt-9 pt-7 lg:pb-6 md:pb-5 pb-4'>Date: 29/10/23</p>
                        <h3 className='font-semibold lg:text-3xl md:text-2xl text-xl lg:pb-7 md:pb-6 pb-4'>Organize Orientation Programs</h3>
                        <p className='md:text-lg font-medium lg:pb-6 md:pb-5 pb-4'> These programs are for new hires and are designed to introduce them to the company’s culture, policies, and procedures.</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Blogs;