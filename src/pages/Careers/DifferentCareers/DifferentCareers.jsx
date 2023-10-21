import { Link } from "react-router-dom";

const DifferentCareers = () => {
    return (
        <div className="lg:mx-24 md:mx-12 mx-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 relative lg:bottom-[800px] md:bottom-[520px] bottom-[230px] lg:-mb-[670px] md:-mb-[450px] -mb-[160px]">
            <div className="border-2 md:p-8 p-6 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src="https://i.ibb.co/dt8kcVN/rafiki.png" alt="" />
                    <h3 className="md:text-3xl text-xl font-semibold md:pt-6 pt-4 text-center">Product Designer</h3>
                </div>
                <div>
                    <h4 className="md:text-lg text-base font-semibold text-slate-400 md:pt-9 pt-6 md:pb-12 pb-8 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 md:p-4 p-3 bg-[#F1F8FF] justify-center mx-7 rounded-lg md:mx-5 ">
                        <img className="md:w-6 w-4" src="https://i.ibb.co/RgGVRfB/Group.png" alt="" />
                        <p className="md:text-xl text-lg font-semibold">View Openings</p>
                    </Link>
                </div>
            </div>
            <div className="border-2 md:p-8 p-6 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src="https://i.ibb.co/FxnnqFB/rafiki.png" alt="" />
                    <h3 className="md:text-3xl text-xl font-semibold md:pt-6 pt-4 text-center">Production Development</h3>
                </div>
                <div>
                    <h4 className="md:text-lg text-base font-semibold text-slate-400 md:pt-9 pt-6 md:pb-12 pb-8 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 md:p-4 p-3 bg-[#F1F8FF] justify-center mx-7 rounded-lg md:mx-5 ">
                        <img className="md:w-6 w-4" src="https://i.ibb.co/RgGVRfB/Group.png" alt="" />
                        <p className="md:text-xl text-lg font-semibold">View Openings</p>
                    </Link>
                </div>
            </div>
            <div className="border-2 md:p-8 p-6 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src="https://i.ibb.co/PwwPjsG/pana.png" alt="" />
                    <h3 className="md:text-3xl text-xl font-semibold md:pt-6 pt-4 text-center">Marketing</h3>
                </div>
                <div>
                    <h4 className="md:text-lg text-base font-semibold text-slate-400 md:pt-9 pt-6 md:pb-12 pb-8 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 md:p-4 p-3 bg-[#F1F8FF] justify-center mx-7 rounded-lg md:mx-5 ">
                        <img className="md:w-6 w-4" src="https://i.ibb.co/RgGVRfB/Group.png" alt="" />
                        <p className="md:text-xl text-lg font-semibold">View Openings</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default DifferentCareers;