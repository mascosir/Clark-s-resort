import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const data = {
    room: {
      img: "./1.jpg",
      desc: `Explore the art and architecture of the medieval centres of
Kathmandu, and experience the luxury of staying in an
award-winning ‘living museum’. Then escape to the country, and
take in the infinite`,
    },
    spa: {
      title: "spa",
      img: "./2.jpg",
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
    <div className="p-[10%] text-black">
      {title} <br /> {title && data[title].desc}{" "}
      <div>{title && <img src={title && data[title].img}></img>}</div>
    </div>
  );
};

export default index;
