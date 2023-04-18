import React from "react";

const index = () => {
  return (
    <div className="w-full px-[40px] mb-12">
      <div className="container">
        <h1 className="text-center sm:text-sm  uppercase font-bold md:text-[26px] text-[#272727]">
          Location
        </h1>
      </div>
      <div className="border-x-2 border-y-2 border-yellow-300 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1776.7383778596484!2d84.90534003077846!3d27.046695294989664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399355397fdb5983%3A0xd39643b15f4dfe19!2sClarks%20Resort!5e0!3m2!1sne!2snp!4v1680777991572!5m2!1sne!2snp"
          // width="600"
          // height="450"
          // style="border:0;"
          className="w-full h-[250px] md:h-[400px]"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default index;
