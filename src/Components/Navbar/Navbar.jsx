import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/auto-vehicle-repair-service-logo_681672-1437 1.png";
import { DarkModeContext } from "../context/DarkModeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`nav w-full mx-auto my-3 fixed top-0 left-0 right-0 z-50`}>
      <div
        className={`flex justify-between items-center gap-2 px-5 py-3 border mainBorder rounded-full ${isDarkMode ? "bg-[#0f0f21ed]  text-white" : "bg-white text-black"
          }`}
      >
        <div className="flex items-center justify-between px-2">
          <Link to="/" className="flex items-center gap-2">
            <img className="w-10 h-10" src={logo} alt="logo" />
            <h2 className="lg:text-2xl mx-2">
              <strong>كـــــار</strong> سيرفيس
            </h2>
          </Link>

          {/* Dark Mode Toggle */}
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
            moonColor="white"
            sunColor="black"
          />
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

        <div className="hidden md:flex items-center gap-2">
          <button className="border-2 border-orange-500 px-2 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
            <Link to="/register">إنشاء حساب</Link>
          </button>
          <button className="bg-orange-500 text-white px-2 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
            <Link to="/login">تسجيل الدخول</Link>
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#0f0f21ed] text-white flex flex-col items-center gap-4  py-10 rounded-lg relative`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-6 text-white text-2xl focus:outline-none"
        >
          <FaXmark className="mainColor" />
        </button>

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
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "mainColor" : "hover:text-orange-500"
          }
        >
          اتصل بنا
        </NavLink> */}
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
        <div className="flex flex-col gap-2 mt-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
            <Link to="/login">تسجيل الدخول</Link>
          </button>
          <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
            <Link to="/register">إنشاء حساب</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
