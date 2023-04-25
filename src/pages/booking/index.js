import { useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function BookingForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [guests, setGuests] = useState("");
  const [roomType, setRoomType] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    //   const myForm = document.getElementById("myForm");
    //   myForm.addEventListener("submit", handleSubmit);
  };
  return (
    <div className="w-full md:min-h-screen relative flex flex-col justify-between items-center md:flex-row md:p-12">
      <div className="md:w-[70%] min-h-[400px] h-full p-[20px] w-full md:p-[40px] md:pt-44 mt-6 flex justify-center items-center pt-4">
        <form
          onSubmit={handleSubmit}
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
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="double">Double</MenuItem>
                <MenuItem value="family">Family</MenuItem>
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
      <div className="flex h-full w-full items-center bg-gray-100 md:w-[30%] shadow-xl">
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
  );
}

export default BookingForm;
