import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <>
            {/* <li className=''><Link to='/'>Home</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/careers'>Careers</Link></li>
            <li><Link to='/resources'>Resources</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/about'>About Us</Link></li> */}

            <li className="font-semibold lg:text-lg"><NavLink to='/' className={
                ({ isActive }) => isActive ? " text-[#007BFE]" : ""
            }>Home</NavLink> </li>
            <li className="font-semibold lg:text-lg"><NavLink to='/pricing' className={
                ({ isActive }) => isActive ? "text-[#007BFE]" : ""
            }>Pricing</NavLink> </li>
            <li className="font-semibold lg:text-lg"><NavLink to='/careers' className={
                ({ isActive }) => isActive ? " text-[#007BFE]" : ""
            }>Careers</NavLink> </li>
            <li className="font-semibold lg:text-lg"><NavLink to='/resources' className={
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