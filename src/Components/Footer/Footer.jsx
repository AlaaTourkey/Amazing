import React from 'react'
import { BiPlanet } from 'react-icons/bi';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className='fixed bottom-0 left-0 w-full bg-black bg-opacity-80 z-40'>
        <div className="footer">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center py-5">
            <Link to="/">
              <div className="col-span-1 text-center">
                <h2 className="lg:text-2xl mx-2">
                  <strong className="">كـــــار</strong> سيرفيس
                </h2>
              </div>
            </Link>
            <div className="col-span-1 flex justify-center">
              <div className=" flex items-center gap-5 text-white">
                <Link to="about" className="hover:text-orange-500">
                  من نحن
                </Link>
                <Link to="/Questions" className="hover:text-orange-500">
                  أسئلة و أجوبة
                </Link>
                <Link to="/articles" className="hover:text-orange-500">
                  مقالات
                </Link>
                <Link to="/contact" className="hover:text-orange-500">
                  اتصل بنا
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex items-center justify-center gap-4">
                <IoLogoInstagram className="text-2xl" />
                <BiPlanet className="text-2xl" />
                <FaTwitter className="text-2xl" />
                <FaYoutube className="text-2xl" />
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer