import React from "react";

const Footer = ({ phone, address }) => {
  return (
    <footer>
      <h2>This is Footer Component</h2>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <h5 className="xyz">It's everything about me.</h5>
    </footer>
  );
};

export default Footer;
