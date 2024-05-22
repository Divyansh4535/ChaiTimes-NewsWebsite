import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuFold4Fill } from "react-icons/ri";

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
  const [showicon, setshowicon] = useState(false)
  return (
    <>

      <div className="fixed w-full  z-50 bg-gray-900 text-white">
        <nav className="flex justify-between font-Comfortaa px-4 border-b md:shadow-lg items-center  ">
          <div className="text-lg font-bold md:py-0 py-4">DK</div>
          <ul className={` showicon ?  "flex flex-cols" : "hidden gap-3 md:px-2 ml-auto md:flex md:space-x-2 md:relative top-full left-0 right-0 "`}>
            {category.map((Elem, index) => {
              return (
                <li key={index}>
                  <Link
                    to={`/${Elem.path}`}
                    className="flex px-4 py-3  hover:text-gray-300 hover:font-bold"
                  >
                    {Elem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href="#" className="menu  none md:hidden lg:hidden" onClick={()=>setshowicon(!showicon)}>
            <RiMenuFold4Fill className="font-bold w-8 h-5" />
          </a>
        </nav>
      </div>
    </>
  );
}


export default NavBar;
