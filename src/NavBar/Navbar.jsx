import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = ({ children }) => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser().then().catch();
  };
  return (
    <div className=" shadow">
      <div className="navbar bg-base-100 lg:max-w-[1200px] mx-auto">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className=" ">
            <img
              className="w-[75px]"
              src="https://i.ibb.co/WHfZCB5/vecteezy-vintage-grilled-barbecue-logo-retro-bbq-vector-fire-grill-6735686-Converted.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "bg-red-500 text-white" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/allfood"}
                  className={({ isActive }) =>
                    isActive ? "bg-red-500 text-white" : ""
                  }
                >
                  All Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blog"}
                  className={({ isActive }) =>
                    isActive ? "bg-red-500 text-white" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive ? "bg-red-500 text-white" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/register"}
                  className={({ isActive }) =>
                    isActive ? "bg-red-500 text-white" : ""
                  }
                >
                  Register
                </NavLink>
              </li> */}
            </ul>
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/myitem"}>My added food items</Link>
                </li>
                <li>
                  <Link to={"/additem"}>Add a food item</Link>
                </li>
                <li>
                  <Link to={"/orderedfood"}>My ordered food items</Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          {user ? (
            <Link onClick={handleLogOut}>
              <button className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-500 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                Logout
              </button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-500 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
