import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  const user = "Tarun Prajapat";
  const email = "prajapattarun7547@gmail.com";
  const phone = "+1 2412346745";
  const address = "Jaipur Rajasthan";

  return (
    <div className="abc">
    <h1>👀 App Component is Rendering!</h1>
      <Header name={user} email={email}/>
      <Footer phone={phone} address={address}/>
    </div>
  );
}

export default App;
