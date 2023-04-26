import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const card = [
    {
      link: "Main Reception",
      name: "Main Reception",
      img: "/reception.jpg",
      desc: `Explore the art and architecture of the medieval centres of
      Kathmandu, and experience the luxury of staying in an
      award-winning ‘living museum’. Then escape to the country, and
      take in the infinite`,
    },
    {
      link: "Swimming",
      name: "Swimming",
      img: "/swim.jpg",
      desc: `Explore the art and architecture of the medieval centres of
      Kathmandu, and experience the luxury of staying in an
      award-winning ‘living museum’. Then escape to the country, and
      take in the infinite`,
    },
    {
      link: "Gym",
      name: "Gym",
      img: "/gym.jpeg",
      desc: `Explore the art and architecture of the medieval centres of
      Kathmandu, and experience the luxury of staying in an
      award-winning ‘living museum’. Then escape to the country, and
      take in the infinite`,
    },
    {
      link: "Room",
      name: "Room",
      img: "/4.jpg",
      desc: `Explore the art and architecture of the medieval centres of
      Kathmandu, and experience the luxury of staying in an
      award-winning ‘living museum’. Then escape to the country, and
      take in the infinite`,
    },
    {
      link: "Casino",
      name: "Casino",
      img: "/casino.jpg",
      desc: `Explore the art and architecture of the medieval centres of
      Kathmandu, and experience the luxury of staying in an
      award-winning ‘living museum’. Then escape to the country, and
      take in the infinite`,
    },
  ];
  return (
    <div className="Indexmain" id="about_us">
      <div className="container">
        <h1 className="text-center sm:text-sm  uppercase font-bold md:text-[26px] text-[#272727] pt-28">
          FACILITIES AT CLARKS RESORT NEPAL
        </h1>
      </div>
      <div class="container flex flex-col gap-10 ">
        {card.map((item) => (
          <div
            className="w-full relative h-[500px] md:h-[400px] flex-col "
            key={item.title}
          >
            <div className="w-full h-[500px] md:h-[400px] flex ">
              <div className="w-[40%] h-full bg-[#6a6a67] md:bg-white "></div>
              <div className="w-[60%] h-full bg-[#6a6a67]"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full gap-[20px] md:gap-[0px] md:p-[40px] flex md:justify-center flex-col md:flex-row">
              <div className="w-[100%] overflow-hidden h-[200px] md:w-[50%] md:h-[100%]">
                <img
                  className="hover:scale-[1.3] transition-all ease duration-[0.6s]"
                  alt=""
                  src={item.img}
                ></img>
              </div>
              <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] flex flex-col justify-center items-center gap-5 px-8">
                <h1 className="sm:text-sm text-center w-full uppercase font-bold md:text-[16px] text-white ">
                  {item.name}
                </h1>
                <p>{item.desc}</p>
                <Button
                  variant="outline"
                  className="uppercase w-[200px] border border-black px-3 py-1 bg-slate-100  rounded-xl text-sm"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                  onClick={() => router.push(`/facility/${item.link}`)}
                >
                  load more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
