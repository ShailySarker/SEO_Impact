import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import photo from "../../../assets/images/Pricing/Buying_rafiki.png";

const Buying = () => {
    return (
        <div className="mb-16 grid lg:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-20 gap-24 items-center">
            <div className="text-center">
                <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold pb-5 text-slate-500">Why you’re waiting for?? </h3>
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#FF3737]">Buy Now!!!</h2>
            </div>
            <div className="flex justify-center">
                <LazyLoadImage
                    className="lg:w-auto md:w-[450px] w-[350px] lg:mx-0 mx-auto" src={photo} alt="photo"
                    effect="blur"
                />
            </div>
        </div>
    );
};

export default Buying;