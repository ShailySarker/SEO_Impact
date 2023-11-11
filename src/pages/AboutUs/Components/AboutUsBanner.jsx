import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import banner from '../../../assets/images/AboutUs/AboutUsBanner_banner.png';
import design from '../../../assets/images/AboutUs/AboutUsBanner_rectangle.png';


const AboutUsBanner = () => {
    return (
        <div className="my-12">
            <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center lg:mb-36 mb-24 ">About Us</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-36 gap-24 items-center lg:mx-0 md:mx-16 mx-6 lg:mb-10 mb-16">
                <div className="lg:ml-28">
                    <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl pb-10">SEO Impact</h2>
                    <h4 className="lg:text-2xl md:text-xl text-lg font-semibold text-slate-400 md:pb-20 pb-16 lg:pr-28">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h4>
                    <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 w-28 md:w-36 rounded-xl font-semibold">Learn More</button>
                </div>
                <div className="md:px-12 lg:px-0">
                    <LazyLoadImage
                        src={banner}
                        alt="banner" effect="blur"
                    />
                </div>
            </div>
            <div className=" lg:pt-32 md:pt-20 pt-10 lg:pb-12 md:pb-10 pb-9">
                <img src={design} alt="design" />
            </div>
        </div>
    );
};

export default AboutUsBanner;