import { NavLink, Outlet } from "react-router-dom";
import DashboardHeader from "../../pages/shared/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
    return (
        <div>
            {/* design purpose only dashboardHeader */}
            <DashboardHeader></DashboardHeader> 
            
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex md:items-center flex-col-reverse lg:flex-col ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-3" className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold  drawer-button lg:hidden md:w-52 w-36 text-lg mb-20 md:ml-0 ml-3">Show All Resources</label>

                </div>
                <div className="drawer-side lg:top-0 top-24">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar"  className=" drawer-overlay "></label>
                    <ul className=" p-7 md:w-[340px]  lg:h-full md:h-[510px] h-[460px] bg-base-100 text-base-content border-r-2 lg:rounded-none rounded-r-xl">
                        {/* Sidebar content here */}

                        <>
                            <li className="font-semibold text-lg mt-5 mb-4 ">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='myProjects'>
                                    <img src="https://i.ibb.co/WWZRP9v/fluent-home-12-filled.png" alt="" />
                                    <p>My Projects</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='keywordChecker'>
                                    <img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Keyword Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='rankingChecker'><img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Ranking Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='backLinkChecker'><img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Backlink Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='snippetGenerator'><img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Snippet Generator</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='keywordResearchTool'><img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Keyword Research Tool</p>
                                </NavLink>
                            </li>

                        </>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;