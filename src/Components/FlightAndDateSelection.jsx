import FormControl from "@mui/material/FormControl";
import { Typography, Input, Select, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import "./FlightAndDateSelection.css";
import FlightSelection from "./FlightSelection";
import { useState } from "react";

export default function FlightAndDateSelection() {
  const [searchCriteria, setSearchCriteria] = useState({
    from:"",
    to:"",
    departDate: "",
    returnDate: "",
    adults: "",
    children: "",
    infants: "",
  });

  const flights = [
    {
      name: "SpiceJet",
      number: "SG 8130",
      from: "Kolkata",
      to: "New Delhi",
      departure: "09:00",
      arrival: "11:00",
      duration: "02 h 00 m",
      amount: "₹ 6200",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?",
    },
    {
      name: "Indigo",
      number: "6E 2083",
      from: "Kolkata",
      to: "Bangalore",
      departure: "10:00",
      arrival: "13:00 PM",
      duration: "03 h 00 m",
      amount: "₹ 4800",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFk2PHx-Vu9_SvMkJKZatYfVxHWdXiS_QJzQ&usqp=CAU",
    },
    {
      name: "SpiceJet",
      number: "SG 8169",
      from: "Kolkata",
      to: "Mumbai",
      departure: "6:20 AM",
      arrival: "8:45 AM",
      duration: "02 h 25 m",
      amount: "₹ 6219",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?",
    },
    {
      name: "Vistara",
      number: "UK 708",
      from: "Mumbai",
      to: "Bangalore",
      departure: "19:30 ",
      arrival: "22:00",
      duration: "02 h 30 m",
      amount: "₹ 5400",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?",
    },
    {
      name: "Air India",
      number: "AI 768",
      from: "Kolkata",
      to: "New Delhi",
      departure: "21:00",
      arrival: "11:00",
      duration: "02 h 00 m",
      amount: "₹ 7200",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?",
    },
    {
      name: "Indigo",
      number: "6E 2415",
      from: "Mumbai",
      to: "New Delhi",
      departure: "22:30",
      arrival: "01:10",
      duration: "02 h 40 m",
      amount: "₹ 5800",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFk2PHx-Vu9_SvMkJKZatYfVxHWdXiS_QJzQ&usqp=CAU",
    },
    {
      name: "AirIndia",
      number: "AI 769",
      from: "Mumbai",
      to: "Kolkata",
      departure: "12:00",
      arrival: "15:00 AM",
      duration: "03 h 00 m",
      amount: "₹ 8000",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?",
    },
    {
      name: "Vistara",
      number: "UK 706",
      from: "Mumbai",
      to: "Bangalore",
      departure: "16:00",
      arrival: "18:45",
      duration: "02 h 45 m",
      amount: "₹ 10800",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?",
    },
    {
      name: "SpiceJet",
      number: "SG 1001",
      from: "Bangalore",
      to: "New Delhi",
      departure: "08:00",
      arrival: "10:30",
      duration: "02 h 30 m",
      amount: "₹ 5000",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?",
    },
    {
      name: "Indigo",
      number: "6E 2002",
      from: "Bangalore",
      to: "Mumbai",
      departure: "12:00",
      arrival: "14:30",
      duration: "02 h 30 m",
      amount: "₹ 5500",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFk2PHx-Vu9_SvMkJKZatYfVxHWdXiS_QJzQ&usqp=CAU",
    },
    {
      name: "Vistara",
      number: "UK 706",
      from: "Bangalore",
      to: "Kolkata",
      departure: "16:00",
      arrival: "18:45",
      duration: "02 h 45 m",
      amount: "₹ 10800",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?",
    },
    {
      name: "SpiceJet",
      number: "SG 8130",
      from: "Bangalore",
      to: "New Delhi",
      departure: "09:00",
      arrival: "11:00",
      duration: "02 h 00 m",
      amount: "₹ 6200",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?",
    },
    {
      name: "Indigo",
      number: "6E 2083",
      from: "Bangalore",
      to: "Kolkata",
      departure: "10:00",
      arrival: "13:00 PM",
      duration: "03 h 00 m",
      amount: "₹ 4800",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFk2PHx-Vu9_SvMkJKZatYfVxHWdXiS_QJzQ&usqp=CAU",
    },
    {
      name: "SpiceJet",
      number: "SG 8130",
      from: "Mumbai",
      to: "New Delhi",
      departure: "09:00",
      arrival: "11:00",
      duration: "02 h 00 m",
      amount: "₹ 6200",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?",
    },
    {
      name: "Indigo",
      number: "6E 2083",
      from: "Mumbai",
      to: "Bangalore",
      departure: "10:00",
      arrival: "13:00 PM",
      duration: "03 h 00 m",
      amount: "₹ 4800",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFk2PHx-Vu9_SvMkJKZatYfVxHWdXiS_QJzQ&usqp=CAU",
    },
    {
      name: "SpiceJet",
      number: "SG 8169",
      from: "Mumbai",
      to: "Kolkata",
      departure: "6:20 AM",
      arrival: "8:45 AM",
      duration: "02 h 25 m",
      amount: "₹ 6219",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?",
    },
    {
      name: "Vistara",
      number: "UK 708",
      from: "Mumbai",
      to: "Bangalore",
      departure: "19:30 ",
      arrival: "22:00",
      duration: "02 h 30 m",
      amount: "₹ 5400",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?",
    },
    {
      name: "Air India",
      number: "AI 768",
      from: "Mumbai",
      to: "New Delhi",
      departure: "21:00",
      arrival: "11:00",
      duration: "02 h 00 m",
      amount: "₹ 7200",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?",
    },
    {
      name: "Indigo",
      number: "6E 2415",
      from: "Mumbai",
      to: "Kolkata",
      departure: "22:30",
      arrival: "01:10",
      duration: "02 h 40 m",
      amount: "₹ 5800",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFk2PHx-Vu9_SvMkJKZatYfVxHWdXiS_QJzQ&usqp=CAU",
    },
    {
      name: "Vistara",
      number: "UK 708",
      from: "New Delhi",
      to: "Bangalore",
      departure: "19:30 ",
      arrival: "22:00",
      duration: "02 h 30 m",
      amount: "₹ 5400",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?",
    },
    {
      name: "Air India",
      number: "AI 768",
      from: "New Delhi",
      to: "Mumbai",
      departure: "21:00",
      arrival: "11:00",
      duration: "02 h 00 m",
      amount: "₹ 7200",
      logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?",
    },
    {
      name: "Indigo",
      number: "6E 2415",
      from: "New Delhi",
      to: "Kolkata",
      departure: "22:30",
      arrival: "01:10",
      duration: "02 h 40 m",
      amount: "₹ 5800",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFk2PHx-Vu9_SvMkJKZatYfVxHWdXiS_QJzQ&usqp=CAU",
    }
  ];
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchCriteria.from || !searchCriteria.to || !searchCriteria.departDate) {
      alert("Please fill in all search criteria");
      return;
    }

    const filtered = flights.filter((flight) => {
      return (
        flight.from.toLowerCase() === searchCriteria.from.toLowerCase() &&
        flight.to.toLowerCase() === searchCriteria.to.toLowerCase()
      );
    });
    console.log("Filtered flights:", filtered);
    setFilteredFlights(filtered);
  };
  return (
    <>
      <div className="flight-form-container">
        <div className="flight-form-header">
          <Typography variant="h3" className="font-bold tracking-tight">
            Book your next flight
          </Typography>
          <Typography
            variant="body1"
            className="max-w-[30rem] text-gray-500 dark:text-gray-400"
          >
            Enter your details below to find the perfect flight for your next
            adventure.
          </Typography>
        </div>
        <form className="flight-form" onSubmit={handleSearch}>
          <div className="form-row">
            <div className="form-field">
              <FormControl
                className="form-label"
                htmlFor="departure"
                style={{ color: "#fff" }}
              >
                From
              </FormControl>
              <Select
                value={searchCriteria.from}
                onChange={handleInputChange}
                name="from"
                className="form-input"
              >
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="New Delhi">New Delhi</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
              </Select>
            </div>
            <div className="form-field">
              <FormControl
                className="form-label"
                htmlFor="destination"
                style={{ color: "#fff"}}
              >
                To
              </FormControl>
              <Select
                value={searchCriteria.to}
                onChange={handleInputChange}
                name="to"
                className="form-input"
              >
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="New Delhi">New Delhi</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
              </Select>
            </div>
            <div className="form-field">
              <div className="date-field">
                <FormControl
                  className="form-label"
                  htmlFor="depart"
                  style={{ color: "#fff" }}
                >
                  Departing
                </FormControl>
                <Input
                  className="form-input"
                  name="departDate"
                  type="date"
                  placeholder="Departure Date"
                  value={searchCriteria.departDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-field">
              <div className="date-field">
                <FormControl
                  className="form-label"
                  htmlFor="return"
                  style={{ color: "#fff" }}
                >
                  Returning
                </FormControl>
                <Input
                  className="form-input"
                  name="returnDate"
                  type="date"
                  placeholder="Return Date"
                  value={searchCriteria.returnDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-field">
              <div className="date-field">
                <FormControl
                  className="form-label"
                  htmlFor="return"
                  style={{ color: "#fff" }}
                >
                  Passengers
                </FormControl>
                <div style={{ display: "flex" }}>
                  <Input
                    className="form-input"
                    name="adults"
                    type="number"
                    inputProps={{ min: 0 }}
                    placeholder="Adults"
                    value={searchCriteria.adults}
                    onChange={handleInputChange}
                    style={{ marginRight: "10px" }}
                  />
                  <Input
                    className="form-input"
                    name="children"
                    type="number"
                    inputProps={{ min: 0 }}
                    placeholder="Children"
                    value={searchCriteria.children}
                    onChange={handleInputChange}
                    style={{ marginRight: "10px" }}
                  />
                  <Input
                    className="form-input"
                    name="infants"
                    type="number"
                    inputProps={{ min: 0 }}
                    placeholder="Infants"
                    value={searchCriteria.infants}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-field">
              <Button
                className="search-button"
                type="submit"
                style={{
                  border: "1px solid #6495ed",
                  marginTop: "1rem",
                  backgroundColor: "#6495ed",
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="flight-details-container">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight, index) => (
            <FlightSelection key={index} flight={flight} />
          ))
        ) : (
          <Typography variant="body1">
            No flights available for the selected criteria. Please input your details and initiate a flight search
          </Typography>
        )}
      </div>
    </>
  );
}
