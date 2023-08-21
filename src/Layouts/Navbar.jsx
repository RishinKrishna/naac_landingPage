import { Link } from "react-router-dom";
import { logo, menu } from "../assets";
import { useState } from "react";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='className="w-full flex py-4   justify-between items-center navbar bg-white px-10'>
      <img src={logo} alt="logo" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-7 text-[#141824] text-[17px] font-semibold">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/features">
          <li>Features</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        
        <a href="https://demo.naac.pro/login" target="_blank" className="demo_btn hover:text-[#141824] py-2 px-3 rounded-[10px]">
              Get free demo
            </a>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white  absolute top-20  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/features">
              <li>Features</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <a href="https://demo.naac.pro/login" target="_blank" className="demo_btn py-2 px-3 rounded-[10px]">
              Get free demo
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
