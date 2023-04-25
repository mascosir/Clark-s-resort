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
            <span className="flex flex-col bg-[#7ba6ad] w-9 text-[25px] py-2 cursor-pointer">
              <i
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/clarksresort/",
                    "_blank"
                  )
                }
                className="bx bxl-facebook text-black px-1 "
              />
              <i className="bx bxl-twitter text-black px-1 " />
              <i
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/explore/locations/109151424345432/clarks-resort-birgunj/",
                    "_blank"
                  )
                }
                className="bx bxl-instagram text-black px-1 "
              />
              <i
                onClick={() =>
                  window.open("mailto:shahamit756@gmail.com", "_blank")
                }
                className="bx bx-envelope text-black px-1 "
              />
              <i
                onClick={() =>
                  window.open(
                    "https://www.tripadvisor.com/Hotel_Review-g424935-d23427247-Reviews-Clarks_Resorts_Birgunj-Birgunj_Narayani_Zone_Central_Region.html/",
                    "_blank"
                  )
                }
                className="bx bx-spa text-black px-1 "
              />
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
