import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#F1F1F1] pt-24  ">
      <div className="wrapper  grid grid-cols-2 pb-5">
        {/* about part */}
        <div className="text-gray-800">
          <h5 className="footer-title">ABOUT INFO</h5>
          <p className="md:w-[60%] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor inci ut labore et dolore.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <CiLocationOn size={24} />
            <span>Addresss: 123 Pall Mall, London England </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <AiOutlineMail size={20} />
            <span>Email:hello@example.com </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <IoCallOutline size={24} />
            <span>Phone: (012) 345 6789 </span>
          </div>
        </div>
        {/* footer nav links */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="">
            <h5 className="footer-title">INFORMATION</h5>
            <ul className="footer-links">
              <li>
                <a href="">Sing In</a>
              </li>
              <li>
                <a href="">Cart View</a>
              </li>
              <li>
                <a href="">My WishList</a>
              </li>
              <li>
                <a href="">Track My Order</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="footer-title">INFO LINKS</h5>
            <ul className="footer-links">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="footer-title">SUPPORT AREA</h5>
            <ul className="footer-links">
              <li>
                <a href="">Hello & Contact</a>
              </li>
              <li>
                <a href="">Shipping and Tax</a>
              </li>
              <li>
                <a href="">Return Policy</a>
              </li>
              <li>
                <a href="">Affiliates</a>
              </li>
              <li>
                <a href="">Legal Notice</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer bottom */}

      <div className="bg-black/75 text-white text-center py-2">
        Copyright HasThemes | Built with <b>Booken</b> by HasThemes.
      </div>
    </footer>
  );
};

export default Footer;
