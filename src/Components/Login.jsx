import { Link } from "react-router-dom";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", data);
    if (data.password.length < 8) {
      console.log("Password must be at least 8 characters long.");
      alert("Password must be at least 8 characters long.");
      return;
    }
    console.log("Form submitted successfully.");
  };
  

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-heading">Login</div>
        <div className="login-subheading">
          Enter your email below to login to your account
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label" style={{color: '#fff'}}>
            Email
          </label>
          <Input
            id="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            placeholder="m@example.com"
            required
            type="email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label" style={{color: '#fff'}}>
            Password
          </label>
          <Input
            id="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
            required
            type="password"
            className="form-input"
          />
        </div>
        {data.email && data.password ? (
          <Button type="submit" className="submit-button" variant="contained" >
            <Link
              to="/FlightAndDateSelection"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Login
            </Link>
          </Button>
        ) : (
          <Button
            type="submit"
            className="submit-button"
            variant="contained"
            disabled
            style={{backgroundColor: '#fff', color: '#000'}}
          >
            Login
          </Button>
        )}
        <div className="mt-4 text-center text-sm" style={{color: '#fff'}}>
          Don't have an account?{" "}
          <Link className="sign-up-link" to="#" style={{color: '#fff'}}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
