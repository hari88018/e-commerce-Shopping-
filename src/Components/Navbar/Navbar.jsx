import React from "react";
import Search from "@mui/icons-material/Search";
import "./Navbar.css";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart";


const Navbar = () => {
  return (
    <div className="Nav_container">
      <div className="wrapper">
        <div className="left">
          <div className="lan">EN</div>
          <div className="Input">
            <input type="text" placeholder="Search..." />
            <div className="InputSearch">
            <Search style={{color:"white",}} />

            </div>
          </div>
        </div>
        <div className="center">
          <Link to={'/'}>
          <h1>BACKDROP</h1></Link>
        </div>
        <div className="right">
          <ul>
            <Link to={"/Register"}>
              <li className="MenuItems">REGISTER</li>{" "}
            </Link>
            <Link to={"/Signin"}>
              <li className="MenuItems">
                SIGN IN</li></Link>
            <Link to={"/Cart"}>
            <li>
            <Badge badgeContent={2} color="secondary">
            <ShoppingCart className="MenuItems"  />
          </Badge>
            </li></Link>
          </ul>
          
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
