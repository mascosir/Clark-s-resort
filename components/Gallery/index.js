import React from "react";

const Gallery = () => {
  return (
    <div className="galleryname" id="gallery">
      <div className="Indexmain">
        <div className="container">
          <h1 className="text-center uppercase font-bold text-[26px] text-[#272727]">
            Gallery
          </h1>
        </div>
        <div className="galleryimage">
          <img src="\1.jpg"></img>
          <img src="\2.jpg"></img>
          <img src="\3.jpg"></img>
          <img src="\4.jpg"></img>
          <img src="\5.jpg"></img>
          <img src="\6.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
