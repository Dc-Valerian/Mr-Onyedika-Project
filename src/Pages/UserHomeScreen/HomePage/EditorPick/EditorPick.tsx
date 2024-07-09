import editor1 from '../../../../assets/c1.jpg'
import editor2 from '../../../../assets/i1.jpg'
import editor3 from '../../../../assets/j1.jpg'
import editor4 from '../../../../assets/n1.jpg'
import editorHover1 from '../../../../assets/c2.jpg'
import editorHover2 from '../../../../assets/i2.jpg'
import editorHover3 from '../../../../assets/j2.jpg'
import editorHover4 from '../../../../assets/n2.jpg'
import { Link } from 'react-router-dom'
import { formatMoney } from './MyFunctions'

const editorsCollections = [
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: 'Rose White Gold Leather',
    watchPrice: 172800
  },
  {
    watchImg: editor2,
    watchImgHover: editorHover2,
    watchTitle: 'Rose White Black Leather',
    watchPrice: 196420
  },
  {
    watchImg: editor3,
    watchImgHover: editorHover3,
    watchTitle: 'Rose White Metal Classic',
    watchPrice: 183400
  },
  {
    watchImg: editor4,
    watchImgHover: editorHover4,
    watchTitle: 'Rose White Black Leather',
    watchPrice: 145900
  }
]

const EditorPick = () => {
  return (
    <div className=' w-full flex justify-center items-center mb-24 '>
      <div className=' w-[85%] flex flex-col items-center'>
   
        <section className=' w-full flex m-16 flex-wrap justify-center '>
          {editorsCollections?.map((props, i) => (
            <div
              key={i}
              className=' flex text-center flex-col items-center m-5 flex-wrap mobile:w-full'
            >
              {/* <div className=' w-60 mb-3 h-[250px]'>
                <img
                  className=' w-full h-[250px] object-cover '
                  src={props.watchImg}
                  alt=''
                />
              </div> */}
              <Link to='/shop'>
                <div className=' w-60 mb-3 h-[250px]  relative group'>
                  <img
                    className='w-full h-[250px] object-cover transition-transform transform group-hover:scale-110'
                    src={props.watchImg}
                    alt=''
                  />

                  <img
                    className='w-full h-[250px] object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                    src={props.watchImgHover}
                    alt=''
                  />
                </div>
              </Link>
              <p className=' capitalize text-base font-bold hover:text-[var(--mainColor1)] hover:font-extrabold'>
                {props.watchTitle}
              </p>
              <p className=' text-gray-400'>₦{formatMoney(props.watchPrice)}</p>
            </div>
          ))}
        </section>

        {/* <section>
          <div>Circle</div>
        </section> */}
      </div>
    </div>
  )
}

export default EditorPick
