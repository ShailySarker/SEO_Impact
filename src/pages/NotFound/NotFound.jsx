import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="lg:mt-5 flex justify-center lg:gap-5 flex-col">
            <img className="mx-auto md:w-[500px] w-[400px] md:h-[500px] h-[400px]" src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg&ga=GA1.1.1826606834.1698916318&semt=ais" alt="" />
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