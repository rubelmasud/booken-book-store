import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo/booken-logo_150x.avif";
import { BiSearchAlt, BiCart } from "react-icons/bi";
import navShopImg from "../../assets/nav-shop.jpg";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const cartRef = useRef(null);

  const handleSearchClick = () => {
    setVisible(!visible);
    if (openCart) {
      setOpenCart(false);
    }
  };

  const handleCartClick = () => {
    setOpenCart(!openCart);
    if (visible) {
      setVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setOpenCart(false);
    }
  };

  useEffect(() => {
    if (openCart) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [openCart]);

  return (
    <nav className="h-[100px] grid grid-cols-12 items-center md:px-12 px-4 overflow-x-clip">
      <a href="/" className="logo md:w-[180px] w-[80px] col-span-2">
        <img className="w-[100%]" src={logo} alt="Logo" />
      </a>
      {/* nav links */}
      <ul className="md:flex gap-12 nav-links flex-shrink col-span-8 px-20">
        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">About Us</a>
        </li>
        <li
          className="nav-link group relative"
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <div className="hidden group lg:block relative">
            <a className=" relative" href="#">
              Shop
            </a>
            <div
              className={`mega-menu absolute group-hover:visible duration-500 invisible w-[1000px] top-[60px] bg-white p-4 -left-[350px] text-black ${
                showMegaMenu ? "show " : ""
              }`}
            >
              <div className="items flex justify-between gap-10">
                <div className="item w-full">
                  <p className="">Book Type</p>
                  <hr />
                  <ul>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                  </ul>
                </div>

                <div className="item w-full">
                  <p className="">Book Type</p>
                  <hr />
                  <ul>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                  </ul>
                </div>

                <div className="item w-full">
                  <p className="">Book Type</p>
                  <hr />
                  <ul>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                  </ul>
                </div>

                <div className="item w-full">
                  <p className="">Book Type</p>
                  <hr />
                  <ul>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Science</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-auto">
                <img className="w-full" src={navShopImg} alt="img" />
              </div>
            </div>
          </div>
        </li>
        <li className="nav-link">
          <a href="#">Blog </a>
        </li>
        <li className="nav-link">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      {/* nav ends */}
      <div className="search&cart col-span-2 flex items-center gap-4 justify-end">
        <div className="md:flex relative hidden items-center rounded hover:text-red-400 duration-300">
          <div
            className={`duration-500 border h-8 ${
              visible ? "opacity-1" : "opacity-0"
            }`}
          >
            <input
              className="outline-none bg-transparent px-3 py-1"
              type="text"
              placeholder="Search"
            />
          </div>
          <span
            className="cursor-pointer border h-8 p-1"
            onClick={handleSearchClick}
          >
            <BiSearchAlt size={24} />
          </span>
        </div>
        <div className="relative" ref={cartRef}>
          <div
            className="relative cursor-pointer hover:text-red-400 duration-300"
            onClick={handleCartClick}
          >
            <BiCart size={24} />
            {/* product quantity */}
            <div className="absolute -top-3 -right-1 bg-[#1f2226] h-4 w-4 text-white rounded-full flex items-center justify-center text-[10px]">
              0
            </div>
          </div>

          {/* cart items area */}
          <div
            className={`w-[300px] absolute top-[61px] duration-300 -right-1 bg-white p-4 border-t transition-transform ${
              openCart ? "translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            <p className="mb-2 text-lg">Shopping Cart</p>
            <hr />
            <p className="mt-2">Your cart is empty now.</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
