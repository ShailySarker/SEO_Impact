import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import './OurTeam.css';

import { FaArrowAltCircleLeft,  FaArrowAltCircleRight} from "react-icons/fa";


const OurTeam = () => {
    return (
        <div className="lg:mt-32 md:mt-16 pt-5 mb-12 lg:mx-16 md:mx-16 mx-6 items-center">
            <div className="mb-5">
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Meet Our Team</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            </div>
            <div>
                <div className="px-5 py-16 my-5">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container lg:h-[675px] md:h-[660px] h-[540px] relative"
                    >
                        <SwiperSlide>
                            <div className='border-4 p-5 bg-[#EBF5FF] border-2 border-[#007BFE] rounded-2xl'>
                                <img className='' src="https://i.ibb.co/wR4F3cc/Ellipse-10.png" alt="slide_image" />
                                <h3 className="font-bold pt-12 md:text-3xl text-2xl text-center">Lucy William</h3>
                                <p className="pt-8 md:text-xl text-lg font-semibold text-center pb-8">Software Analyst, SEO Impact</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-4 p-5 bg-[#EBF5FF] border-2 border-[#007BFE] rounded-2xl'>
                                <img className='' src="https://i.ibb.co/wR4F3cc/Ellipse-10.png" alt="slide_image" />
                                <h3 className="font-bold pt-12 md:text-3xl text-2xl text-center">Lucy William</h3>
                                <p className="pt-8 md:text-xl text-lg font-semibold text-center pb-8">Software Analyst, SEO Impact</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-4 p-5 bg-[#EBF5FF] border-2 border-[#007BFE] rounded-2xl'>
                                <img className='' src="https://i.ibb.co/wR4F3cc/Ellipse-10.png" alt="slide_image" />
                                <h3 className="font-bold pt-12 md:text-3xl text-2xl text-center">Lucy William</h3>
                                <p className="pt-8 md:text-xl text-lg font-semibold text-center pb-8">Software Analyst, SEO Impact</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-4 p-5 bg-[#EBF5FF] border-2 border-[#007BFE] rounded-2xl'>
                                <img className='' src="https://i.ibb.co/wR4F3cc/Ellipse-10.png" alt="slide_image" />
                                <h3 className="font-bold pt-12 md:text-3xl text-2xl text-center">Lucy William</h3>
                                <p className="pt-8 md:text-xl text-lg font-semibold text-center pb-8">Software Analyst, SEO Impact</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-4 p-5 bg-[#EBF5FF] border-2 border-[#007BFE] rounded-2xl'>
                                <img className='' src="https://i.ibb.co/wR4F3cc/Ellipse-10.png" alt="slide_image" />
                                <h3 className="font-bold pt-12 md:text-3xl text-2xl text-center">Lucy William</h3>
                                <p className="pt-8 md:text-xl text-lg font-semibold text-center pb-8">Software Analyst, SEO Impact</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-4 p-5 bg-[#EBF5FF] border-2 border-[#007BFE] rounded-2xl'>
                                <img className='' src="https://i.ibb.co/wR4F3cc/Ellipse-10.png" alt="slide_image" />
                                <h3 className="font-bold pt-12 md:text-3xl text-2xl text-center">Lucy William</h3>
                                <p className="pt-8 md:text-xl text-lg font-semibold text-center pb-8">Software Analyst, SEO Impact</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-4 p-5 bg-[#EBF5FF] border-2 border-[#007BFE] rounded-2xl'>
                                <img className='' src="https://i.ibb.co/wR4F3cc/Ellipse-10.png" alt="slide_image" />
                                <h3 className="font-bold pt-12 md:text-3xl text-2xl text-center">Lucy William</h3>
                                <p className="pt-8 md:text-xl text-lg font-semibold text-center pb-8">Software Analyst, SEO Impact</p>
                            </div>
                        </SwiperSlide>
                        <div className="slider-controller">
                            <div className="swiper-button-prev slider-arrow">
                                {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                                <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                                <FaArrowAltCircleRight></FaArrowAltCircleRight>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default OurTeam;