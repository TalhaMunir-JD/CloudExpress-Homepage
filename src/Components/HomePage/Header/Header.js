import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'; // Import your CSS file


const Header = () => {
  return (
    <div className="header-title">
        <div className="header-text">
            <h2>
              Cloud Express 
            </h2>
        </div>   
        <div className="account-information">
          <h3>
            Account information
          </h3>
        </div>   
    </div>
  );
}

export default Header;
