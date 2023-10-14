
const BackLinkResultOverview = () => {
    return (
        <div className="mt-28 mr-48">
            <div className="grid grid-cols-3  gap-10">
                <div className="bg-[#379FFF1A] py-6 px-7 rounded-xl">
                    <div className="flex gap-6 items-center ">
                        <img src="https://i.ibb.co/ZLDGZ6q/mdi-world.png" alt="" />
                        <h3 className=" text-2xl font-semibold">Domain Rating</h3>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-center pt-8">5</h2>
                    </div>
                </div>
                <div className="bg-[#379FFF1A] py-5 px-7 rounded-xl">
                    <div className="flex gap-6 items-center ">
                        <img src="https://i.ibb.co/ZLDGZ6q/mdi-world.png" alt="" />
                        <h3 className=" text-2xl font-semibold">Domains</h3>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-center pt-8">1</h2>
                    </div>
                </div>
                <div className="bg-[#379FFF1A] py-5 px-7 rounded-xl">
                    <div className="flex gap-6 items-center ">
                        <img src="https://i.ibb.co/x8k7prj/solar-link-bold.png" alt="" />
                        <h3 className=" text-2xl font-semibold">s</h3>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-center pt-8">7</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 justify-center mt-16 mx-40 gap-10">
                    <div className="bg-[#379FFF1A] py-6 px-7 rounded-xl">
                        <div className="text-center">
                            <h3 className=" text-2xl font-semibold">Do Follow</h3>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-center pt-8">7</h2>
                        </div>
                    </div>
                    <div className="bg-[#379FFF1A] py-5 px-7 rounded-xl">
                        <div className="text-center">
                            <h3 className=" text-2xl font-semibold">No Follow</h3>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-center pt-8">0</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackLinkResultOverview;