import React, { useEffect, useState } from "react";
// react hooks
import { NavLink, useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { RiQuillPenLine } from "react-icons/ri";

const Navbar = () => {
  const [userMenu, setUserMenu] = useState(false);

  const navigate = useNavigate();

  const menuToggle = () => {
    setUserMenu(!userMenu);
  };

  // Retrieve the user object from localStorage
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const isUserSignedIn = !!localStorage.getItem("token");

  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    try {
      // Set the loading state to true
      setSigningOut(true);

      // Perform the signout action
      // For example, make an API call to revoke the authentication token
      // ...

      // Clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error during signout:", error);
    } finally {
      // Set the loading state back to false
      setSigningOut(false);
    }
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
          {/* <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-blue-500 hover:bg-violet-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
                : "text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
            }
          >
            Category
          </NavLink> */}
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

          {isUserSignedIn ? (
            <>
              <img
                className="h-8 w-8 rounded-full border border-gray-400"
                src={user.image}
                alt={user.username}
              />

              <p className="font-medium capitalize text-[13px]">
                {user.username}
              </p>

              <CiMenuKebab
                className={`${
                  userMenu ? `text-blue-700 ` : ``
                }hover:text-blue-500 cursor-pointer`}
                onClick={menuToggle}
              />
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-500 rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
                  : "text-gray-500 rounded-md px-3 py-1 text-sm font-medium cursor-pointer"
              }
            >
              Login
            </NavLink>
          )}
          {/* profile menu */}
          {userMenu && (
            <div className="absolute top-12 right-36 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 font-medium">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                {/* <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  id="menu-item-0"
                >
                  About user
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  id="menu-item-2"
                >
                  License
                </a> */}
                <form>
                  <button
                    type="button"
                    className={`text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-blue-600 hover:text-white ${
                      signingOut ? "cursor-not-allowed" : ""
                    }`}
                    role="menuitem"
                    id="menu-item-3"
                    onClick={handleSignOut}
                    disabled={signingOut}
                  >
                    {signingOut ? "Signing Out..." : "Sign out"}
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
