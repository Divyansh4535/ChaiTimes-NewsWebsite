import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuFold4Fill } from "react-icons/ri";
import imgCard from "../Img/chaiTimes512.png"

const NavBar = () => {
  let category = [
    { title: "Business", path: "business" },
    { title: "Entertainment", path: "entertainment" },
    { title: "General", path: "general" },
    { title: "Health", path: "health" },
    { title: "Science", path: "science" },
    { title: "Sports", path: "sports" },
    { title: "Technology", path: "technology" },
  ];
  const [showIcon, setShowIcon] = useState(false)
  return (
    <>
      <div className="fixed w-full h-12 z-50 bg-gray-900 text-white">
        <nav className="flex justify-between h-full font-Comfortaa px-4 items-center border-b md:shadow-lg items-center  ">
          <div className=" md:py-0 py-4 flex items-center  gap-1">
            <img src={imgCard} alt="logo" className="size-8  object-cover object-center " />
             <h1 className="text-lg font-black   "> ChaiTimes </h1> 
            </div>
          {/* {   Main navBar */}
            <ul className={`hidden md:flex gap-2 items-center   md:relative  `}>
              {category.map((Elem, index) => {
                return <li key={index}>
                  <Link
                    to={`/${Elem.path}`}
                    className="flex px-4 py-3  text-xs hover:underline transition-all ease-in-out delay-150  hover:text-blue-300 hover:font-bold"
                  >
                    {Elem.title}

                  </Link>
                </li>
              })}
            </ul>
            {/* side NavBar */}
             <ul className={`md:hidden bg-gray-900 absolute top-12 right-5  ease-in-out  
             duration-300 ${ !showIcon ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0" }`}>
              {category.map((Elem, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={`/${Elem.path}`}
                      className="flex px-4 py-3 text-sm hover:underline transition-all ease-in-out delay-150  hover:text-blue-300 hover:font-bold"
                    >
                      {Elem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

          <a href="#" className="menu  none md:hidden " onClick={() => setShowIcon(!showIcon)}>
            <RiMenuFold4Fill className="font-bold w-8 h-5" />
          </a>
        </nav>
      </div>
    </>
  );
}

export default NavBar;