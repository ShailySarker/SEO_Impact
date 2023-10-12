import { Link } from "react-router-dom";
import LoginDesign from "../../../components/LoginDesign/LoginDesign";

const Login = () => {
    return (
        <div className="mt-12 ml-36">
            <div className="flex justify-between">
                <div>
                    <img src="https://i.ibb.co/LgjTcLv/Group-157.png" alt="" />
                </div>
                <LoginDesign></LoginDesign>
            </div>
            <div className="">
                <div className="mx-auto flex relative -top-[150px] -mt-[470px]">
                    <div>
                        <h2 className="font-bold text-5xl mb-24">Login</h2>
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
                                <Link className="text-[#007BFE]">Forget your password?</Link>
                            </div>

                            <input
                                type="submit"
                                value="Login"
                                className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold mt-10 mx-28 w-40"
                            />

                        </form>

                        <div className="text-center mt-10">
                            <p className="text-slate-400">
                                Don’t have an account? <Link to='/signUp' className="font-bold text-[#007BFE]">Signup</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;