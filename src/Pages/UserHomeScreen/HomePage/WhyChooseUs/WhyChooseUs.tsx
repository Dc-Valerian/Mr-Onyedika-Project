import { GrSend } from 'react-icons/gr'
import { FaHistory } from 'react-icons/fa'
import { FaRegCreditCard } from 'react-icons/fa6'
import { PiUsersBold } from 'react-icons/pi'

const chooseArray = [
  {
    icon: <GrSend />,
    title: 'Free Shipping',
    content: 'Order over $99'
  },
  {
    icon: <FaHistory />,
    title: '90 Days Return',
    content: 'If goods have problem'
  },
  {
    icon: <FaRegCreditCard />,
    title: 'Secured Payment',
    content: '100% secured payment'
  },
  {
    icon: <PiUsersBold />,
    title: '24h Support',
    content: 'Dedicated support'
  }
]

const WhyChooseUs = () => {
  return (
    <div className=' w-full flex justify-center items-center mb-28'>
      <div className=' w-[95%] bg-[var(--mainColor1)] min-h-[400px] flex items-center justify-center'>
        <section className='  flex flex-col items-center py-8'>
          <div className=' w-[700px] text-center mb-8 tablet:w-full flex flex-col items-center '>
            <h2
              style={{
                fontFamily: 'Oswald'
              }}
              className=' uppercase text-4xl tracking-[15px] text-white mb-9 tablet:text-3xl mobile:text-xl tablet:w-[95%]'
            >
              Why Choose Us
            </h2>
            <p className=' text-sm text-gray-300 font-medium tablet:w-[95%]'>
              From sleek minimalist designs to bold,statement pieces our diverse
              collections marries classic elegance with modern innovation
              ensuring unparalleled quality and durability which caters to every
              taste and occasion,empowering you to express your individuality
              with confidence
            </p>
          </div>

          <main className=' flex flex-wrap justify-center'>
            {chooseArray?.map((props, i) => {
              return (
                <div
                  key={i}
                  className=' flex items-center m-7 mobile:m-4  w-56 tablet:m-5'
                >
                  <div className=' text-white text-3xl mr-4'>{props?.icon}</div>
                  <div>
                    <p className=' font-semibold text-white text-base'>
                      {props?.title}
                    </p>
                    <div className=' text-sm text-gray-300 -mt-[2px]'>
                      {props?.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </main>
        </section>
      </div>
    </div>
  )
}

export default WhyChooseUs
