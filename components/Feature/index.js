import { useRouter } from "next/router";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "swiper/css/autoplay";

const Feature = () => {
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
  return (
    <div className="facilitymain" id="facility">
      <div className="Indexmain">
        <div className="container">
          <h1 className="text-center sm:text-sm  uppercase font-bold md:text-[26px] text-[#272727]">
            Facilities at Clarks Resort Nepal
          </h1>
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
            <div
              className="featurecard"
              onClick={() => router.push(`/facility/reception`)}
            >
              <img src="\reception.jpg"></img>
              <div>
                <p>Main reception</p>
              </div>
            </div>
            <div className="featurecard">
              <img src="\swim.jpg"></img>
              <div>
                <p>Swimming</p>
              </div>
            </div>
            <div className="featurecard">
              <img src="\gym.jpeg"></img>
              <div>
                <p>Gym</p>
              </div>
            </div>
            <div className="featurecard">
              <img src="\walk.jpg"></img>
              <div>
                <p>jungle walk</p>
              </div>
            </div>
            <div className="featurecard">
              <img src="\casino.jpg"></img>
              <div>
                <p>casino</p>
              </div>
            </div>
            <div className="featurecard">
              <img src="\cloth.jpg"></img>
              <div>
                <p>lundry</p>
              </div>
            </div>
            <div className="featurecard">
              <img src="\med.jpg"></img>
              <div>
                <p>Meditation</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Feature;
