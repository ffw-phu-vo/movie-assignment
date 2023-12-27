"use client";
import React, { useState } from "react";
import classnames from "classnames";
import Link from "next/link";

const menus = [
  {
    name: "Popular",
    route: "/popular",
  },
  {
    name: "Upcoming",
    route: "/upcoming",
  },
];

const MainMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="main-menu grow">
      <button
        className="float-right block lg:hidden lg:float-none"
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Open main menu"
      >
        <svg
          className={classnames("w-8 h-8", openMenu && "hidden")}
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
        <svg
          className={classnames("w-8 h-8", !openMenu && "hidden")}
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <nav
        className={classnames(
          "absolute left-0 right-0 bg-white px-8 py-6 md:px-16 mt-14",
          "lg:static lg:bg-transparent lg:px-0 lg:py-0 lg:mt-0 lg:text-right",
          !openMenu && "hidden lg:block"
        )}
      >
        {menus.map((menu, index) => {
          return (
            <Link
              key={index}
              href={menu.route}
              className="block text-lg font-bold lg:inline-block lg:text-white lg:ml-4"
            >
              {menu.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MainMenu;
