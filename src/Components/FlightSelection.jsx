import { Typography, Button } from "@mui/material";
import "./FlightSelection.css";
import { Link } from "react-router-dom";

export default function FlightSelection({ flight }) {
  return (
    <div className="flight-card">
      <div className="flight-details">
        <div className="flight-header">
          <img src={flight.logo} alt={flight.name} className="flight-logo" />
          <Typography variant="subtitle1" className="flight-name">
            {flight.name}
          </Typography>
          <Typography variant="subtitle1" className="flight-num">
            {flight.number}
          </Typography>
        </div>
        <div className="flight-info">
          <div className="flight-detail">
            <Typography variant="body2">
              Departure: {flight.departure}
            </Typography>
          </div>
          <div className="flight-detail">
            <Typography variant="body2">Duration: {flight.duration}</Typography>
          </div>
          <div className="flight-detail">
            <Typography variant="body2">Arrival: {flight.arrival}</Typography>
          </div>
        </div>
        <div className="flight-amount">
          <Typography variant="body2">{flight.amount} per adult</Typography>
          <Button className="book-button" variant="contained"><Link to="/CustomerInfo" style={{textDecoration: 'none'}}>Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
