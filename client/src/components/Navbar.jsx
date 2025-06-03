import { useUser } from "../context/userContext"; 
import { FaUserCircle } from "react-icons/fa"; // for user icon
import { useState } from "react";

export default function Navbar() {
  const { userEmail, logout } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {/* Left navbar ... (unchanged) */}

      {/* Right side */}
      <div className="fixed top-0 right-0 z-50 flex items-center gap-5 bg-white py-4 px-10 shadow-md rounded-l-[20px] h-[84px]">
        {!userEmail ? (
          <>
            <Link to="/login">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                Register
              </button>
            </Link>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-3xl text-green-700 hover:text-purple-700 transition"
            >
              <FaUserCircle />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-56 p-4 z-50">
                <p className="text-sm text-gray-600">Logged in as:</p>
                <p className="font-medium">{userEmail}</p>
                <button
                  onClick={logout}
                  className="mt-3 w-full bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
