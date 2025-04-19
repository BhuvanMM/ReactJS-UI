import React from 'react'

const Toplist = () => {
  return (
    <div className='px-10 py-10'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Top List</h1>
            <p className='text-md'>Our top picks</p>
        </div> 
        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-10'>
                <div className='flex flex-col justify-center text-center 
                hover:scale-110 transition duration-300'>
                    <img src="/images/f1.jpg" alt="food-1" />
                    <p className='text-lg font-bold'>Bowl Of Grains</p>
                    <p className=''>$10.5</p>
                    
                </div>
                <div className='flex flex-col justify-center text-center 
                hover:scale-110 transition duration-300'>
                    <img src="/images/f2.jpg" alt="food-2" />
                    <p className='text-lg font-bold'>Bowl Of Veggies</p>
                    <p>$20.5</p>
                    
                </div>
                <div className='flex flex-col justify-center text-center
                 hover:scale-110 transition duration-300'>
                    <img src="/images/food1.jpg" alt="food-3" />
                    <p className='text-lg font-bold'>Bowl Of Protein</p>
                    <p>$15.2</p>
                </div>
        </div>
    </div>
  )
}

export default Toplist
