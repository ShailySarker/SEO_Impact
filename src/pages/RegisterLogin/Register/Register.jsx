import SignUpDesign from "../../../components/SignUpDesign/SignUpDesign";
import CheckBox from "../../../components/CheckBox/CheckBox";
import { Link } from "react-router-dom";

const Register = () => {

        return (
        <div className="lg:mt-12 md:mt-20 mt-12 lg:ml-36 md:ml-16 ml-6">
            <div className="flex justify-between">
                <div>
                    <img src="https://i.ibb.co/LgjTcLv/Group-157.png" alt="" />
                </div>
                <SignUpDesign></SignUpDesign>
            </div>
            <div className="">
                <div className="lg:mx-auto flex relative lg:-top-[12px] md:-mt-[670px] -mt-[460px] ">
                    <div className="">
                        <h2 className="font-bold md:text-5xl text-3xl md:mb-16 mb-12">SignUp</h2>
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
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="input input-bordered" />
                            </div>

                            <div className="form-control ">
                                <CheckBox></CheckBox>
                            </div>

                            <input
                                type="submit"
                                value="Sign Up"
                                className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl font-semibold mt-12 lg:mx-28 md:mr-48 lg:w-40 w-32 border-white border-2"
                            />

                        </form>
                        <div className="lg:text-center mt-10">
                            <p className="lg:text-slate-400 text-black   ">
                                Already have an account?  <Link to='/login' className="font-bold md:text-white lg:text-[#007BFE] text-slate-600"> Login</Link>
                            </p>
                        </div>
                    </div>
                    <div className="relative lg:bottom-16 md:bottom-28 -bottom-60 lg:right-2 md:right-20 right-24 ">
                        <img className="lg:w-auto w-24 lg:h-auto md:h-[720px] h-[300px] md:w-[280px] " src="https://i.ibb.co/zQc6j1B/Group-176.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;