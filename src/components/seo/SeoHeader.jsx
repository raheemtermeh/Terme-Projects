import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const SeoHeader = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">
          <img src={logo} alt="logo" className="w-[144px] h-[42px]" />
        </div>
        <ul className="flex space-x-6 ">
          <li>
            <a
              href="/"
              className="font-AIranianSans font-medium cursor-pointer text-[17px]"
            >
              خانه
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="font-AIranianSans font-medium cursor-pointer text-[17px]"
            >
              تعرفه‌ها
            </a>
          </li>
          <li>
            <Link
              to="/"
              className="font-AIranianSans font-medium cursor-pointer text-[17px]"
            >
              صفحه دیگر
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SeoHeader;
