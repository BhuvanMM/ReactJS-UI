import React from 'react'

const Banner = () => {
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
            <div className='hover:scale-105 transition duration-300'>
                <img src="/images/b1.jpg" alt="background"  />
            </div>
            <div className='flex flex-col justify-center gap-4 px-10 hover:scale-105 transition duration-300'>
                <h1 className='text-4xl font-bold'>Enjoy Great Food!</h1>
                <p className='font-medium'>Your go-to destination for mouth-watering recipes, easy cooking guides, and food inspiration. Explore 
                flavors, try new dishes, and make every meal unforgettable!</p>
            </div>
       </div>
    </div>
  )
}

export default Banner
