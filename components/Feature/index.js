import { useRouter } from "next/router";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "swiper/css/autoplay";

const Feature = ({ currentfacility, viewmore }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const router = useRouter();

  const facilities = [
    {
      link: "Main Reception",
      name: "Main Reception",
      img: "/reception.jpg",
    },
    {
      link: "Swimming",
      name: "Swimming",
      img: "/swim.jpg",
    },
    {
      link: "Gym",
      name: "Gym",
      img: "/gym.jpeg",
    },
    {
      link: "Jungle Walk",
      name: "Jungle Walk",
      img: "/walk.jpg",
    },
    {
      link: "Casino",
      name: "Casino",
      img: "/casino.jpg",
    },
  ];
  return (
    <div className="facilitymain" id="facility">
      <div className="Indexmain">
        <div className="container">
          {viewmore ? (
            <div className="w-[250px]">
              <h1 className="text-center sm:text-sm  font-bold md:text-[20px] text-[#272727] ">
                View All Facility
              </h1>
            </div>
          ) : (
            <h1 className="text-center sm:text-sm  uppercase font-bold md:text-[26px] text-[#272727]">
              Facilities at Clarks Resort Nepal
            </h1>
          )}
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2500}
            centerMode={false}
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            className="pb-6"
          >
            {facilities.map(
              (fc) =>
                fc.name != currentfacility && (
                  <div
                    key={fc.name}
                    className="featurecard"
                    onClick={() => router.push(`/facility/${fc.link}`)}
                  >
                    <img src={fc.img}></img>
                    <div>
                      <p>{fc.name}</p>
                    </div>
                  </div>
                )
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Feature;
