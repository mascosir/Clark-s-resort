import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footermain " id="contact">
        <div className="flex flex-row item-center justify-between  w-full gap-5">
          <div className=" flex justify-center items-center">
            <img
              className="z-10 "
              style={{ width: "150px", height: "auto" }}
              src="/logo.png"
              onClick={() => window.open("/", "_self")}
            ></img>
          </div>
          <div className="text-white">
            <h1>Contact Us</h1>
            <div className=" pb-1 flex flex-col ">
              <span className="">
                <i className="bx bxs-phone text-white px-1 " />
                +977 9802310555
              </span>
              <span>
                <i className="bx bxs-map text-white pr-1 " />
                Gandak, Bahuwri-14,
              </span>
              <span>Birgung, Nepal</span>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-between items-center ">
          <div className="px-[8px]">
            <h1 className="md:pb-4 ">Cancel Booking</h1>
            <button className="uppercase border border-black px-3 py-1 bg-orange-300 rounded-xl text-sm">
              Cancel Booking
            </button>
          </div>
          <div className="px-[8px]">
            <h1 className="md:pb-4 ">Admin Login</h1>
            <button className="uppercase border border-black px-3 py-1 bg-orange-300 rounded-xl text-sm">
              Login
            </button>
          </div>
        </div> */}
      </div>
      <footer className="flex justify-between items-center px-[20px] md:px-[40px] py-[6px] text-md">
        <p>Copyright ©{new Date().getFullYear()}, Clark's Resort.</p>{" "}
        <span className="text-black border box-border text-2xl hidden md:block">
          <i
            onClick={() =>
              window.open("https://www.facebook.com/clarksresort/", "_blank")
            }
            className="bx bxl-facebook px-1 cursor-pointer "
          />
          <i className="bx bxl-twitter px-1 cursor-pointer " />
          <i
            onClick={() =>
              window.open(
                "https://www.instagram.com/explore/locations/109151424345432/clarks-resort-birgunj/",
                "_blank"
              )
            }
            className="bx bxl-instagram px-1 cursor-pointer "
          />
          <i
            onClick={() =>
              window.open(
                "https://www.tripadvisor.com/Hotel_Review-g424935-d23427247-Reviews-Clarks_Resorts_Birgunj-Birgunj_Narayani_Zone_Central_Region.html/",
                "_blank"
              )
            }
            className="bx bx-envelope px-1 cursor-pointer "
          />
        </span>
      </footer>
    </div>
  );
};

export default Footer;
