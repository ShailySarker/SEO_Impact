import { Link } from "react-router-dom";
import LoginDesign from "../../components/LoginDesign/LoginDesign";
import logo from '../../assets/images/Login/Login_logo.png';
import bottomDesign from '../../assets/images/Login/Login_bottomDesign.png';

const Login = () => {
    return (
        <div className="lg:mt-12 md:mt-20 mt-12 lg:ml-36 md:ml-16 ml-0">

            {/* big and medium size screen */}
            <div className="md:block hidden">
                <div className="flex justify-between">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <LoginDesign></LoginDesign>
                </div>
                <div className="">
                    <div className="mx-auto flex relative -top-[150px] md:-mt-[470px] -mt-[450px]">
                        <div>
                            <h2 className="font-bold text-5xl md:mb-24 mb-14">Login</h2>
                            <form>
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
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered" />
                                </div>

                                <div className="text-right font-bold">
                                    <Link className="lg:text-[#007BFE] text-black">Forget your password?</Link>
                                </div>

                                <input
                                    type="submit"
                                    value="Login"
                                    className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold mt-10 lg:mx-28 md:mr-48  lg:w-40 w-32"
                                />
                            </form>
                            <div className="lg:text-center mt-10">
                                <p className="lg:text-[#B2B2B2]  md:text-slate-800  ">
                                    Don’t have an account?  <Link to='/signUp' className="font-bold lg:text-[#007BFE] md:text-black "> SignUp</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* small size screen */}
            <div className="md:hidden ">
                <div className="flex justify-center items-center flex-col mx-auto">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mt-16">
                    <h2 className="font-bold text-4xl mb-14 mx-6">Login</h2>
                    <form className="mx-6">
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
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered" />
                        </div>
                        <div className="text-right font-bold">
                            <Link className="text-[#007BFE]">Forget your password?</Link>
                        </div>

                        <input
                            type="submit"
                            value="Login"
                            className="text-white justify-center bg-[#007BFE] py-3 px-6 rounded-xl font-semibold flex mt-14 mx-auto w-32"
                        />
                    </form>
                    <div className="text-center mt-8">
                        <p className="text-[#B2B2B2]  ">
                            Don’t have an account?  <Link to='/signUp' className="font-bold text-[#007BFE] "> SignUp</Link>
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

export default Login;