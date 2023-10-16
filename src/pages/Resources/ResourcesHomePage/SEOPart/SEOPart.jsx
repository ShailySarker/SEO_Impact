import FailBox from "../../../../components/FailBox/FailBox";
import PassedBox from "../../../../components/PassedBox/PassedBox";
import StarClose from "../../../../components/StarClose/StarClose";
import StarRight from "../../../../components/StarRight/StarRight";

const SEOPart = () => {
    return (
        <div className="mt-28">
            <h2 className="font-bold text-5xl mb-12">SEO</h2>
            <div className="mr-28">
                <img className="flex" src="https://i.ibb.co/xfXp2gK/Frame-76.png" alt="" />
                <div className="flex justify-between items-center mt-12">
                    <div className="flex items-center gap-12">
                        <div>
                            <p className="w-14 h-14 bg-[#03BDA5] rounded-full"></p>
                            <img className="relative -mb-3 bottom-[37px] -right-[19px]" src="https://i.ibb.co/g67MCgj/Vector-5.png" alt="" />
                        </div>
                        <h3 className="font-semibold text-3xl">SEO</h3>

                    </div>
                    <div className="">
                        <div>
                            <progress
                                className="flex items-center progress custom2-progress h-8 w-96"
                                value="50"
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
                        <h3 className="font-semibold text-center text-3xl">Permission to Index</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-2xl pb-8">Granted</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <FailBox></FailBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[500px]">
                        <h3 className="font-semibold text-center text-3xl">Meta Description</h3>
                        <div className="flex justify-center my-16">
                            <StarClose></StarClose>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-2xl pb-8">Missed</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[500px]">
                        <h3 className="font-semibold text-center text-3xl">Content Plugin!</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-2xl pb-8">Nice, Nice, Nice!! Good Job.</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <PassedBox></PassedBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[500px]">
                        <h3 className="font-semibold text-center text-3xl">Descriptive link text!</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-2xl pb-8">Here, Your links make sense!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SEOPart;