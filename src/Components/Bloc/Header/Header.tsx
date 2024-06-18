import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BsFillDiscFill } from "react-icons/bs";
import Button from "../../reUse/ButtonProps/Button";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <div
      className=" w-full h-[70px] z-10 flex justify-center absolute xmd:fixed xmd:top-0 xmd:shadow-md "
      id="her"
    >
  
      
          <div className="w-[85%] h-full flex justify-between items-center ">
            <div className="w-[30%] flex items-center h-[100%] xmd:w-[50%]">
              <img
                src="https://res.cloudinary.com/dbpcptmco/image/upload/v1718732868/logo1_mhgb0o.png"
                alt="header_image"
                className="h-[80%] object-contain xmd:w-[90%] xmd:[100%]"
              />
            </div>
            <div className="flex gap-[40px] items-center xmd:hidden">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] font-[500] text-[var(--red)] animate-pulse"
                    : "text-[16px] font-[500] text-[var(--white)]"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] font-[500] text-[var(--red)]  animate-pulse"
                    : "text-[16px] font-[500] text-[var(--white)]"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] font-[500] text-[var(--red)] animate-pulse"
                    : "text-[16px] font-[500] text-[var(--white)]"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] font-[500] text-[var(--red)] animate-pulse"
                    : "text-[16px] font-[500] text-[var(--white)]"
                }
              >
                Gallery
              </NavLink>
              <Button
                width="132px"
                text="Contact Us"
                backgroundColor="var(--red)"
                color="white"
                height="45px"
                link="/contact"
                hoverColor=""
                backgroundColorHover=""
                border=""
              />
            </div>
          </div>
          {show ? (
            <div
              className="hidden items-center text-[white] text-4xl md:flex cursor-pointer"
              onClick={Toggle}
            >
              <BsFillDiscFill />
            </div>
          ) : (
            <div
              className="hidden items-center text-[white] text-4xl md:flex cursor-pointer"
              onClick={Toggle}
            >
              <BiMenu />
            </div>
          )}
      {show ? (
        <div className="hidden md:flex h-screen w-44 bg-[white] top-[75px] right-0 fixed flex-col items-center">
          <div className="flex gap-[20px] flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[16px] font-[500] text-[var(--red)]"
                  : "text-[16px] font-[500] text-[#141414]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[16px] font-[500] text-[var(--red)]"
                  : "text-[16px] font-[500] text-[#141414]"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-[16px] font-[500] text-[var(--red)]"
                  : "text-[16px] font-[500] text-[#141414]"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-[16px] font-[500] text-[var(--red)]"
                  : "text-[16px] font-[500] text-[#141414]"
              }
            >
              Gallery
            </NavLink>
            <Button
              width="132px"
              text="Contact Us"
              backgroundColor="var(--red)"
              color="white"
              height="45px"
              link="/contact"
              hoverColor=""
              backgroundColorHover=""
              border=""
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
