import { Link } from "react-router-dom";
import photo from '../../assets/images/NotFound/page-found-concept-illustration_114360-1869.png';


const NotFound = () => {
    return (
        <div className="lg:mt-5 flex justify-center lg:gap-5 flex-col">
            <img className="mx-auto md:w-[500px] w-[400px] md:h-[500px] h-[400px]" src={photo} alt="Not Found Image" />
            <div className="mx-auto">
                <h3 className="lg:text-4xl font-bold md:text-3xl text-2xl">The Page Is Not Found !!!</h3>
                <Link to="/">
                <button className="text-white bg-[#007BFE] md:py-3 md:px-6 px-3 py-2 rounded-xl font-semibold mx-auto flex mt-12 mb-24 ">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;