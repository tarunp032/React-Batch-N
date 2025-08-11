import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dropdown from "./Dropdown";
// import Message from "./Message";

  const data = {
  india: {
    states: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
      WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
      Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
      Haryana: ["Gurugram", "Faridabad", "Panipat"],
      Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
      UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
      Bihar: ["Patna", "Gaya", "Bhagalpur"],
      Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
    },
  },
  usa: {
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      NewYork: ["New York City", "Buffalo", "Rochester"],
    },
  },
  germany: {
    states: {
      Bavaria: ["Munich", "Nuremberg", "Augsburg"],
      Berlin: ["Berlin", "Potsdam", "Cottbus"],
    },
  },
};

const App = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleCountryChange = (value) => {
    setCountry(value);
    setState("");
    setCity("");
  };

  const handleStateChange = (value) => {
    setState(value);
    setCity("");
  };

  const handleCityChange = (value) => {
    setCity(value);
    console.log("Welcome to ${value}");
  };


  return (
    <div>
      <h2>Location Selector</h2>
      <Dropdown
        label="Country"
        options={countries}
        value={country}
        onChange={handleCountryChange}
      />
      {country && (
        <Dropdown
          label="State"
          options={states}
          value={state}
          onChange={handleStateChange}
        />
      )}
      {state && (
        <Dropdown
          label="City"
          options={cities}
          value={city}
          onChange={handleCityChange}
        />
      )}
      {city && <Mesasge city={city} />}
    </div>
  );
};

export default App;
