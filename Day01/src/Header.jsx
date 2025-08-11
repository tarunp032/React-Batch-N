import React from "react";

const Header = ({ name, email }) => {
  return (
    <header>
      <h2>This is Header Component</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </header>
    // const styleObj = {
    //   color: "Green",
    //   font: "80px",
    // };
    // return <h2 style={styleObj}>Future Web Developer!</h2>;
  );
};

export default Header;
