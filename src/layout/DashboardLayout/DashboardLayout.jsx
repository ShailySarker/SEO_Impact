import { NavLink, Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col-reverse lg:flex-col ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-warning drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className=" drawer-overlay "></label>
                    <ul className=" p-7 w-[350px] h-full border-r-2">
                        {/* Sidebar content here */}

                        <>
                            <li className="font-semibold text-lg mt-5 mb-4 ">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-slate-400"}
                                    to='myProjects'>
                                    <img src="https://i.ibb.co/WWZRP9v/fluent-home-12-filled.png" alt="" />
                                    <p>My Projects</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-slate-400"}
                                    to='keywordChecker'>
                                    <img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Keyword Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-slate-400"}
                                    to='rankingChecker'><img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Ranking Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-slate-400"}
                                    to='backLinkChecker'><img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Backlink Checker</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-slate-400"}
                                    to='snippetGenerator'><img src="https://i.ibb.co/6DSpcCK/codicon-tools.png" alt="" />
                                    <p>Snippet Generator</p>
                                </NavLink>
                            </li>
                            <li className="font-semibold text-lg mb-4">
                                <NavLink className={({ isActive }) => isActive ? "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-[#007BFE] bg-[#EBF5FF]" : "flex flex-row items-center p-4 gap-4 border-2 rounded-xl text-slate-400"}
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