import { Link } from "react-router-dom";
import SignUpDesign from "../../../components/SignUpDesign/SignUpDesign";

const Register = () => {
    return (
        <div className="mt-12 ml-36">
            <div className="flex justify-between">
                <div>
                    <img src="https://i.ibb.co/LgjTcLv/Group-157.png" alt="" />
                </div>
                <SignUpDesign></SignUpDesign>
            </div>
            <div className="">
                <div className="mx-auto flex relative -top-[10px] -mt-[670px]">
                    <div>
                        <h2 className="font-bold text-5xl mb-20">SignUp</h2>
                        <form>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control mt-5 mb-7">
                                <input
                                    required
                                    type="password"
                                    name="conformPassword"
                                    placeholder="Conform Password"
                                    className="input input-bordered" />
                            </div>

                            <div className="form-control ">
                                <label className="cursor-pointer flex items-center gap-4">
                                    <input type="checkbox" checked="checked" className="text-white bg-[#007BFE] w-5 h-5"/>
                                    <span className="label-text text-[#B2B2B2]">I agree to all <Link><span className="font-bold text-[#007BFE]">terms and conditions</span></Link></span>
                                </label>
                            </div>

                            <input
                                type="submit"
                                value="Sign Up"
                                className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold mt-12 mx-28 w-40"
                            />

                        </form>
                    </div>
                    <div className="relative bottom-16 -right-2">
                        <img src="https://i.ibb.co/zQc6j1B/Group-176.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="">
                <div className="flex gap-56 relative bottom-[600px] -mb-[600px]">
                    <div>
                        <h2 className="font-bold text-5xl mb-24">SignUp</h2>
                        <form>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="password"
                                    name="conformPassword"
                                    placeholder="Conform Password"
                                    className="input input-bordered" />
                            </div>

                            <div className="text-right font-semibold">

                            </div>

                            <input
                                type="submit"
                                value="SignUp"
                                className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold mt-10 mx-28"
                            />

                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Register;