import { Fade } from "react-awesome-reveal";
import Button from "../../../Components/reUse/ButtonProps/Button";

const Form = () => {
  return (
    <div
    className=" flex flex-col gap-4 xmd:items-center xmd:justify-center xmd:w-[90%]"
    >
<Fade  direction="right">
<div
className="flex flex-col gap-[20px]  xmd:w-[93%]"
>   
    <div
    className=" mt-[25px] flex items-center justify-between w-[100%]"
    >
        <div 
className=" w-[50%] flex flex-col gap-[8px] "

        >
          
            <input
                    className=" bg-[white] w-[90%]  mb-4  rounded-[20px] px-3 h-[45px] outline-[var(--red)] text-[16px] font-[400] text-[#808080] mobile:h-[40px] border"
                    required
                    maxLength={50}
                    type="text"
                   placeholder="Full Name"
                  />
        </div>

      <div 
className=" w-[50%] flex flex-col gap-[8px] "

        >
          
          <input
                    className=" bg-[white] w-[90%]  mb-4  rounded-[20px] px-3 h-[45px] outline-[var(--red)] text-[16px] font-[400] text-[#808080] mobile:h-[40px] border"
                    required
                    maxLength={50}
                    type="text"
                   placeholder="Phone Number"
                  />
        </div>
    
    </div>

   <div
    className="flex items-center justify-between w-[100%]"
    >
    
    </div>


 <div 
className=" w-[95%] flex flex-col gap-[8px] "

        >
      
            <textarea
             
              maxLength={400}
              className=" text-[16px] rounded-[20px] px-3 py-[10px]  w-[100%] h-[110px] resize-none outline-[var(--red)] border"
              placeholder="Type your message here"
            ></textarea>
        </div>

</div>
</Fade>

<Fade  direction="right">
<div className="mt-2">
<Button
                width="132px"
                text="Submit"
                backgroundColor="var(--mainColor1)"
                color="white"
                height="45px"
                link="/admin-login"
                hoverColor="red"
                backgroundColorHover=""
                border=""
              />
          </div>
          </Fade>
          
    </div>
  )
}

export default Form
