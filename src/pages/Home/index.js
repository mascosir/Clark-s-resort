import React from "react";
import ResponsiveAppBar from "../../../components/Navbar";
import Feature from "../../../components/Feature";
import Gallery from "../../../components/Gallery";
import About from "../../../components/aboutUs";
import Footer from "../../../components/Footer";
import Map from "../../../components/map";
const index = () => {
  return (
    <div className="min-w-screen min-h-screen relative">
      <div className=" z-10 fixed left-0 top-[40%] w-[40px]">
        <div className="tc">
          <div className=" w-[40px]">
            <span className="flex flex-col bg-[#7ba6ad] w-9 text-[25px] py-2">
              <i className="bx bxl-facebook text-black px-1 " />
              <i className="bx bxl-twitter text-black px-1 " />
              <i className="bx bxl-instagram text-black px-1 " />
              <i className="bx bx-envelope text-black px-1 " />
              <i className="bx bx-spa text-black px-1 " />
            </span>
          </div>
        </div>
      </div>
      {/* <ResponsiveAppBar /> */}
      <div className="video-container">
        {/* <video src="./video.mp4"></video> */}
        <video autoPlay muted loop>
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </div>
      <Feature />
      <About />
      <Gallery />
      <Map />
      {/* <Footer /> */}
    </div>
  );
};

export default index;
