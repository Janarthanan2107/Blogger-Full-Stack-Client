import React, { useState } from "react";
// react hooks
import { NavLink, useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { RiQuillPenLine } from "react-icons/ri";

const Navbar = () => {
  const [userMenu, setUserMenu] = useState(false);

  const menuToggle = () => {
    setUserMenu(!userMenu);
  };

  return (
    <div className="navbar-container w-auto h-18 p-4">
      <div className="flex justify-around items-center gap-4 border-b border-gray pb-4">
        {/* logo */}
        <div className="logo-container flex">
          <RiQuillPenLine className="text-yellow-500 text-[30px]" />
          <p className="text-yellow-500 text-lg font-medium">Blogger.</p>
        </div>
        {/* menu */}
        <div className="flex justify-between items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-blue-500 hover:bg-violet-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
                : "text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
            }
          >
            My feeds
          </NavLink>
          <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-blue-500 hover:bg-violet-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
                : "text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
            }
          >
            Category
          </NavLink>
          <NavLink
            to="/recent"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-blue-500 hover:bg-violet-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
                : "text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
            }
          >
            Recent Posts
          </NavLink>
          <NavLink
            to="/commentator"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-blue-500 hover:bg-violet-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
                : "text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
            }
          >
            Commentators
          </NavLink>
        </div>
        {/* profile */}
        <div className="flex justify-between items-center gap-4">
          {/* button write a blog*/}
          <NavLink
            to="/createBlog"
            className="bg-blue-500 text-white p-2 rounded-[25px] flex items-center gap-1"
          >
            <RiQuillPenLine className="text-yellow-500 text-lg" />
            Write
          </NavLink>

          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />

          <CiMenuKebab
            className={`${
              userMenu ? `text-blue-700 ` : ``
            }hover:text-blue-500 cursor-pointer`}
            onClick={menuToggle}
          />

          {/* profile menu */}
          {userMenu && (
            <div className="absolute top-12 right-36 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 font-medium">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  About user
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-blue-600 hover:text-white"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
