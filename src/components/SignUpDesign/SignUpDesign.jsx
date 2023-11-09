import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import bg from '../../assets/images/SignUp/SignUp_ellipse.png';
import photo from '../../assets/images/SignUp/SignUp_image.png';


const SignUpDesign = () => {
    return (
        <div>
            <div>
                <img className="lg:w-[680px] md:w-[520px] md:h-[780px] h-[650px]" src={bg} alt="Background" />
            </div>
            <div className="relative md:bottom-[600px] bottom-[500px] md:-mb-[600px] -mb-[620px]  lg:left-72 md:left-56 left-32 lg:mr-72 md:mr-56 mr-32">
                <LazyLoadImage
                    className="md:w-64 w-32 md:h-[600px] h-[500px]" src={photo} alt="Banner Image"
                    effect="blur"
                />
            </div>
        </div>
    );
};

export default SignUpDesign;