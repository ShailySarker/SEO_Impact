import PassedBox from '../../../../components/PassedBox/PassedBox';
import StarRight from '../../../../components/StarRight/StarRight';

const Mobile = () => {
    return (
        <div className="mt-28">
            <h2 className="font-bold lg:text-5xl md:text-3xl text-3xl mb-12">Mobile</h2>
            <div className="lg:mr-11">
                <img className="flex w-full" src="https://i.ibb.co/KGmcDQB/Frame-77.png" alt="" />
                <div className="flex justify-between items-center mt-12 flex-col lg:flex-row gap-5">
                    <div className="flex items-center gap-12">
                        <div>
                            <p className="w-14 h-14 bg-[#CB4BF8] rounded-full"></p>
                        </div>
                        <h3 className="font-semibold md:text-3xl text-2xl">Mobile</h3>
                    </div>
                    <div className="">
                        <div>
                            <progress
                                className="flex items-center progress custom3-progress h-8 lg:w-[550px] md:w-96 w-72"
                                value="100"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-28 grid md:grid-cols-2 grid-cols-1 gap-16 md:mx-0 mx-4">
                {/* 1 */}
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl lg:h-[550px] h-[500px]">
                        <h3 className="font-semibold text-center lg:text-3xl md;text-2xl text-xl">Legible Font Size</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold lg:text-2xl md:text-xl text-lg md:pb-8 pb-5">Beautiful on the eyess!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl lg:h-[550px] h-[500px]">
                        <h3 className="font-semibold text-center lg:text-3xl md;text-2xl text-xl">Tap Targets</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold lg:text-2xl md:text-xl text-lg md:pb-8 pb-5">Clicking is so easyy!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mobile;