import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [ifLoggedIn, setIfLoggedIn] = useState(
    !!localStorage.getItem("userId"),
  );

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true },
      );
    } catch {
      // proceed with local cleanup regardless
    }
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setIfLoggedIn(false);
    navigate("/home");
  };

  return (
    <>
      <nav className="flex justify-center items-center w-full">
        <div className="h-[4rem] my-[1rem] w-[96%] flex rounded-md items-center justify-around text-black shadow-[0_0_20px_rgba(91,134,229,0.15)]">
          <div className="w-[97%] flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-[2.8rem] pr-[0.5rem]" />
              <h1 className="text-2xl font-bold text-[#5B86E5]">DevConnect</h1>
            </Link>
            <ul className="flex gap-[2.4rem] text-sm font-semibold">
              <li className="hover:text-[#5B86E5]">
                <Link to="/home">Home</Link>
              </li>
              <li className="hover:text-[#5B86E5]">
                <Link to="/become-a-developer">Become a Developer</Link>
              </li>
            </ul>

            <div className="flex items-center bg-white border border-[#9d9d9d] rounded-md pl-[0.5rem] py-[0.4rem] max-w-md transition">
              <Search className="text-[#9d9d9d]" size={20} />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full ml-3 outline-none bg-transparent"
              />
            </div>

            <div>
              {ifLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-[#5B86E5] cursor-pointer font-semibold"
                >
                  Logout
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate("/login")}
                    className="text-[#5B86E5] cursor-pointer font-semibold"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="rounded-md font-semibold cursor-pointer text-white h-[2.4rem] w-[6rem] bg-[#5B86E5]"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
