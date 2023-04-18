import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const data = {
    room: {
      img: "/1.jpg",
      desc: `Explore the art and architecture of the medieval centres of
Kathmandu, and experience the luxury of staying in an
award-winning ‘living museum’. Then escape to the country, and
take in the infinite`,
    },
    reception: {
      img: "/reception.jpg",
      desc: `Explore the art and architecture of the medieval centres of
Kathmandu, and experience the luxury of staying in an
award-winning ‘living museum’. Then escape to the country, and
take in the infinite`,
    },
    spa: {
      title: "spa",
      img: "/2.jpg",
      desc: `Explore the art and architecture of the medieval centres of
      Kathmandu, and experience the luxury of staying in an
      award-winning ‘living museum’. Then escape to the country, and
      take in the infinite`,
    },
  };
  const router = useRouter();
  const { title } = router.query;
  console.log(title, "title");
  return (
    <div className="  text-black flex flex-col justify-center items-center gap-5 ">
      <div>{title && <img src={title && data[title].img} />}</div>
      <div className="container p-0">
        <h1 className="text-center sm:text-sm  uppercase font-bold md:text-[26px] text-[#272727] ">
          {title}
        </h1>
        <br /> {title && data[title].desc}{" "}
      </div>
    </div>
  );
};

export default index;
