import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    let category = [
      { title: "Business", path: "business" },
      { title: "Entertainment", path: "entertainment" },
      { title: "General", path: "general" },
      { title: "Health", path: "health" },
      { title: "Science", path: "science" },
      { title: "Sports", path: "sports" },
      { title: "Technology", path: "technology" },
    ];
    return (
      <>
        {/* <!-- component --> */}
        <div className="fixed w-full  z-50 bg-gray-900 text-white">
          <nav className="flex  font-Comfortaa px-4 border-b md:shadow-lg items-center  ">
            <div className="text-lg font-bold md:py-0 py-4">DK</div>
            <ul className="md:px-2 ml-auto md:flex md:space-x-2 md:relative top-full left-0 right-0">
              {/* <li>
                <Link
                  to="/"
                  className="flex md:inline-flex p-4 items-center  hover:text-gray-300 "
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex md:inline-flex p-4 items-center hover:text-gray-300"
                >
                  <span>Products</span>
                </Link>
              </li> */}
              <li className="parent">
                {/* <Link
                  className="flex justify-between md:inline-flex p-4 items-center  hover:text-gray-300 space-x-2"
                >
                  <span>Category</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current pt-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                </Link> */}
                <ul className=" flex gap-3  top-full right-0   ">
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
              </li>
              {/* <li>
                <Link
                  to="/"
                  className="flex md:inline-flex p-4 items-center hover:text-gray-300"
                >
                  <span>About us</span>
                </Link>
              </li> */}
            </ul>
            <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </div>
          </nav>
        </div>
      </>
    );
  }


export default NavBar;
