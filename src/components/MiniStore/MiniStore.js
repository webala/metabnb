import React from 'react'
import Product from '../Product/Product'

function MiniStore() {

    const productsArray = [...Array(8)]
  return (
    <section className='flex flex-col items-center'>
        <h1 className='mb-16 font-bold text-xl'>Inspiration for your next adventure</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
            {productsArray.map((product, index) => {
                return (
                    <Product index={index}/>
                )
            })}
        </div>
    </section>
  )
}

export default MiniStore