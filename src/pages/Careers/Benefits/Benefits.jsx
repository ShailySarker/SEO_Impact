import Rectangle from "../../../assets/images/Careers/Benefits/Rectangle.png";
import star from "../../../assets/images/Careers/Benefits/star.png";
import vector from "../../../assets/images/Careers/Benefits/vector.png";


const Benefits = () => {
    return (
        <div className="text-white bg-[#007BFE] md:pt-16 md:pb-20 py-12 ">
            <h3 className="font-semibold md:text-4xl text-3xl lg:ml-[385px] text-center lg:text-start pb-16">Benefits</h3>
            <div className="flex lg:flex-row flex-col items-center lg:gap-[242px] md:gap-24 gap-16">
                <div className="lg:pr-0 pr-72 md:pr-[600px]">
                    <img className=" " src={Rectangle} alt="Rectangle" />
                </div>
                <div className="flex flex-col md:flex-row md:gap-24 gap-6 ">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Competitive salary</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Work From Home</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Incentives</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Lorem ipsum</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Competitive salary</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Work From Home</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Incentives</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Lorem ipsum</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={star} alt="star" />
                            <p className="md:text-xl text-lg">Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
                <div className=" lg:pb-0 pb-6">
                    <img className="h-28 md:h-auto md:w-[400px] " src={vector} alt="vector" />
                </div>
            </div>
        </div>
    );
};

export default Benefits;