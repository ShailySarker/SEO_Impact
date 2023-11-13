import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <>
            <li className="font-semibold lg:text-lg"><NavLink to='/' className={
                ({ isActive }) => isActive ? " text-[#007BFE]" : ""
            }>Home</NavLink> </li>
            <li className="font-semibold lg:text-lg"><NavLink to='/pricing' className={
                ({ isActive }) => isActive ? "text-[#007BFE]" : ""
            }>Pricing</NavLink> </li>
            <li className="font-semibold lg:text-lg"><NavLink to='/careers' className={
                ({ isActive }) => isActive ? " text-[#007BFE]" : ""
            }>Careers</NavLink> </li>
            <li className="font-semibold lg:text-lg"><NavLink to='/resources/myProjects' className={
                ({ isActive }) => isActive ? "text-[#007BFE]" : ""
            }>Resources</NavLink> </li>
            <li className="font-semibold lg:text-lg"><NavLink to='/contact' className={
                ({ isActive }) => isActive ? " text-[#007BFE]" : ""
            }>Contact Us</NavLink> </li>
            <li className="font-semibold lg:text-lg"><NavLink to='/about' className={
                ({ isActive }) => isActive ? " text-[#007BFE]" : ""
            }>About Us</NavLink> </li>

        </>
    );
};

export default NavMenu;