import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import logo from '../../../assets/images/Shared/Header/logo.png';

const Header = () => {
    return (
        <nav >
            <div className="navbar bg-[#379FFF1A]
              lg:px-10 px-2 py-6 mb-8 md:px-16">
                <div className="navbar-start">
                    <div className="flex lg:flex-col flex-row 
                    justify-center items-center lg:ml-0">
                        <img className="lg:border-r-2 lg:pr-24" src={logo} alt="logo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10">
                        <NavMenu></NavMenu>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="lg:flex lg:visible hidden">
                        <Link to='/login'><button className="py-2 px-3 rounded-xl text-white w-20 bg-[#007BFE] font-semibold mr-6">Login</button></Link>
                        <Link to='/signUp'><button className=" py-2 px-3 rounded-xl border-2 font-semibold w-20">SignUp</button></Link>
                    </div>
                    <div className="dropdown">
                        <div className="drawer drawer-end">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-2" tabIndex={0} className="drawer-button btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-black font-semibold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                <ul className="menu py-6 px-4 md:px-6 md:mt-20 mt-16 w-40 md:w-52 rounded-l-lg bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <NavMenu></NavMenu>
                                    <li>
                                        <Link to='/login'><button className="py-2 px-3 rounded-xl text-white w-20 bg-[#007BFE] font-semibold">Login</button></Link>
                                    </li>
                                    <li>
                                        <Link to='/signUp'><button className=" py-2 px-3 rounded-xl border-2 font-semibold w-20">SignUp</button></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;