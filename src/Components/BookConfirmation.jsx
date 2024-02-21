import "./BookConfirmation.css";
import { Button } from "@mui/material";

export default function BookConfirmation() {
  return (
    <>
      <div className="container">
        <div className="header-section">
          <h1 className="custom-heading">Booking Confirmation</h1>
          <p className="custom-text">
            Your booking is confirmed. Below are the details of your
            reservation.
          </p>
        </div>
        <div className="details-section">
          <div>
            <div className="section-heading">Flight Details</div>
            <div>Your booking reference number is: 1234567890</div>
          </div>
          <div>
            <div>
              <div className="detail-label">Departure</div>
              <div className="detail-value">New Delhi</div>
              <div className="detail-value">
                Indira Gandhi International Airport
              </div>
            </div>
            <div>
              <div className="detail-label">Arrival</div>
              <div className="detail-value">Kolkata</div>
              <div className="detail-value">
                Netaji Subhas Chandra Bose International Airport
              </div>
            </div>
            <div>
              <div className="detail-label">Date</div>
              <div className="detail-value">May 10, 2024</div>
            </div>
            <div>
              <div className="detail-label">Time</div>
              <div className="detail-value">10:00 AM</div>
            </div>
          </div>
        </div>
        <div className="center-button">
          <Button className="print-button" variant="contained">Print confirmation</Button>
        </div>
      </div>
    </>
  );
}
