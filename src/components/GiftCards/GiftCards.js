import giftCard1 from '../../assets/gift-card-1.png'
import giftCard2 from '../../assets/gift-card-2.png'
import giftCard3 from '../../assets/gift-card-3.png'

function GiftCards() {
  return (
    <section className='mt-20 px-2 flex flex-col md:flex-row md:justify-center items-center bg-secondary text-white py-10'>
        <div className='md:w-1/2 md:mr-20 px-10 flex flex-col md:justify-between items-start'>
            <h1 className='text-xl my-5 md:text-2xl'>Metabnb NFTs</h1>
            <p className='my-5'>Discover out NFT gift cards collection. Loyal customres get amazing gift cards which are traded as NFTs. Thee NFTs gives our customer access to loads of our exclusive services</p>
            <button className='my-5 bg-white text-secondary p-2 rounded-md'>Learn more</button>
        </div>
        <div className='flex flex-col items-center justify-center relative md:top-32 mt-10 md:mt-0'>
            <img src={giftCard1} alt='gift-card' className='w-56 md:w-80'/>
            <img src={giftCard2} alt='gift-card' className='relative bottom-32 md:bottom-44 right-20 w-56 md:w-80'/>
            <img src={giftCard3} alt='gift-card' className='relative bottom-64 left-10 w-56 md:w-80 md:bottom-80'/>
        </div>
    </section>
  )
}

export default GiftCards