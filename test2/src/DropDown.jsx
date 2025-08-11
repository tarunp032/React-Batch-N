import React, {useState} from "react";

const DropDown = () => {

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

  if(country){
    states = Object.keys(data[country].states);
  }

  if(country && state){
    cities = data[country].states[state];
  }

  const handleMangeCountry = (e) => {
    setCountry(e.target.value);
    setState("");
    setCity("");
  }

  const handleMangeState = (e) => {
    setState(e.target.value);
    setCity("");
  }
  const handleMangeCity = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = (e) => {
    if(!(country && state && city)){
      alert("Select all option given below!");
      return;
    }
    const data = {
      Contry: country,
      State: state,
      City: city,
    }
    console.log(data);
  }

  return (
    <div>
      <h1>DropDown</h1>
      <label>
        Country:
        <select value={country} onChange={handleMangeCountry}>
          <option value="">Select Country</option>
          {countries.map((cy) => (
            <option key={cy} value={cy}>
              {cy}
            </option>
          ))}
        </select>
      </label>

      <br/>
      <br/>
      
      <label>
        State:
        <select value={state} disabled={!country} onChange={handleMangeState}>
          <option value="">Select State</option>
          {states.map((cy1) => (
            <option key={cy1} value={cy1}>
              {cy1}
            </option>
          ))}
        </select>
      </label>

      <br/>
      <br/>
      
      <label>
        City:
        <select value={city} disabled={!state} onChange={handleMangeCity}>
          <option value="">Select City</option>
          {cities.map((cy2) => (
            <option key={cy2} value={cy2}>
              {cy2}
            </option>
          ))}
        </select>
      </label>

      <br/>
      <br/>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DropDown;
