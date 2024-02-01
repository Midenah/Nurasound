import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { PiFanFill } from "react-icons/pi";
import "./App.css";


export default function Navbar() {
const [isMobile, setIsMobile] = useState(false)

  return (
    <>
    <nav className="mobile">
      <span>
        <PiFanFill />
        nura
      </span>
      <div className="bar" onClick={() => {
        setIsMobile(!isMobile);
      }}> 
        <FaBars />
      </div>
      <ul className={isMobile ? "show": ""}>
        <li>Products</li>
        <li>Subcription</li>
        <li>Why Nura?</li>
        <li>Support</li>
      </ul>
      <p>Cart(0)</p>
    </nav>
    </>
  );
}
