import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import logo from "../assets/logo.png";

const Navbar = ({ user, setUser }) => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (id) => {
    if (id.startsWith("/")) {
      navigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
    setToggle(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={logo}
        alt="logo"
        className="w-[154px] h-[42px] ml-12 mt-9 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <ul className="list-none sm:flex hidden justify-end items-center mr-11 flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-AIranianSans font-normal cursor-pointer text-[22px] text-gradient font-extrabold ${
              active === nav.id ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => handleLinkClick(nav.id)}
          >
            <Link to={nav.id.startsWith("/") ? nav.id : `#${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
        {!user ? (
          <>
            <li className="font-AIranianSans font-normal cursor-pointer mx-4 text-[22px] text-gradient font-extrabold mr-10">
              <Link to="/login">ورود</Link>
            </li>
            <li className="font-AIranianSans font-normal cursor-pointer text-[22px] text-gradient font-extrabold">
              <Link to="/login">ثبت‌نام</Link>
            </li>
          </>
        ) : (
          <>
            <li className="font-AIranianSans font-normal ml-11 cursor-pointer text-[22px] text-gradient font-extrabold mr-10 flex items-center">
              <img
                src={user.profilePic || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full mr-2"
              />
              <Link to="/profile">{user.username}</Link>
            </li>
          </>
        )}
      </ul>

      <div className="sm:hidden flex flex-1 text-center justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-AIranianSans font-medium cursor-pointer text-[16px] ${
                  active === nav.id ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleLinkClick(nav.id)}
              >
                <Link to={nav.id.startsWith("/") ? nav.id : `#${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
            {!user ? (
              <>
                <li className="font-AIranianSans text-white text-center mx-4 my-2 font-medium cursor-pointer text-[16px] mb-4">
                  <Link to="/login">ورود</Link>
                </li>
                <li className="font-AIranianSans text-white mx-4 my-2 text-center font-medium cursor-pointer text-[16px]">
                  <Link to="/login">ثبت‌نام</Link>
                </li>
              </>
            ) : (
              <>
                <li className="font-AIranianSans font-medium cursor-pointer text-[16px] mb-4 flex items-center">
                  <img
                    src={user.profilePic || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <Link to="/profile">{user.username}</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
