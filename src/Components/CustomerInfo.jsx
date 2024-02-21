// import { FormControl } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import './CustomerInfo.css';
import { useState } from "react";

export default function CustomerInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dateOfBirth: "",
    passportId: "",
    nationality: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input changed:", name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling submit...");
    console.log("Form data:", formData);
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      dateOfBirth: "",
      passportId: "",
      nationality: "",
    });
  };

  return (
    <>
      <div className="container" style={{backgroundColor: '#1b1b6c'}}>
        <div className="header-section">
          <h1 className="custom-heading" style={{color: '#fff'}}>Customer Information</h1>
          <p className="custom-text" style={{color: '#fff'}}>
            Enter your details as they appear on your government-issued
            identification.
          </p>
        </div>
        <div className="form-fields">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name" className="form-label" style={{color: '#fff'}}>
                  Name
                </label>
                <Input
                  name="name"
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email" className="form-label" style={{color: '#fff'}}>
                  Email
                </label>
                <Input
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="contact-number" className="form-label" style={{color: '#fff'}}>
                  Contact number
                </label>
                <Input
                  name="contactNumber"
                  className="form-input"
                  placeholder="Enter your contact number"
                  required
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  inputProps={{ maxLength: 10 }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="dob" className="form-label" style={{color: '#fff'}}>
                  Date of birth
                </label>
                <Input
                  name="dateOfBirth"
                  className="form-input"
                  required
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="passport-id" className="form-label" style={{color: '#fff'}}>
                  Passport/ID
                </label>
                <Input
                  name="passportId"
                  className="form-input"
                  placeholder="Enter your passport/ID number"
                  required
                  value={formData.passportId}
                  onChange={handleInputChange}
                  inputProps={{ maxLength: 12 }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="nationality" className="form-label" style={{color: '#fff'}}>
                  Nationality
                </label>
                <Input
                  name="nationality"
                  className="form-input"
                  placeholder="Enter your nationality"
                  required
                  value={formData.nationality}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="continue-btn">
              {formData.name &&
              formData.email &&
              formData.contactNumber &&
              formData.dateOfBirth &&
              formData.passportId &&
              formData.nationality ? (
                <Button
                  type="submit"
                  className="continue-button"
                  variant="contained"
                >
                  <Link
                    to="/BookConfirmation"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Continue to Payment
                  </Link>
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="continue-button"
                  variant="contained"
                  disabled
                  style={{backgroundColor: '#fff', color: '#000'}}
                >
                  <Link
                    to="/BookConfirmation"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Continue to Payment
                  </Link>
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
