


const ContactMap = () => {
    return (
   <div className="h-[600px] mt-[70px]">
       <div className=' h-[550px] flex'>
        <div  className="w-full h-[550px] absolute">
          <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63432.5637073375!2d3.380540404875773!3d6.453654935200847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cc9b07cf55%3A0xc4ae10b395418b9b!2sLagos%20Island!5e0!3m2!1sen!2sng!4v1719965419723!5m2!1sen!2sng"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        
        </div>

          <div className="bg-[#EAF2FB] relative w-[25%] left-[65%] flex flex-col items-center justify-center xmd:w-[100%] xmd:left-0 xmd:h-fit xmd:mt-[210px] xmd:pt-10">
        <div className="h-[85%] flex flex-col gap-12 xmd:gap-2">
        <h2 className="text-[30px] font-[700] text-[#141414]">
            Opening Hours
           </h2>

           <div className=" flex flex-col gap-[30px] xmd:gap-[13px]">
           <div className=" flex justify-between">
            <h3 className="text-[16px] font-[400] text-[#4f5965]">
                Monday 
            </h3>

            <h3 className="text-[16px] font-[600] text-[#4f5965]">
                8AM - 6AM
            </h3>
           </div>

           <div className=" flex justify-between">
            <h3 className="text-[16px] font-[400] text-[#4f5965]">
                Tuesday 
            </h3>

            <h3 className="text-[16px] font-[600] text-[#4f5965]">
                8AM - 6AM
            </h3>
           </div>

           <div className=" flex justify-between">
            <h3 className="text-[16px] font-[400] text-[#4f5965]">
                Wednesday 
            </h3>

            <h3 className="text-[16px] font-[600] text-[#4f5965]">
                8AM - 6AM
            </h3>
           </div>

           <div className=" flex justify-between">
            <h3 className="text-[16px] font-[400] text-[#4f5965]">
                Thursday 
            </h3>

            <h3 className="text-[16px] font-[600] text-[#4f5965]">
                8AM - 6AM
            </h3>
           </div>

           <div className=" flex justify-between">
            <h3 className="text-[16px] font-[400] text-[#4f5965]">
                Friday 
            </h3>

            <h3 className="text-[16px] font-[600] text-[#4f5965]">
                8AM - 6AM
            </h3>
           </div>

           <div className=" flex justify-between">
            <h3 className="text-[16px] font-[400] text-[#4f5965]">
                Saturday 
            </h3>

            <h3 className="text-[16px] font-[600] text-[#4f5965]">
                8AM - 6AM
            </h3>
           </div>

           <div className="flex justify-between">
            <h3 className="text-[16px] font-[400] text-[#4f5965]">
                Sunday 
            </h3>

            <h3 className="text-[16px] font-[600] text-[#4f5965]">
                Closed
            </h3>
           </div>

           </div>
        </div>
          </div>
      </div>
   </div>
    )
  }

  export default ContactMap