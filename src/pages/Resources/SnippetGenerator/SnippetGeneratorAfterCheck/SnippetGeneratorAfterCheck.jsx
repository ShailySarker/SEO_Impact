import { useState } from "react";
import { Link } from "react-router-dom";
import SnippetGeneratorResultingToggleOn from "./Components/SnippetGeneratorResultingToggleOn";
import SnippetGeneratorResultingToggleOff from "./Components/SnippetGeneratorResultingToggleOff";
import "./SnippetGeneratorAfterCheck.css";


const SnippetGeneratorAfterCheck = () => {

    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className="mt-12 md:mx-16 mx-6 mb-28">
            <div className="">
                <h2 className="font-semibold lg:text-5xl md:text-4xl text-3xl lg:text-start text-center">Snippet Generator</h2>
                <div className="md:mt-24 mt-20 flex justify-center flex-col items-center md:mb-10 ">
                    <input className="border-2 py-3 px-7 md:w-96 w-72  rounded-lg" type="search" name="" id="" placeholder="cbb.coastalbroadband.in" disabled />
                    <Link >
                        <button className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl w-40 md:w-44 font-semibold md:mt-20 mt-14">Analyze Website</button>
                    </Link>
                </div>
            </div>
            <div className="mt-28 flex  flex-col-reverse gap-28">
                <div >
                    <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center mb-16">Keyword</h3>
                    <input className="border-2 md:py-4 py-3 px-5 md:px-14 font-medium w-full rounded-lg md:text-xl text-lg" type="search" name="" id="" placeholder="Google" disabled />

                    <div className="my-20 flex justify-center items-center gap-16 ">
                        <input type="checkbox"
                            checked={isChecked}
                            onChange={handleToggle}
                            className="toggle custom-toggle" />
                        <p className=" lg:text-5xl md:text-4xl text-3xl font-medium">Date</p>
                    </div>
                </div>
                <div>
                    {isChecked ?
                        <SnippetGeneratorResultingToggleOn></SnippetGeneratorResultingToggleOn> :
                        <SnippetGeneratorResultingToggleOff></SnippetGeneratorResultingToggleOff>
                    }

                </div>
            </div>
        </div>
    );
};

export default SnippetGeneratorAfterCheck;