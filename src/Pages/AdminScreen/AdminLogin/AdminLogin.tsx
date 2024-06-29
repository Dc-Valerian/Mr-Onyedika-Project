import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import "./AdminLoginStyles.css";


const AdminLogin: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  


  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <div
        className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-right-bottom relative"
        style={{
          backgroundImage:
            "url(https://imgs.search.brave.com/2FkzfC1ZM5bWrN2acSVpfV6z_AIFLqzdU2lMrX1jKEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJ0YWcuY29t/L3dhbGxwYXBlci9t/aWRkbGUvMy9lLzIv/NTU1MzEwLWZhbmN5/LWJhY2tncm91bmQt/aW1hZ2VzLTE5MjB4/MTA4MC1mb3ItcmV0/aW5hLmpwZw)",
        }}
      >
        <h2 className="z-20 text-white absolute top-20 md:top-34 text-[30px] md:text-[35px]">
          Welcome Back Admin
        </h2>

        <div className="z-10 w-full h-full flex flex-col justify-center items-center">
          <div className="bg-white w-[30%] h-[50%] rounded-md shadow-md p-6 flex flex-col items-center justify-between whiteCard">
            <form
              className="w-full flex flex-col items-center "
            >
              <div className=" w-[100%] flex items-center justify-between">
                <h3 className="text-blue-500  text-[25px] capitalize">
                  Input Your Details
                </h3>
                <div
                  onClick={handleGoBack}
                  className="cursor-pointer text-white text-xl flex items-center justify-center rounded-full bg-blue-500 w-10 h-10"
                >
                  <IoArrowBack />
                  <div className="absolute bg-black text-white text-xs px-2 py-1 rounded top-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 pointer-events-none">
                    Go back
                  </div>
                </div>
              </div>

              <div className=" flex items-center mt-[10px] justify-between flex-col w-[100%] h-[230px] ">
                <div className=" h-[60%] flex items-center justify-center flex-col w-[95%]">
                  <input
                    className="w-[95%]  mb-4 border border-gray-300 rounded px-3 h-[45px]"
                    required
                    maxLength={50}
                    type="email"
                    placeholder="Email"
                  />

                  <div className="flex items-center  w-[95%] border border-gray-300  h-[45px] rounded ">
                    <input  
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-[100%] md:w-72 h-[100%] rounded px-3"
                    />
                    <div
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer flex items-center justify-center w-[10%] h-[100%] text-[25px]"
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                  </div>
                </div>

                <button
                  className="w-[95%] h-12 font-semibold text-white bg-blue-500 rounded cursor-pointer transition-colors duration-500 hover:bg-blue-600"
                  type="submit"
                >
                <a href="/upload-page">
                    Login
                </a>
                </button>

              </div>
            </form>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[black] opacity-50 z-0"></div>
      </div>
    </div>
  );
};

export default AdminLogin;
