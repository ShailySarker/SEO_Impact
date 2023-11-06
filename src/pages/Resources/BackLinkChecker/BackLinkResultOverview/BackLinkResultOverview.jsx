import world from '../../../../assets/images/Resources/BackLinkChecker/BackLinkCheckerAfterCheck/BackLinkResultOverview/mdi_world.png';
import linkUp from '../../../../assets/images/Resources/BackLinkChecker/BackLinkCheckerAfterCheck/BackLinkResultOverview/solar_link-bold.png';


const BackLinkResultOverview = () => {
    return (
        <div className="mt-36 lg:mx-0 md:mx-12 mx-20">
            <div className="flex md:flex-row flex-col gap-10 justify-center">
                <div className="bg-[#379FFF1A] px-3 py-6 rounded-xl lg:w-[250px] md:w-52 lg:h-40 md:h-44 flex justify-center flex-col items-center">
                    <div className="flex gap-6 items-center ">
                        <img src={world} alt="world icon" />
                        <h3 className=" lg:text-2xl md:text-xl text-lg font-semibold">Domain Rating</h3>
                    </div>
                    <div>
                        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center pt-8">5</h2>
                    </div>
                </div>
                <div className="bg-[#379FFF1A] px-3 py-6 rounded-xl lg:w-[250px] md:w-52 lg:h-40 md:h-44 flex justify-center flex-col items-center">
                    <div className="flex gap-6 items-center ">
                        <img src={world} alt="world icon" />
                        <h3 className=" lg:text-2xl md:text-xl text-lg font-semibold">Domains</h3>
                    </div>
                    <div>
                        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center pt-8">1</h2>
                    </div>
                </div>
                <div className="bg-[#379FFF1A] px-3 py-6 rounded-xl lg:w-[250px] md:w-52 lg:h-40 md:h-44 flex justify-center flex-col items-center">
                    <div className="flex gap-6 items-center ">
                        <img src={linkUp} alt="link icon" />
                        <h3 className=" lg:text-2xl md:text-xl text-lg font-semibold">Backlinks</h3>
                    </div>
                    <div>
                        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center pt-8">7</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex md:flex-row flex-col md:mt-16 mt-10 lg:mx-32 md:mx-[120px] gap-10 justify-center">
                    <div className="bg-[#379FFF1A] px-3 py-6 rounded-xl lg:w-[250px] md:w-52 lg:h-40 md:h-44">
                        <div className="text-center">
                            <h3 className=" lg:text-2xl md:text-xl text-lg font-semibold">Do Follow</h3>
                        </div>
                        <div>
                            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center pt-8">7</h2>
                        </div>
                    </div>
                    <div className="bg-[#379FFF1A] px-3 py-6 rounded-xl lg:w-[250px] md:w-52 lg:h-40 md:h-44">
                        <div className="text-center">
                            <h3 className=" lg:text-2xl md:text-xl text-lg font-semibold">No Follow</h3>
                        </div>
                        <div>
                            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center pt-8">0</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackLinkResultOverview;