import { NavLink, Outlet } from "react-router-dom";
import DashboardHeader from "../../components/Shared/DashboardHeader/DashboardHeader";
import homeIcon from '../../assets/images/Layout/DashboardLayout/fluent_home-12-filled.png';
import toolsIcon from '../../assets/images/Layout/DashboardLayout/codicon_tools.png';

const DashboardLayout = () => {
    return (
        <div>
            {/* design purpose only dashboardHeader */}
            <DashboardHeader/>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col-reverse lg:flex-col ">
                    {/* Page content here */}
                    <Outlet/>
                    <div className="flex md:justify-center">
                        <label htmlFor="my-drawer-3" className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold  drawer-button lg:hidden md:w-52 w-36 md:text-lg mb-20 md:ml-0 ml-3 text-center">Show All Resources</label>
                    </div>
                </div>
                <div className="drawer-side lg:top-0 top-24">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className=" drawer-overlay "></label>
                    <ul className=" md:p-7 p-4 md:w-[340px] lg:h-full md:h-[510px] h-auto bg-base-100 text-base-content border-r-2 lg:rounded-none rounded-r-xl">
                        {/* Sidebar content here */}
                        <>
                            <li className="font-semibold md:text-lg md:mt-5 mb-2 ">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='myProjects'>
                                    <img src={homeIcon} alt="Home Icon" />
                                    <p>My Projects</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold md:text-lg md:mb-4 mb-2">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='keywordChecker'>
                                    <img src={toolsIcon} alt="toolsIcon" />
                                    <p>Keyword Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold md:text-lg md:mb-4 mb-2">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='rankingChecker'><img src={toolsIcon} alt="" />
                                    <p>Ranking Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold md:text-lg md:mb-4 mb-2">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='backLinkChecker'><img src={toolsIcon} alt="" />
                                    <p>Backlink Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold md:text-lg md:mb-4 mb-2">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='snippetGenerator'><img src={toolsIcon} alt="" />
                                    <p>Snippet Generator</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold md:text-lg lg:mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center lg:p-4 md:p-3 p-2 lg:gap-4 md:gap-3 gap-2 border-2 rounded-xl text-slate-400"}
                                    to='keywordResearchTool'><img src={toolsIcon} alt="" />
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