import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BsFillDiscFill } from "react-icons/bs";
import Button from "../../reUse/ButtonProps/Button";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { useAppSelector } from "../../Global/Store";
import Cart from "../../../Pages/Cart/Cart";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const readCartQuantity = useAppSelector((state) => state.totalQuantity);

 
  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const Toggle = () => {
    setShow(!show);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 w-full h-[70px] flex justify-center  xmd:fixed xmd:top-0 xmd:shadow-md ${
        isScrolled ? "bg-[var(--secondaryColor1)]" : "bg-transparent"
      }`}
      id="her"
    >
  
      
          <div className="w-[85%] h-full flex justify-between items-center ">
            <div className="w-[20%]  flex items-center h-[100%] xmd:w-[50%]">
              <img
                src="https://res.cloudinary.com/dbpcptmco/image/upload/v1718732868/logo1_mhgb0o.png"
                alt="header_image"
                className="h-[80%] object-contain xmd:w-[90%] xmd:[100%]"
              />
            </div>


            <div className="flex gap-[40px] items-center justify-center  xmd:hidden ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] font-[500] text-[var(--mainColor1)] animate-pulse"
                    : "text-[16px] font-[500] text-[var(--white)]"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] font-[500] text-[var(--mainColor1)]  animate-pulse"
                    : "text-[16px] font-[500] text-[var(--white)]"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] font-[500] text-[var(--mainColor1)] animate-pulse"
                    : "text-[16px] font-[500] text-[var(--white)]"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] font-[500] text-[var(--mainColor1)] animate-pulse"
                    : "text-[16px] font-[500] text-[var(--white)]"
                }
              >
                Gallery
              </NavLink>

          
            </div>

            <div className="flex gap-10">
            <div className={`icons flex w-[9%] items-center justify-end `}>
            <div
              className="
              hover:cursor-pointer transition duration-300 ease-in-out hover:scale-[1.09]
              "
              
            >
              <RiShoppingCartLine className="text-[28px]  absolute text-[white]" />
              <div className=" bg-[var(--red)] w-[20px] h-[20px] rounded-full flex items-center justify-center text-[14px] relative left-[18px] bottom-[8px] text-[white]">
               3
              </div>
            </div>
          </div>

          <div
            onClick={onOpenHandler}
            className="text-[33px] cursor-pointer lg:hidden mt-[12px] md:text-[30px]"
          >
            <HiMenuAlt3 />
          </div>

          <Cart open={isDialogOpen} setOpen={setIsDialogOpen} />

              <Button
                width="132px"
                text="Admin Login"
                backgroundColor="var(--mainColor1)"
                color="white"
                height="45px"
                link="/admin-login"
                hoverColor="red"
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
