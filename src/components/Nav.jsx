import React, { useState } from "react";
import { headerLogo, close } from "../assets/images";
import { hamburger, closebutton } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
            className="md:mb-[150px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* mobile nav section */}
        <div className="hidden max-lg:flex">
          <img
            src={toggle ? closebutton : hamburger}
            className="w-[28px] h-[28px] object-contain cursor-pointer toggle-mobile"
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"}`}>
            <ul className="list-non flex justify-end items-start flex-col gap-4">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`${item.label ? "text-white" : "text-black"}`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
