import React, { useContext } from "react";

import logo from "./assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./Context";

export default function Navbar() {

    const { openSubmenu, openSidebar, closeSubmenu } = useContext(AppContext);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log("page: ", page);

    const tempBtn = e.target.getBoundingClientRect(); // top, left, right, bottom, width, height, x, y
    // console.log("tempBtn: ", tempBtn);

    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 10;

    console.log("bottom: ", bottom, "center: ", center);

    openSubmenu(page, { center, bottom });
  };



  const handleSubmit = (e) => {
    if (!e.target.classList.contains("link-btn")) closeSubmenu();
  };

  
  
  
  return (
    <>
      <section
        onMouseOver={handleSubmit}
        className="w-full  p-4 bg-slate-500 flex justify-between "
      >
        <div className="w-[90%] m-auto flex justify-between items-center">
          <div className="logo w-max">
            <img src={logo} alt="" />
          </div>

          <ul className="w-[450px] text-white  md:flex list-none hidden justify-between text-[20px] ">
            <li>
              <button onMouseOver={displaySubmenu} className="link-btn">
                Products
              </button>
            </li>
            <li>
              <button onMouseOver={displaySubmenu} className="link-btn">
                Developers
              </button>
            </li>
            <li>
              <button onMouseOver={displaySubmenu} className="link-btn">
                Company
              </button>
            </li>
          </ul>

          <button className="text-white hover:bg-slate-500 transform duration-300 hidden md:flex bg-black p-2 rounded-md cursor-pointer">
            <a href="">Sign Up</a>
          </button>

          <div
            onClick={openSidebar}
            className="text-[25px] text-white flex md:hidden  "
          >
            <FaBars />
          </div>
        </div>
      </section>
    </>
  );
}
