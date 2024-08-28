import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-primary text-white py-6 shadow-md ">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-[144px] h-[42px]" />

        <nav className="text-right flex py-6 justify-between items-center navbar">
          <Link
            to="/contact"
            className="text-white font-AIranianSans font-medium cursor-pointer text-[18px] hover:text-gray-600"
          >
            تماس با ما
          </Link>
          <Link
            to="/"
            className="text-white font-AIranianSans font-medium mx-8 cursor-pointer text-[18px] hover:text-gray-600"
          >
            خانه
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
