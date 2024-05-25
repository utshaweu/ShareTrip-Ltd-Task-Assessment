import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BookingDetails from "./components/BookingDetails/BookingDetails";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Sidebar />
        <BookingDetails />
      </div>
    </div>
  );
}

export default App;
