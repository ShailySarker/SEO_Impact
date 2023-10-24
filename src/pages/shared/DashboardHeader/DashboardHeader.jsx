import NavMenu from "../NavMenu/NavMenu";

const DashboardHeader = () => {
    return (
        <nav >
            <div className="navbar bg-[#379FFF1A]
              lg:px-10 md:px-16 px-2 py-6 mb-8 md:mb-20 lg:mb-0">
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
                <div className="navbar-end ">
                    <div className=" gap-4 items-center lg:flex lg:visible hidden">
                        <img src="https://i.ibb.co/Qj1nvF2/Group-177.png" alt="" />
                        <h4 className="font-semibold text-lg">Sai Chittala</h4>
                    </div>
                    <div className="dropdown pl-8">
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
                                <ul className="menu py-6 px-4 md:px-6 md:mt-20 mt-16 w-48 md:w-52 rounded-l-lg bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <NavMenu></NavMenu>
                                    <li>
                                        <div className="flex gap-4 items-center">
                                            <img className="w-5" src="https://i.ibb.co/Qj1nvF2/Group-177.png" alt="" />
                                            <h4 className="font-semibold">Sai Chittala</h4>
                                        </div>
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

export default DashboardHeader;