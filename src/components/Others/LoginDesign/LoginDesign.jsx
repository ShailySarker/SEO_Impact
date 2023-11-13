import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import bg from "../../../assets/images/Login/Login_ellipse.png";
import photo from "../../../assets/images/Login/Login_image.png";

const LoginDesign = () => {
    return (
        <div>
            <div>
                <img className="md:w-[780px] w-[300px] md:h-[740px] h-[600px]" src={bg} alt="Background" />
            </div>
            <div className="relative md:bottom-[600px] bottom-[500px] md:-mb-[600px] -mb-[400px] lg:left-96 md:left-72 left-24 lg:mr-96 md:mr-80 mr-24">
                <LazyLoadImage
                    className="md:w-64 w-32 md:h-[600px] h-[500px]" src={photo} alt="Banner Image"
                    effect="blur"
                />
            </div>
        </div>
    );
};

export default LoginDesign;