import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h3 style={styles.logo}>ShopEasy</h3>
          <p>
            Your one-stop shop for the best products <br />
            <span style={{ color: "#f4b400", fontWeight: "bold" }}>
              at unbeatable prices
            </span>
            .  
            <br />
            <em>Quality you can trust</em>, delivered to your door.
          </p>
        </div>

        <div style={styles.middle}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.links}>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div style={styles.right}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p>Email: support@shopeasy.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Jaipur, Rajasthan</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "30px 0",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  left: {
    flex: "1",
    minWidth: "200px",
    padding: "15px",
    textAlign: "center",
    lineHeight: "1.6",
  },
  logo: {
    color: "#f4b400",
    marginBottom: "10px",
  },
  middle: {
    flex: "1",
    minWidth: "200px",
    padding: "15px",
  },
  heading: {
    marginBottom: "10px",
    borderBottom: "2px solid #f4b400",
    display: "inline-block",
  },
  links: {
    listStyle: "none",
    padding: 0,
  },
  right: {
    flex: "1",
    minWidth: "200px",
    backgroundColor: "#333",
    padding: "15px",
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "1.6",
    textAlign: "center",
  },
  bottom: {
    textAlign: "center",
    paddingTop: "15px",
    borderTop: "1px solid #444",
    marginTop: "20px",
    fontSize: "14px",
    color: "#aaa",
  },
};

export default Footer;
