import"./Call.css"
import houseOne from '../../assets/call-img-1.png'
import houseTwo from '../../assets/call-img-2.png'
import houseThree from '../../assets/call-img-3.png'
import houseFour from '../../assets/call-img-4.png'

function Call() {
  return (
    <section className="px-2 my-10 md:flex md:items-center sm:px-10 xl:px-56 w-full md:justify-between ">
        <div className="flex flex-col items-start md:px-10 mb-10 md:w-1/2"> 
            <h1 className="text-2xl mb-5">
                Rent a <span className="text-secondary font-bold">Place</span> away from <span className="text-secondary font-bold">Home</span> in the <span className="text-secondary font-bold">Metaverse</span>
            </h1>
            <p>we provide you access to luxuy and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zond</p>
            <form className="h-8 my-5 w-full">
                <input type="text" placeholder="Search for locaton" className="w-2/3 h-full border-l border-y rounded-l-md border-gray-500 p-2"/>
                <button className="bg-secondary w-1/3 h-full rounded-r-md" type="submit">Search</button>
            </form>
        </div>
        <div className="flex gap-1 my-10 justify-center">
            <div className="flex flex-col gap-1 relative top-10">
                <img src={houseOne} alt="house-1" />
                <img src={houseTwo} alt="house-2" />
            </div>
            <div className="flex flex-col gap-1">
                <img src={houseThree} alt="house-3" />
                <img src={houseFour} alt="house-4" />
            </div>
        </div>
    </section>
  )
}

export default Call