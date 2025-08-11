import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display: "flex", gap:"20px", fontWeight: "800"}}>
    <Link to={"/"}>Home</Link>
      <Link to={"/dropdown"}>DropDown</Link>
    </div>
  )
}

export default Header
