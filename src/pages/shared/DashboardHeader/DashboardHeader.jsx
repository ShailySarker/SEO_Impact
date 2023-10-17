import NavMenu from "../NavMenu/NavMenu";

const DashboardHeader = () => {
    return (
        <nav >
            <div className="navbar bg-[#379FFF1A]
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
                <div className="navbar-end flex gap-4 items-center">
                    <img src="https://i.ibb.co/Qj1nvF2/Group-177.png" alt="" />
                    <h4 className="font-semibold text-lg">Sai Chittala</h4>
                </div>
            </div>
        </nav>

    );
};

export default DashboardHeader;