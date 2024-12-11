
import { useState } from "react";

// react icons
import { CiMenuFries } from "react-icons/ci";
import logo from "../../assets/job.png"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <nav
            className="flex items-center justify-between w-full relative bg-white boxShadow rounded-full px-[10px] py-[8px]">
            <img src={logo} alt="logo" className="w-[55px] " />
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                <NavLink to="/">
                    <li className="navBarLink">home</li>
                </NavLink>
                <NavLink>
                    <li className="navBarLink">features</li>
                </NavLink>
                <NavLink>
                    <li className="navBarLink">blogs</li>
                </NavLink>
                <NavLink>
                    <li className="navBarLink">shop</li>
                </NavLink>
            </ul>

            <div className="items-center gap-[20px] flex">
                <Link to='/register'>
                    <button className="font-medium underline hover:text-color-primary">
                        Register
                    </button>
                </Link>

                <Link to='/sign-in'>
                    <button
                        className="px-6 py-3 rounded-lg font-medium text-white bg-color-text hover:bg-color-primary transition-all duration-300">
                        Sign In
                    </button>
                </Link>

                <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                    <NavLink to="/">
                        <li className="navBarLink">home</li>
                    </NavLink>
                    <NavLink>
                        <li className="navBarLink">features</li>
                    </NavLink>
                    <NavLink>
                        <li className="navBarLink">blogs</li>
                    </NavLink>
                    <NavLink>
                        <li className="navBarLink">shop</li>
                    </NavLink>
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
