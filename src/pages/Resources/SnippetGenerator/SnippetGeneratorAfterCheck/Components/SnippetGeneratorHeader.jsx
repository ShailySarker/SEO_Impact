import { Link } from "react-router-dom";

const SnippetGeneratorHeader = () => {
    return (
        <div>
            <div className="">
                <h2 className="font-semibold lg:text-5xl md:text-4xl text-3xl lg:text-start text-center">Snippet Generator</h2>
                <div className="md:mt-24 mt-20 flex justify-center flex-col items-center md:mb-10 ">
                    <input className="border-2 py-3 px-7 md:w-96 w-72  rounded-lg" type="search" name="" id="" placeholder="cbb.coastalbroadband.in" disabled />
                    <Link >
                        <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl w-40 md:w-44 font-semibold md:mt-20 mt-14">Analyze Website</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SnippetGeneratorHeader;