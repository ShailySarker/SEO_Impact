import FailBox from "../../../../components/FailBox/FailBox";
import PassedBox from "../../../../components/PassedBox/PassedBox";
import StarClose from "../../../../components/StarClose/StarClose";
import StarRight from "../../../../components/StarRight/StarRight";

const Security = () => {
    return (
        <div className="mt-28">
            <h2 className="font-bold text-5xl mb-12">Security</h2>
            <div className="mr-28">
                <img className="flex" src="https://i.ibb.co/3TTp2K8/Frame-78.png" alt="" />
                <div className="flex justify-between items-center mt-12">
                    <div className="flex items-center gap-12">
                        <div>
                            <p className="w-14 h-14 bg-[#F89E4B] rounded-full"></p>
                        </div>
                        <h3 className="font-semibold text-3xl">Security</h3>

                    </div>
                    <div className="">
                        <div>
                            <progress
                                className="flex items-center progress custom4-progress h-8 w-96"
                                value="35"
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
                        <h3 className="font-semibold text-center text-3xl">HTTPS SECURED</h3>
                        <div className="flex justify-center my-16">
                            <StarRight></StarRight>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-2xl pb-8">Hurray it is secured!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <FailBox></FailBox>
                    <div className="border-2 px-5 py-10 shadow-xl h-[500px]">
                        <h3 className="font-semibold text-center text-3xl">Secure JS Libraries</h3>
                        <div className="flex justify-center my-16">
                            <StarClose></StarClose>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-2xl pb-8">Am not feeling safe here!</h3>
                            <p className="text-lg font-medium text-slate-500 pb-3">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Security;