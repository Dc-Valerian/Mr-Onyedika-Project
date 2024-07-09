import { Fade } from "react-awesome-reveal";
import {AiFillPhone} from "react-icons/ai"
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import Form from "./Form";

const ContactForm = () => {
  return (
    <div className=' h-[400px] mb-[50px] flex justify-evenly xmd:flex-col xmd:h-fit xmd:gap-9  xmd:justify-center xmd:items-center overflow-hidden'>
      <div className=' w-[40%] xmd:w-[90%] flex flex-col gap-10 '>

      <Fade  direction="right">
        <div className=" w-[70%] flex justify-between xmd:w-[90%] ">
           
            <div className=" w-[20%] flex justify-center xmd:justify-start">
               <div className="h-[55px] bg-[#EAF2FB] w-[55px] flex items-center justify-center rounded-[50%] text-[18px] text-[var(--red)] ">
               <FaLocationDot/>
               </div>
            </div>

            <div className=" w-[75%] flex flex-col gap-3">
                <h2 className="text-[18px] font-[600] text-[#141414]">Address</h2>
                <p className="text-[15px] text-[#808080] font-[400] leading-[20px]">
              Lagos Island, Nigeria
                </p>
            </div>
        </div>
        </Fade>

        <Fade  direction="left">
        <div className="w-[70%] flex justify-between xmd:w-[90%] ">
           
            <div className=" w-[20%] flex justify-center xmd:justify-start">
               <div className="h-[55px] bg-[#EAF2FB] w-[55px] flex items-center justify-center rounded-[50%] text-[18px] text-[var(--red)]">
               <MdMarkEmailRead/>
               </div>
            </div>

            <div className=" w-[75%] flex flex-col gap-3">
                <h2 className="text-[18px] font-[600] text-[#141414]">Have any Questions</h2>
                <p className="text-[15px] text-[#808080] font-[400] leading-[20px]">
                mail@babystreet.com
                </p>
            </div>
        </div>
        </Fade>
        
        <Fade  direction="right">
        <div className="w-[70%] flex justify-between xmd:w-[90%]">
           
            <div className="w-[20%] flex justify-center xmd:justify-start">
               <div className="h-[55px] bg-[#EAF2FB] w-[55px] flex items-center justify-center rounded-[50%] text-[18px] text-[var(--red)]">
               <AiFillPhone/>
               </div>
            </div>

            <div className=" w-[75%] flex flex-col gap-3">
                <h2 className="text-[18px] font-[600] text-[#141414]">Phone Number</h2>
                <p className="text-[15px] text-[#808080] font-[400] leading-[20px]">
                073 506 0764
                </p>
            </div>
        </div>
        </Fade>

      </div>

      <div className=' w-[40%] xmd:w-[100%]  xmd:flex xmd:justify-center xmd:items-center'>
       <Form/>
      </div>
    </div>
  )
}

export default ContactForm
