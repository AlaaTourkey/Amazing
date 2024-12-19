import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/auto-vehicle-repair-service-logo_681672-1437 1.png";
import { DarkModeContext } from "../context/DarkModeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <div className={`nav w-10/12 mx-auto my-3 fixed top-0 left-0 right-0 z-50`}>
      <div
        className={`flex justify-between items-center gap-2 px-7 py-3 border mainBorder rounded-full ${
          isDarkMode ? "bg-[#0f0f21ed]  text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={handleCloseMenu}
          >
            <img className="w-10 h-10" src={logo} alt="logo" />
            <h2 className="lg:text-2xl mx-2">
              <strong>كـــــار</strong> سيرفيس
            </h2>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3 text-center">
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "mainColor" : "hover:text-orange-500"
            }
          >
            من نحن
          </NavLink>
          <NavLink
            to="/Questions"
            className={({ isActive }) =>
              isActive ? "mainColor" : "hover:text-orange-500"
            }
          >
            أسئلة و أجوبة
          </NavLink>
          <NavLink
            to="/articles"
            className={({ isActive }) =>
              isActive ? "mainColor" : "hover:text-orange-500"
            }
          >
            مقالات
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "mainColor" : "hover:text-orange-500"
            }
          >
            معرض الصور
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              isActive ? "mainColor" : "hover:text-orange-500"
            }
          >
            معلومات عنا
          </NavLink>
          <NavLink
            to="/report"
            className={({ isActive }) =>
              isActive ? "mainColor" : "hover:text-orange-500"
            }
          >
            التقرير
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
            moonColor="white"
            sunColor="black"
          />
          <button className="border-2 border-orange-500 px-2 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
            <Link to="/register">إنشاء حساب</Link>
          </button>
          <button className="bg-orange-500 text-white px-2 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
            <Link to="/login">تسجيل الدخول</Link>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
            moonColor="white"
            sunColor="black"
          />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)} // Only toggle the mobile menu
            className="text-black dark:text-white focus:outline-none flex items-center gap-2"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div
        className={`${isOpen ? "block" : "hidden"} ${
          isDarkMode ? "bg-[#0f0f21ed]  text-white" : "bg-white text-black"
        } md:hidden  flex flex-col items-center gap-4 py-10 rounded-lg relative`}
      >
        <button
          onClick={handleCloseMenu}
          className="absolute top-4 right-6 text-white text-2xl focus:outline-none"
        >
          <FaXmark className="mainColor" />
        </button>

        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "mainColor" : "hover:text-orange-500"
          }
          onClick={handleCloseMenu}
        >
          من نحن
        </NavLink>
        <NavLink
          to="/Questions"
          className={({ isActive }) =>
            isActive ? "mainColor" : "hover:text-orange-500"
          }
          onClick={handleCloseMenu}
        >
          أسئلة و أجوبة
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive ? "mainColor" : "hover:text-orange-500"
          }
          onClick={handleCloseMenu}
        >
          مقالات
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "mainColor" : "hover:text-orange-500"
          }
          onClick={handleCloseMenu}
        >
          معرض الصور
        </NavLink>
        <NavLink
          to="/info"
          className={({ isActive }) =>
            isActive ? "mainColor" : "hover:text-orange-500"
          }
          onClick={handleCloseMenu}
        >
          معلومات عنا
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive ? "mainColor" : "hover:text-orange-500"
          }
          onClick={handleCloseMenu}
        >
          التقرير
        </NavLink>
        <div className="flex flex-col gap-2 mt-4">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            onClick={handleCloseMenu}
          >
            <Link to="/login">تسجيل الدخول</Link>
          </button>
          <button
            className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
            onClick={handleCloseMenu}
          >
            <Link to="/register">إنشاء حساب</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
