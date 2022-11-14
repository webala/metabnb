import logo from '../../assets/footer-logo.png'
import {FaFacebookF, FaTwitter, FaInstagram, FaRegCopyright} from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-black text-white flex flex-col-reverse p-2 md:flex-row md:justify-between md:py-10 sm:px-24 xl:px-44 md:items-start'>
        <div>
            <img src={logo} alt="logo" className='w-44 my-5 md:my-0 md:mb-5'/>
            <div className='flex my-7'>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
            </div>
            <div className='flex items-center'>
                <FaRegCopyright />
                <p className='ml-2'>2022 Metabnb</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between md:w-2/3'>
            <div className='flex flex-col mb-5 border-b-2 md:border-none'>
                <h1 className='font-bold text-xl'>Commuity</h1>
                <a>NFT</a>
                <a>Tokens</a>
                <a>Landlords</a>
                <a>Discord</a>
            </div>
            <div className='flex flex-col mb-5 border-b-2 md:border-none'>
                <h1 className='font-bold text-xl'>Places</h1>
                <a>Castle</a>
                <a>Farms</a>
                <a>Beach</a>
                <a>Learn More</a>
            </div>
            <div className='flex flex-col mb-5 border-b-2 md:border-none'>
                <h1 className='font-bold text-xl'>About us</h1>
                <a>Road map</a>
                <a>Creators</a>
                <a>Careers</a>
                <a>Contact us</a>
            </div>
        </div>
    </div>
  )
}

export default Footer