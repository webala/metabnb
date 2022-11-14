import './Header.css'
import logoImg from '../../assets/logo-img.png'
import logoTxt from '../../assets/logo-text.png'
import {GrMenu} from 'react-icons/gr'

function Header() {
  return (
    <header className='flex justify-between px-2 items-center py-10 sm:px-10 xl:px-56'>
        <div className="logo flex items-center h-4 sm:h-6 md:h-8">
            <img src={logoImg} alt="logo-img" className='h-full'/>
            <img src={logoTxt} alt="logo-text" className='h-full' />
        </div>
        <div className="navigation hidden md:flex items-center">
            <ul className='flex items-center justify-evenly text-sm'>
                <li className='mx-1 md:mx-3 xl:mx-5 opacity-70'>Home</li>
                <li className='mx-1 md:mx-3 xl:mx-5 opacity-70'>Place to stay</li>
                <li className='mx-1 md:mx-3 xl:mx-5 opacity-70'>NFTs</li>
                <li className='mx-1 md:mx-3 xl:mx-5 opacity-70'>Community</li>
            </ul>
        </div>
        <div className="buttons flex items-center">
            <button className='bg-secondary p-1 rounded-md border-2 border-secondary text-white text-sm sm:text-base mr-1'>Connect Wallet</button>
            <GrMenu className='ml-1 md:hidden'/>
        </div>
    </header>
  )
}

export default Header
