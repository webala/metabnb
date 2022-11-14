import "./Sponsors.css"
import mbtoken from '../../assets/mbtoken.png'
import metamask from '../../assets/metamask.png'
import opensea from '../../assets/opensea.png'


function Sponsors() {
  return (
    <div className="w-full bg-secondary flex flex-col items-center sm:flex-row sm:justify-between h-fit sm:h-14 py-3 px-2 my-32 sm:px-10 xl:px-56">
        <img className="w-44 sm:h-full my-2 sm:my-0" src={mbtoken} alt="mbtoken" />
        <img className="w-44 sm:h-full my-2 sm:my-0" src={metamask} alt="metamask" />
        <img className="w-44 sm:h-full my-2 sm:my-0" src={opensea} alt="opensea" />
    </div>
  )
}

export default Sponsors