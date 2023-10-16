import PassedBox from '../../../../components/PassedBox/PassedBox';
import StarRight from '../../../../components/StarRight/StarRight';

const Mobile = () => {
    return (
        <div className="mt-28">
            <h2 className="font-bold text-5xl mb-12">Mobile</h2>
            <div className="mr-28">
                <img className="flex" src="https://i.ibb.co/KGmcDQB/Frame-77.png" alt="" />
                <div className="flex justify-between items-center mt-12">
                    <div className="flex items-center gap-12">
                        <div>
                            <p className="w-14 h-14 bg-[#CB4BF8] rounded-full"></p>
                        </div>
                        <h3 className="font-semibold text-3xl">Mobile</h3>

                    </div>
                    <div className="">
                        <div>
                            <progress
                                className="flex items-center progress custom3-progress h-8 w-96"
                                value="100"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-28 grid grid-cols-2 gap-16">
                {/* 1 */}
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[500px]">
                        <h3 className="font-semibold text-center text-3xl">Legible Font Size</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-2xl pb-8">Beautiful on the eyess!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[500px]">
                        <h3 className="font-semibold text-center text-3xl">Tap Targets</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-2xl pb-8">Clicking is so easyy!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mobile;