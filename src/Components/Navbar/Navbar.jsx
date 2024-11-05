import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import './Navbar.css'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className="m-5">

            <div onClick={handleOpen} className='md:hidden flex justify-between '>
                {
                    open ? <IoMdCloseCircleOutline /> : <CiMenuFries />
                }
                <input className="rounded-lg p-2 text-xs" type="search" name="" id="" placeholder="Search..." />
            </div>

            <span></span>
            <ul className={`md:flex absolute md:static duration-1000 gap-28 ml-8 ${open ? 'top-8' : '-top-60'
                }`}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink> </li>
                {/* <li><Link to='/users'>Users</Link></li> */}
                <li> <NavLink to='/posts'>Posts</NavLink></li>
                <li><NavLink to='/header'>Header</NavLink></li >
                <li> <NavLink to='/details'>Details</NavLink></li >
                <li><NavLink to='/phones'>Phones</NavLink></li >
            </ul>





        </div>
    );
};

export default Navbar;