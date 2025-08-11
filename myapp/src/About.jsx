import React, { useState } from "react";

const About = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

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

  let states = [];

  let cities = [];
  const countries = Object.keys(data);

  if (country) {
    states = Object.keys(data[country].states);
  }

  if (country && state) {
    cities = data[country].states[state];
  }

  const handleMangeCountry = (e) => {
    setCountry(e.target.value);
    setState("");
    setCity("");
  };

  const handleMangeState = (e) => {
    setState(e.target.value);
    setCity("");
  };

  const handleMangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!(country && state && city)) {
      alert("select all");
      return;
    }

    const data = {
      xyz: country,
      abc: state,
      city,
    };
    console.log(data);
  };

  return (
    <div>
      <h1>Drop down</h1>
      <label>
        Country:
        <select value={country} onChange={handleMangeCountry}>
          <option value="">select country</option>
          {countries.map((cy) => (
            <option key={cy} value={cy}>
              {cy}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <label>
        State:
        <select value={state} disabled={!country} onChange={handleMangeState}>
          <option value="">select state</option>
          {states.map((cy1) => (
            <option key={cy1} value={cy1}>
              {cy1}
            </option>
          ))}
        </select>
      </label>

      <br />
      <br />
      <label>
        City:
        <select value={city} disabled={!state} onChange={handleMangeCity}>
          <option value="">select city</option>
          {cities.map((cy2) => (
            <option key={cy2} value={cy2}>
              {cy2}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <button onClick={handleSubmit} >submit</button>
    </div>
  );
};

export default About;
