import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../Components/Login'
import FlightAndDateSelection from '../Components/FlightAndDateSelection'
import FlightSelection from '../Components/FlightSelection';
import CustomerInfo from '../Components/CustomerInfo';
import BookConfirmation from '../Components/BookConfirmation';



const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/FlightAndDateSelection" element={<FlightAndDateSelection/>}/>
        <Route path="/FlightSelection" element={<FlightSelection  />}/>
        <Route path="/CustomerInfo" element={<CustomerInfo  />}/>
        <Route path="/BookConfirmation" element={<BookConfirmation />}/>
      </Routes>
    </>
  )
}

export default AllRoutes
