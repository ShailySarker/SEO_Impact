import design from "../../../assets/images/Careers/CareersBanner_design.png";
import { LazyLoadImage } from "react-lazy-load-image-component";


const CareersBanner = () => {
    return (
        <div className="my-12">
            <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center lg:mb-36 mb-24">Careers</h2>

            <div className="lg:ml-28 md:ml-12 ml-6 lg:mr-[900px] md:mr-60 mr-10">
                <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl pb-7">Join Us</h2>
                <p className="font font-semibold lg:text-2xl md:text-xl text-lg text-slate-500">Lorem ipsum dolor sit amet consectetur. Luctus in convallis odio eu egestas lectus.</p>
                <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 w-36 md:w-40 rounded-xl font-semibold lg:mt-16 mt-12">More about us</button>
            </div>

            {/* normal */}
            {/* <img className="relative lg:bottom-60 md:bottom-23 bottom-12" src={design} alt="design" /> */}

            {/* with lazy load Image */}
            <LazyLoadImage
                className="relative lg:bottom-60 md:bottom-32 bottom-12"
                src={design}
                alt="design"
            />

        </div>
    );
};

export default CareersBanner;