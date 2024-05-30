import "./Navbar.css";
import logo from "../../assets/logo/booken-logo_150x.avif";
import { MdSearch } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-top">
        <div className="wrapper bg-primary/20 container flex justify-between items-center">
          <a href="">
            <img src={logo} alt="" />
          </a>

          <div className="flex items-center gap-4 ">
            <div className="group hidden sm:block relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] duration-300 transition-all  rounded-full px-2 py-1 border border-gray-300 focus:outline-none focus:primary"
              />
              <MdSearch
                size={24}
                className="cursor-pointer text-gray-500 group-hover:text-primary duration-500 absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            <button
              onClick={() => alert("hello")}
              className="bg-gradient-to-t from-primary to-red-400 transition-all duration-300 text-white rounded-full  p-2 flex  items-center group gap-3"
            >
              <FaCartShopping />
            </button>
          </div>
        </div>
        {/* nav links */}
        <ul className="nav-links text-center flex items-center justify-center gap-10  shadow py-5 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
