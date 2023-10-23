import { Link } from "react-router-dom";
import LoginDesign from "../../../components/LoginDesign/LoginDesign";

const Login = () => {
    return (
        <div className="mt-12 lg:ml-36 md:ml-16 ml-6 ">
            <div className="flex justify-between">
                <div>
                    <img src="https://i.ibb.co/LgjTcLv/Group-157.png" alt="" />
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
                                <Link className="lg:text-[#007BFE] md:text-white text-slate-600">Forget your password?</Link>
                            </div>

                            <input
                                type="submit"
                                value="Login"
                                className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold mt-10 lg:mx-28 md:mr-72  lg:w-40 w-32"
                            />

                        </form>

                        <div className="lg:text-center mt-10">
                            <p className="lg:text-slate-400 text-black   ">
                                Don’t have an account?  <Link to='/signUp' className="font-bold md:text-white lg:text-[#007BFE] text-slate-600"> Signup</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;