import { Link } from "react-router-dom";

const DifferentCareers = () => {
    return (
        <div className="mx-24 grid grid-cols-3 gap-12 relative bottom-[750px]">
            <div className="border-2 p-8 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src="https://i.ibb.co/dt8kcVN/rafiki.png" alt="" />
                    <h3 className="text-3xl font-semibold pt-6 text-center">Product Designer</h3>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-slate-400 pt-9 pb-12 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 p-4 bg-[#F1F8FF] justify-center ">
                        <img className="w-6" src="https://i.ibb.co/RgGVRfB/Group.png" alt="" />
                        <p className="text-xl font-semibold">View Openings</p>
                    </Link>
                </div>
            </div>
            <div className="border-2 p-8 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src="https://i.ibb.co/FxnnqFB/rafiki.png" alt="" />
                    <h3 className="text-3xl font-semibold pt-6 text-center">Production Development</h3>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-slate-400 pt-9 pb-12 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 p-4 bg-[#F1F8FF] justify-center ">
                        <img className="w-6" src="https://i.ibb.co/RgGVRfB/Group.png" alt="" />
                        <p className="text-xl font-semibold">View Openings</p>
                    </Link>
                </div>
            </div>
            <div className="border-2 p-8 rounded-lg shadow-xl bg-white">
                <div className="border-b-2 pb-9">
                    <img className="mx-auto w-48 h-36" src="https://i.ibb.co/PwwPjsG/pana.png" alt="" />
                    <h3 className="text-3xl font-semibold pt-6 text-center">Marketing</h3>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-slate-400 pt-9 pb-12 pr-3">Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut.</h4>
                    <Link className="flex items-center gap-5 p-4 bg-[#F1F8FF] justify-center ">
                        <img className="w-6" src="https://i.ibb.co/RgGVRfB/Group.png" alt="" />
                        <p className="text-xl font-semibold">View Openings</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default DifferentCareers;