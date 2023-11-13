import SignUpDesign from "../../components/Others/SignUpDesign/SignUpDesign";
import CheckBox from "../../components/Others/CheckBox/CheckBox";
import { Link } from "react-router-dom";
import logo from "../../assets/images/SignUp/SignUp_logo.png";
import design from "../../assets/images/SignUp/SignUp_design.png";
import bottomDesign from '../../assets/images/SignUp/SignUp_bottomDesign.png';

const Register = () => {
    return (
        <div className="lg:mt-12 md:mt-20 mt-12 lg:ml-36 md:ml-16 ml-0">

            {/* for medium and big size screen */}
            <div className="md:block hidden">
                <div className="flex justify-between">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <SignUpDesign/>
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
                                    <CheckBox/>
                                </div>
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl font-semibold mt-12 lg:mx-28 md:mr-48 lg:w-40 w-32 border-white border-2"
                                />

                            </form>
                            <div className="lg:text-center mt-10">
                                <p className="lg:text-[#B2B2B2] md:text-slate-800  ">
                                    Already have an account?  <Link to='/login' className="font-bold lg:text-[#007BFE] text-black"> Login</Link>
                                </p>
                            </div>
                        </div>
                        <div className="relative lg:bottom-16 md:bottom-28 -bottom-60 lg:right-2 md:right-20 right-24 ">
                            <img className="lg:w-auto w-24 lg:h-auto md:h-[720px] h-[300px] md:w-[280px] md:block hidden " src={design} alt="design" />
                        </div>
                    </div>
                </div>
            </div>

            {/* for small size screen */}
            <div className="md:hidden ">
                <div className="flex justify-center items-center flex-col mx-auto">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mt-16">
                    <h2 className="font-bold text-4xl mb-14 mx-6">SignUp</h2>
                    <form className="mx-6">
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
                            <CheckBox/>
                        </div>
                        <input
                            type="submit"
                            value="Sign Up"
                            className="text-white justify-center bg-[#007BFE] py-3 px-6 rounded-xl font-semibold flex mt-14 mx-auto w-32"
                        />
                    </form>
                    <div className="text-center mt-10">
                        <p className="text-[#B2B2B2]">
                            Already have an account?  <Link to='/login' className="font-bold text-[#007BFE] "> Login</Link>
                        </p>
                    </div>
                    <div className="mt-20">
                        <img className="w-full" src={bottomDesign} alt="bottomDesign" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;