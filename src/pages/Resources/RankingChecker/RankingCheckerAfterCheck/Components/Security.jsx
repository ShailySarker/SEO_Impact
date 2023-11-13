import FailBox from "../../../../../components/Others/FailBox/FailBox";
import PassedBox from "../../../../../components/Others/PassedBox/PassedBox";
import StarClose from "../../../../../components/Others/StarClose/StarClose";
import StarRight from "../../../../../components/Others/StarRight/StarRight";
import banner from '../../../../../assets/images/Resources/RankingChecker/RankingCheckerAfterCheck/Security_banner.png';

const Security = () => {
    return (
        <div className="mt-28">
            <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mb-12">Security</h2>
            <div className="lg:mr-12">
                <img className="flex w-full md:h-[550px]" src={banner} alt="banner" />
                <div className="flex justify-between items-center mt-12 flex-col lg:flex-row gap-5">
                    <div className="flex items-center gap-12">
                        <div>
                            <p className="w-14 h-14 bg-[#F89E4B] rounded-full"></p>
                        </div>
                        <h3 className="font-semibold md:text-3xl text-2xl">Security</h3>
                    </div>
                    <div className="">
                        <div>
                            <progress
                                className="flex items-center progress custom4-progress h-8 lg:w-[400px] md:w-96 w-72"
                                value="35"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-28 grid md:grid-cols-2 grid-cols-1 gap-16 md:mx-0 mx-4">
                {/* 1 */}
                <div className="">
                    <PassedBox />
                    <div className="border-2 px-5 py-10 shadow-xl lg:h-[550px] h-[500px]">
                        <h3 className="font-semibold text-center lg:text-3xl md:text-2xl text-xl">HTTPS SECURED</h3>
                        <div className="flex justify-center my-16">
                            <StarRight />
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold lg:text-2xl md:text-xl text-lg pb-8">Hurray it is secured!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <FailBox />
                    <div className="border-2 px-5 py-10 shadow-xl lg:h-[550px] h-[500px]">
                        <h3 className="font-semibold text-center lg:text-3xl md:text-2xl text-xl">Secure JS Libraries</h3>
                        <div className="flex justify-center my-16">
                            <StarClose />
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold lg:text-2xl md:text-xl text-lg pb-8">Am not feeling safe here!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Security;