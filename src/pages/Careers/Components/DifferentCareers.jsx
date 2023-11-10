import { Link } from "react-router-dom";
import photo1 from "../../../assets/images/Careers/DifferentCareers/photo1.png";
import photo2 from "../../../assets/images/Careers/DifferentCareers/photo2.png";
import photo3 from "../../../assets/images/Careers/DifferentCareers/photo3.png";
import user from "../../../assets/images/Careers/DifferentCareers/Group.png";
const DifferentCareers = () => {
    return (
        <div className="lg:mx-24 md:mx-12 mx-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 relative lg:bottom-[930px] md:bottom-[510px] bottom-[230px] lg:-mb-[750px] md:-mb-[390px] -mb-[160px]">
            <div className="border-2 md:p-8 p-6 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src={photo1} alt="photo1" />
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold md:pt-6 pt-4 text-center">Product Designer</h3>
                </div>
                <div>
                    <h4 className="md:text-lg text-base font-semibold text-slate-400 md:pt-9 pt-6 md:pb-12 pb-8 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 md:p-4 p-3 bg-[#F1F8FF] justify-center mx-7 rounded-lg md:mx-3 ">
                        <img className="md:w-5 w-4" src={user} alt="user" />
                        <p className="md:text-xl text-lg font-semibold text-black">View Openings</p>
                    </Link>
                </div>
            </div>
            <div className="border-2 md:p-8 p-6 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src={photo2} alt="photo2" />
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold md:pt-6 pt-4 text-center">Production Development</h3>
                </div>
                <div>
                    <h4 className="md:text-lg text-base font-semibold text-slate-400 md:pt-9 pt-6 md:pb-12 pb-8 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 md:p-4 p-3 bg-[#F1F8FF] justify-center mx-7 rounded-lg md:mx-3 ">
                        <img className="md:w-5 w-4" src={user} alt="user" />
                        <p className="md:text-xl text-lg font-semibold text-black">View Openings</p>
                    </Link>
                </div>
            </div>
            <div className="border-2 md:p-8 p-6 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src={photo3} alt="photo3" />
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold md:pt-6 pt-4 text-center">Marketing</h3>
                </div>
                <div>
                    <h4 className="md:text-lg text-base font-semibold text-slate-400 md:pt-9 pt-6 md:pb-12 pb-8 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 md:p-4 p-3 bg-[#F1F8FF] justify-center mx-7 rounded-lg md:mx-3 ">
                        <img className="md:w-5 w-4" src={user} alt="user" />
                        <p className="md:text-xl text-lg font-semibold text-black">View Openings</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default DifferentCareers;