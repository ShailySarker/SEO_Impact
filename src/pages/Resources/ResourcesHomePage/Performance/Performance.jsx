import FailBox from "../../../../components/FailBox/FailBox";
import PassedBox from "../../../../components/PassedBox/PassedBox";
import StarClose from "../../../../components/StarClose/StarClose";
import StarRight from "../../../../components/StarRight/StarRight";
import "./Performance.css";

const Performance = () => {
    return (
        <div className="mt-28">
            <h2 className="font-bold md:text-5xl text-3xl mb-12">Performance</h2>
            <div className="lg:mr-11">
                <img className="flex w-full" src="https://i.ibb.co/qyR4pWM/Frame-75.png" alt="" />
                <div className="flex justify-between items-center mt-12 flex-col lg:flex-row gap-5">
                    <div className="flex items-center gap-10">
                        <div>
                            <p className="w-14 h-14 bg-[#F84B4C] rounded-full"></p>
                            <img className="relative -mb-3 bottom-[38px] -right-[17px]" src="https://i.ibb.co/xXrVh1t/Vector-6.png" alt="" />
                        </div>
                        <h3 className="font-semibold md:text-3xl text-2xl">Performance</h3>

                    </div>
                    <div className="">
                        <div>
                            <progress
                                className="flex items-center progress custom1-progress h-8 md:w-96 w-80"
                                value="50"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>
            {/* 1 */}
            <div className="mt-28 grid md:grid-cols-2 grid-cols-1 gap-16">
                <div className="border-2 py-10 px-5 shadow-xl">
                    <h3 className="font-semibold text-center md:text-3xl text-xl">Page Size</h3>
                    <div className="my-12 flex flex-col justify-center items-center">
                        <div className="radial-progress text-slate-300 transform " style={{
                            "--value": 76, "--size": "10rem", "--thickness": "0.6rem",
                            transform: "rotate(223.5deg)"
                        }}>
                            <div className="radial-progress text-[#03BDA5] transform " style={{
                                "--value": 56, "--size": "10rem", "--thickness": "0.6rem",
                                transform: "rotate(0deg)"
                            }}>
                            </div>

                        </div>
                        <span className="">
                            <img className="w-16 relative bottom-28 -mb-28" src="https://i.ibb.co/g6HWKHT/Group-48.png" alt="" />
                        </span>
                    </div>
                    <div className="relative bottom-6 -mb-8">
                        <h3 className="text-center md:text-5xl text-3xl font-semibold pb-7">2.2 MB</h3>
                        <h4 className="text-center md:text-2xl text-lg font-bold md:pb-10 pb-5">
                            So fast! So light!
                        </h4>
                        <p className="text-lg font-medium text-slate-500 text-center pb-5">Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>
                </div>
                <div className="border-2 py-10 px-5 shadow-xl">
                    <h3 className="font-semibold text-center md:text-3xl text-xl">Page Requests</h3>
                    <div className="my-12 flex flex-col justify-center items-center">
                        <div className="radial-progress text-slate-300 transform " style={{
                            "--value": 76, "--size": "10rem", "--thickness": "0.6rem",
                            transform: "rotate(223.5deg)"
                        }}>
                            <div className="radial-progress text-[#03BDA5] transform " style={{
                                "--value": 20, "--size": "10rem", "--thickness": "0.6rem",
                                transform: "rotate(0deg)"
                            }}>
                            </div>

                        </div>
                        <span className="">
                            <img className="w-16 relative bottom-28 -mb-28" src="https://i.ibb.co/tmThNDC/material-symbols-cloud.png" alt="" />
                        </span>
                    </div>
                    <div className="relative bottom-6 -mb-8">
                        <h3 className="text-center md:text-5xl text-3xl font-semibold pb-7">15</h3>
                        <h4 className="text-center md:text-2xl text-lg font-bold md:pb-10 pb-5">
                            You make this look easy!
                        </h4>
                        <p className="text-lg font-medium text-slate-500 text-center pb-5">Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>
                </div>


                {/* 2 */}
                <div className="">
                    <FailBox></FailBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[550px]">
                        <h3 className="font-semibold text-center md:text-3xl text-xl">Minified Javascript</h3>
                        <div className="flex justify-center my-16">
                            <StarClose></StarClose>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold md:text-2xl text-lg md:pb-8 pb-5">Missed</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[550px]">
                        <h3 className="font-semibold text-center md:text-3xl text-xl">Browser Caching</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold md:text-2xl text-lg md:pb-8 pb-5">Hurray!! Your web caching is actually world class</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Actually Browser caching speeds up your website by storing frequently used content in local memory</p>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[550px]">
                        <h3 className="font-semibold text-center md:text-3xl text-xl">Minimal Page Redirects</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold md:text-2xl text-lg md:pb-8 pb-5">Straight to the point!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Multiple redirects can make your site load slower. Aim for no more than one redirect</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[550px]">
                        <h3 className="font-semibold text-center md:text-3xl text-xl">Image Size</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold md:text-2xl text-lg md:pb-8 pb-5">They fit actually perfect!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className="">
                    <FailBox></FailBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[550px]">
                        <h3 className="font-semibold text-center md:text-3xl text-xl">Minified Javascript</h3>
                        <div className="flex justify-center my-16">
                            <StarClose></StarClose>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold md:text-2xl text-lg md:pb-8 pb-5">Hurray!! Your web caching is actually world class</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">When your Javascript is load faster then it makes your website run much faster</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[550px]">
                        <h3 className="font-semibold text-center md:text-3xl text-xl">Minified CSS</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold md:text-2xl text-lg md:pb-8 pb-5">Short and Sweet!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Performance;