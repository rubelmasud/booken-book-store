import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="min-h-screen bg-gray-300 px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
