import { useRouter } from "next/router";
import React from "react";
import Feature from "../../../../components/Feature";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const index = () => {
  const data = [
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
      service: [
        {
          name: "Main Reception",
          img: "/reception.jpg",
          desc: `Explore the art and architecture of the medieval centres of
      Kathmandu, and experience the luxury of staying in an
      award-winning ‘living museum’. Then escape to the country, and
      take in the infinite`,
        },
        {
          name: "Main Reception",
          img: "/reception.jpg",
          desc: `Explore the art and architecture of the medieval centres of
    Kathmandu, and experience the luxury of staying in an
    award-winning ‘living museum’. Then escape to the country, and
    take in the infinite`,
        },
        {
          name: "Main Reception",
          img: "/reception.jpg",
          desc: `Explore the art and architecture of the medieval centres of
  Kathmandu, and experience the luxury of staying in an
  award-winning ‘living museum’. Then escape to the country, and
  take in the infinite`,
        },
      ],
    },
    {
      link: "Jungle Walk",
      name: "Jungle Walk",
      img: "/walk.jpg",
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
  const router = useRouter();
  const { title } = router.query;
  const currentdata = title && data.filter((d) => d.name === title)[0];
  console.log(title, "title");
  return (
    <div className="  text-black flex flex-col justify-center items-center gap-5 md:px-[40px]">
      <div className="w-full md:h-[500px] h-[300px] overflow-hidden md:mt-[100px]">
        {title && (
          <img
            className="w-full h-full object-cover"
            src={title && currentdata.img}
          />
        )}
      </div>
      <div className="container p-0">
        <h1 className="text-center sm:text-sm  uppercase font-bold md:text-[26px] text-[#272727] ">
          {title}
        </h1>
        <br /> {title && currentdata.desc}{" "}
      </div>
      {title && currentdata.service && (
        <div className="w-full min-h-[300px] flex-col flex justify-between md:flex-row p-[20px]">
          {currentdata.service?.map((sc) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image={sc.img} title={sc.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {sc.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {sc.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={(e) => router.push(`/booking`)} size="small">
                  Book Now
                </Button>
              </CardActions>
            </Card>

            // <div className="w-30% h-max p-2 border-y-2 rounded-lg">
            //   <h1>{sc.name}</h1>
            // </div>
          ))}
          {/* <div className="w-30% h-full bg-red-800">j</div>
          <div className="w-30% h-full bg-red-800">h</div> */}
        </div>
      )}
      <Feature currentfacility={title} viewmore={true} />
    </div>
  );
};

export default index;
