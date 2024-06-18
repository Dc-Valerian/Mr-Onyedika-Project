

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { BsFillArrowUpCircleFill } from 'react-icons/bs';

// const BacktoTop: React.FC = () => {
//   const [show, setShow] = useState(false);

//   const showBackToTop = () => {
//     if (window.scrollY >= 80) {
//       setShow(true);
//     } else {
//       setShow(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', showBackToTop);
//     return () => {
//       window.removeEventListener('scroll', showBackToTop);
//     };
//   }, []);

//   return (
//     <div className={`${show ? 'block' : 'hidden'} fixed bottom-8 right-4 md:right-12`}>
//       <Link to="hero" smooth={true} duration={5000} offset={-7000}>
//         <div
//           className="
//             cursor-pointer w-12 h-12 flex justify-center items-center
//             bg-white bg-opacity-25 shadow-lg backdrop-blur-sm border border-white border-opacity-18
//             animate-bounce rounded-xl text-black text-3xl
//           "
//         >
//           <BsFillArrowUpCircleFill />
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default BacktoTop;


const BacktoTop = () => {
  return (
    <div>
      
    </div>
  )
}

export default BacktoTop
