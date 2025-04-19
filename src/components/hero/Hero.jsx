import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px] gap-8 px-10'>
        <div className='flex flex-col justify-center gap-5 text-center md:text-left'>
            <h1 className='text-3xl font-bold'>Delicious Food Is Waiting For You</h1>
            <p className=''>Discover delicious recipes, cooking tips, and meal ideas for every occasion. Whether you're a beginner or a pro in the kitchen, 
             our food website has something tasty for everyone!</p>
            <div className='flex gap-4 justify-center md:justify-start items-center'>
                <button className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 cursor-pointer'>Food Menu</button>
                <button className='bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-700 cursor-pointer'>Book Table</button>
            </div>
        </div>
        <div className='flex flex-col justify-center'>
            <img src="/images/food1.jpg" alt="world" className=''/>
        </div>
      </div>
    </div>
  )
}

export default Hero
