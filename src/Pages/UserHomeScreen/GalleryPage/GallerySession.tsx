// import { Fade } from "react-awesome-reveal";

const GallerySession = () => {
  return (
    <div className="mt-[40px] h-fit flex items-center justify-center py-[60px] xmd:py-[10px] overflow-hidden">
      <div className="w-[95%] flex items-center justify-center xmd:flex-col xmd:w-full shadow-2xl py-10 xmd:py-[10px]">
      {/* <Fade direction="down"> */}
        
      <div className=" w-[95%] flex flex-wrap gap-10 items-center xmd:flex xmd:items-center xmd:justify-center xmd:gap-2 ">
      <div className="w-[30%] h-[300px] flex items-center justify-center text-center flex-col hover:cursor-pointer xmd:w-[90%] xmd:py-[20px]">
            <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1717680856/Untitled-1_f6xyj2.jpg" alt="" className="rounded-[10px] h-full w-full object-cover"/>
       
        </div>

        <div className="w-[30%] h-[300px] flex items-center justify-center text-center flex-col hover:cursor-pointer xmd:w-[90%] xmd:py-[20px]">
            <video src="https://res.cloudinary.com/dbpcptmco/video/upload/v1717681029/WhatsApp_Video_2024-06-03_at_11.53.36_034a2826_u3mhsi.mp4" alt="" autoPlay controls muted className="rounded-[10px] h-full w-full object-cover"/>
         
        </div>


        <div className="w-[30%] h-[300px] flex items-center justify-center text-center flex-col hover:cursor-pointer xmd:w-[90%] xmd:py-[20px]">
    
            <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1717682218/Untitled-3_k5xqsi.jpg" alt="" className="rounded-[10px] h-full w-full object-cover"/>
     
        </div>

        <div className="w-[30%] h-[300px] flex items-center justify-center text-center flex-col hover:cursor-pointer xmd:w-[90%] xmd:py-[20px]">
            <video src="https://res.cloudinary.com/dbpcptmco/video/upload/v1717681034/WhatsApp_Video_2024-06-03_at_11.53.59_d1fe3e90_xcgnuc.mp4" alt="" autoPlay controls muted className="rounded-[10px] h-full w-full object-cover"/>
         
        </div>

        <div className="w-[30%]  h-[300px] flex items-center justify-center text-center flex-col hover:cursor-pointer xmd:w-[90%] xmd:py-[20px]">
            <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1717166532/2150552297_gduym7.jpg" alt="" className="rounded-[10px] h-[100%] w-full object-cover"/>
        </div>

        <div className="w-[30%]  h-[300px] flex items-center justify-center text-center flex-col hover:cursor-pointer xmd:w-[90%] xmd:py-[20px]">
            <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1717770460/WhatsApp_Image_2024-06-03_at_11.51.42_5bc2f46e_hxtm3d.jpg" alt="" className="rounded-[10px] h-[100%] w-full object-cover"/>
        </div>

        <div className="w-[30%]  h-[300px] flex items-center justify-center text-center flex-col hover:cursor-pointer xmd:w-[90%] xmd:py-[20px]">
            <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1718114203/WhatsApp_Image_2024-06-11_at_09.55.17_0fc18f83_xtzyio.jpg" alt="" className="rounded-[10px] h-[100%] w-full object-cover"/>
        </div>

  
        <div className="w-[30%]  h-[300px] flex items-center justify-center text-center flex-col hover:cursor-pointer xmd:w-[90%] xmd:py-[20px]">
          <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1717709044/Untitled-4_mvhxbe.jpg" alt="" className="rounded-[10px] h-[100%] w-[100%] object-cover"/>
        </div>
      </div>
          {/* </Fade> */}
      </div>
    </div>
  )
}

export default GallerySession;
