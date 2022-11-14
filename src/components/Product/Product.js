import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import productImg from '../../assets/call-img-1.png'

function Product() {

    const ratingArray = [...Array(5)]
  return (
    <div className='flex flex-col w-64 p-2'>
        <div className='relative w-full'>
            <img src={productImg} alt='product' className='w-full'/>
            <AiOutlineHeart className='absolute top-3 right-3 text-white'/>
        </div>
        <div className='flex justify-between w-full text-xs my-2'>
            <div>
                <p className='my-1 opacity-70'>Desert King</p>
                <p className='my-1 opacity-70'>2345km away</p>
            </div>
            <div>
                <p className='font-bold my-1 opacity-70'>1MBT per night</p>
                <p className='my-1 opacity-70'>available for 2 weeks stay</p>
            </div>
        </div>
        <div className='flex'>
            {ratingArray.map((rating, index) => {
                return(
                <AiFillStar key={index} className="text-secondary"/>
                )
            })}
        </div>
    </div>
  )
}

export default Product