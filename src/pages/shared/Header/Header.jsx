import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
    return (
        <nav >
            <div className="navbar bg-[#379FFF1A]
]
              lg:px-10 px-2 py-6 mb-28 lg:mb-0">
                <div className="navbar-start">
                    <div className="flex lg:flex-col flex-row 
                    justify-center items-center lg:ml-0">
                        <img className="border-r-2 pr-28" src='https://i.ibb.co/LgjTcLv/Group-157.png' alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10">
                        <NavMenu></NavMenu>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><button className="py-2 px-3 rounded-xl text-white bg-[#007BFE] font-semibold mr-6">Login</button></Link>
                    <Link to='/signUp'><button className=" py-2 px-3 rounded-xl border-2 font-semibold">Signup</button></Link>
                </div>
            </div>
        </nav>


    );
};

export default Header;