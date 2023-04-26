import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import moment from "moment";

function BookingForm({}) {
  const router = useRouter();
  const { roomtype } = router.query;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState("");
  const [success, setSuccess] = useState("");

  const prices = {
    "Deluxe Rooms": 200,
    Suites: 350,
    "Executive Rooms": 500,
  };
  useEffect(() => {
    if (roomtype) setRoomType(roomtype);
  }, [roomtype]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && arrivalDate && departureDate && guests && roomType) {
      setSuccess("your book is Successfully success!");
      // Handle form submission logic here, e.g., send data to server or API endpoint
      try {
        const response = await fetch("/api/book-room", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            arrivalDate,
            departureDate,
            guests,
            roomType,
          }),
        });

        const data = await response.json();
        console.log(data);

        // Redirect to thank you page
        router.push("/thank-you");
      } catch (error) {
        console.error(error);
      }
    } else {
      setSuccess("invalid");
    }
    //   const myForm = document.getElementById("myForm");
    //   myForm.addEventListener("submit", handleSubmit);
  };
  return (
    <div className="w-full md:min-h-screen relative flex  justify-between items-center py-16 flex-col md:p-32">
      <div className="container" style={{ padding: 0 }}>
        <h1 className="text-center uppercase font-bold md:text-[26px] text-[#272727] ">
          Booking At Clark Resort
        </h1>
      </div>
      <div className="w-full md:max-w-max flex gap-16 items-center flex-col md:flex-row px-5 md:px-4 border justify-between p-6">
        <div className="md:w-[400px] min-h-[400px] h-full  w-full  flex justify-center items-center ">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex w-[400px] flex-col gap-[10px] shadow-xl p-4 bg-gray-100"
          >
            <div className="success"> {success}</div>

            <div className="forminput">
              <TextField
                fullWidth
                id="standard-basic"
                label="Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="forminput">
              <TextField
                fullWidth
                id="standard-basic"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="forminput">
              <label>Arrival Date:</label>
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
              />
            </div>
            <div className="forminput">
              <label>Departure Date:</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
            <div className="forminput">
              <TextField
                fullWidth
                id="standard-basic"
                label="Guests"
                variant="standard"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                InputProps={{
                  inputProps: {
                    min: 0,
                    autoComplete: "off",
                  },
                }}
              />
            </div>
            <div className="forminput">
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                  Room type
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  label="Room Type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Deluxe Rooms">Deluxe Rooms</MenuItem>
                  <MenuItem value="Executive Rooms">Executive Rooms</MenuItem>
                  <MenuItem value="Suites">Suites</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Button
              type="submit"
              variant="contained"
              className="uppercase border border-black px-3 py-1 bg-orange-300 rounded-xl text-sm"
            >
              Book Now
            </Button>
          </form>
        </div>
        <div className="flex py-[10px] flex-col h-full w-full items-center bg-gray-100 md:w-[200px] shadow-xl">
          {guests &&
            roomType &&
            arrivalDate &&
            departureDate &&
            name &&
            email && (
              <div className=" flex flex-col p-2 text-white bg-red-500 border-[2px] rounded-[10px] shadow-xl">
                <span>Unit Price: Rs. {prices[roomType]}</span>
                <span>
                  Days Stay:{" "}
                  {moment(departureDate).diff(moment(arrivalDate), "days") || 1}
                </span>
                <span>Guests: {guests}</span>
                <hr />

                <span>
                  Total Price:{" "}
                  {prices[roomType] *
                    (moment(departureDate).diff(moment(arrivalDate), "days") ||
                      1) *
                    (guests > 2 ? 1 + (guests - 2) * 0.5 : 1)}
                </span>
              </div>
            )}
          <div className="max-w-max p-5 ">
            <span className=" text-sm text-cyan-600 flex flex-col ">
              <span>
                {" "}
                <i className="bx bx-wifi px-3 " />
                Free wifi
              </span>
              <span>
                <i className="bx bxs-t-shirt px-3 " />
                laundry Servics
              </span>
              <span>
                <i className="bx bxs-hotel px-3 " />
                Room
              </span>
              <span>
                <i className="bx bx-food-tag px-3 " />
                Free Breakfast
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
