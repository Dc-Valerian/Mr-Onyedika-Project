import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Button from "../../../../Components/reUse/ButtonProps/Button";

const Hero = () => {
  return (
    <div id="home" className="relative">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
        data-swiper-autoplay="9000"
      >
        <SwiperSlide>
          <div className="mt-[70px] w-full bg-background flex justify-center overflow-hidden bg-no-repeat bg-cover h-[700px]">
            <div className="w-full pb-56 bg-[black] bg-opacity-50 flex flex-col  justify-center items-center  xmd:justify-center xmd:flex xmd:items-center">
              <div className=" flex w-[60%] justify-center items-center  flex-col mt-80 text-white xmd:mt-40 gap-[15px] xmd:gap-[10px]">
                <Fade direction="down">
                  <p className="text-[var(--red)] text-[15px] sm:text-sm w-[350px] font-[600] uppercase tracking-[1px] text-left">
                    Professional Cleaning Services
                  </p>
                </Fade>
                <div className="w-[70%] xmd:w-full text-5xl font-bold xmd:text-4xl  flex items-center text-center leading-[70px] xmd:leading-[50px]">
                  <Fade duration={2000}>
                    Experience top-notch cleaning services for your home and
                    office.
                  </Fade>
                </div>

                <div className="xmd:w-full xmd:flex xmd:items-center w-fit">
                  <Fade direction="up">
                    <Button
                      width="132px"
                      text="Get Started"
                      backgroundColor=""
                      color="white"
                      height="45px"
                      border="border border-white"
                      link="/contact"
                      hoverColor=""
                      backgroundColorHover=""
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mt-[70px] w-full bg-background2 flex justify-center overflow-hidden bg-no-repeat bg-cover h-[700px] xmd:bg-center">
            <div className="w-full pb-56 bg-[black] bg-opacity-50 flex flex-col  justify-center items-center  xmd:justify-center xmd:flex xmd:items-center">
              <div className=" flex w-[60%] justify-center items-center  flex-col mt-80 text-white xmd:mt-40 gap-[15px] xmd:gap-[10px]">
                <Fade direction="down">
                  <p className="text-[var(--red)] text-[15px] sm:text-sm w-[350px] font-[600] uppercase tracking-[1px] text-left">
                    Professional Cleaning Services
                  </p>
                </Fade>
                <div className="w-[70%] xmd:w-full text-5xl font-bold xmd:text-4xl  flex items-center text-center leading-[70px] xmd:leading-[50px]">
                  <Fade duration={2000}>
                    Experience top-notch cleaning services for your home and
                    office.
                  </Fade>
                </div>

                <div className="xmd:w-full xmd:flex xmd:items-center w-fit">
                  <Fade direction="up">
                    <Button
                      width="132px"
                      text="Get Started"
                      backgroundColor=""
                      color="white"
                      height="45px"
                      border="border border-white"
                      link="/contact"
                      hoverColor=""
                      backgroundColorHover=""
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" mt-[70px] w-full bg-background3 flex justify-center overflow-hidden bg-no-repeat bg-cover h-[700px] xmd:bg-center">
            <div className="w-full pb-56 bg-[black] bg-opacity-50 flex flex-col  justify-center items-center  xmd:justify-center xmd:flex xmd:items-center">
              <div className=" flex w-[60%] justify-center items-center  flex-col mt-80 text-white xmd:mt-40 gap-[15px] xmd:gap-[10px]">
                <Fade direction="down">
                  <p className="text-[var(--red)] text-[15px] sm:text-sm w-[350px] font-[600] uppercase tracking-[1px] text-left">
                    Professional Cleaning Services
                  </p>
                </Fade>
                <div className="w-[70%] xmd:w-full text-5xl font-bold xmd:text-4xl  flex items-center text-center leading-[70px] xmd:leading-[50px]">
                  <Fade duration={2000}>
                    Experience top-notch cleaning services for your home and
                    office.
                  </Fade>
                </div>

                <div className="xmd:w-full xmd:flex xmd:items-center w-fit">
                  <Fade direction="up">
                    <Button
                      width="132px"
                      text="Get Started"
                      backgroundColor=""
                      color="white"
                      height="45px"
                      border="border border-white"
                      link="/contact"
                      hoverColor=""
                      backgroundColorHover=""
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" mt-[70px] w-full bg-background4 flex justify-center overflow-hidden bg-no-repeat bg-cover h-[700px] xmd:bg-cover">
            <div className="w-full pb-56 bg-[black] bg-opacity-50 flex flex-col  justify-center items-center  xmd:justify-center xmd:flex xmd:items-center">
              <div className=" flex w-[60%] justify-center items-center  flex-col mt-80 text-white xmd:mt-40 gap-[15px] xmd:gap-[10px]">
                <Fade direction="down">
                  <p className="text-[var(--red)] text-[15px] sm:text-sm w-[350px] font-[600] uppercase tracking-[1px] text-left">
                    Bright Future.
                  </p>
                </Fade>
                <div className="w-[70%] xmd:w-full text-5xl font-bold xmd:text-4xl  flex items-center justify-center text-center leading-[70px] xmd:leading-[50px]">
                  <Fade duration={2000}>Like a SuperStar</Fade>
                </div>

                <div className="xmd:w-full xmd:flex xmd:items-center w-fit">
                  <Fade direction="up">
                    <Button
                      width="132px"
                      text="Get Started"
                      backgroundColor=""
                      color="white"
                      height="45px"
                      border="border border-white"
                      link="/contact"
                      hoverColor=""
                      backgroundColorHover=""
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
