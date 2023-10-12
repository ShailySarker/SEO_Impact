import SignUpDesign from "../../../components/SignUpDesign/SignUpDesign";
import CheckBox from "../../../components/CheckBox/CheckBox";

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
                                <CheckBox></CheckBox>
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
        </div>
    );
};

export default Register;