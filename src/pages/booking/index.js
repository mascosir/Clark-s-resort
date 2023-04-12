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
    <div className="min-w-screen min-h-screen relative">
      <div className="w-full min-h-[600px] h-full p-[20px] md:p-[40px] md:pt-44 flex justify-center items-center pt-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-[400px] flex-col gap-[10px] shadow-xl p-4 bg-gray-500"
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
    </div>
  );
}

export default BookingForm;
