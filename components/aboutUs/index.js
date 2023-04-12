import React from "react";

const Index = () => {
  return (
    <div className="Indexmain" id="about_us">
      <div className="container">
        <h1 className="text-center sm:text-sm  uppercase font-bold md:text-[26px] text-[#272727]">
          About Us
        </h1>
      </div>
      <div className="flex justify-between gap-20 items-center flex-col-reverse md:flex-row ">
        <p className="text-justify flex justify-center items-center px-8">
          Popularly known as the ‘Gateway to Nepal’, Birgunj is a metropolitan
          city in southern Nepal. Home to several industries and religious
          sites, the city is the ideal destination for both leisure and tourist
          travellers. Our luxury resort in Birgunj - Clarks Resort, presents the
          perfect blend of warmth and comfort. The elegant rooms and suites
          feature classy decor and fine interiors, aiding a comfortable yet
          luxurious stay. Our incredible in-house multi-cuisine restaurant
          serves drool-worthy delicacies that will leave you wanting more! The
          magnificent banquet halls at our Birgunj resort are the perfect event
          spaces where you can turn your celebrations into magical memories.
          Whether you visit Birgunj for business or leisure, our resort will
          sweep you off your feet!
        </p>
        <div className="flex justify-center items-center px-8">
          <img src="\about.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Index;
