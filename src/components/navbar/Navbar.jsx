import React from 'react'

const Navbar = () => {
  return (
    <div className='p-6'>
      <div className='flex justify-between'>
        <div>
            <p className='text-xl font-semibold'>EAT <span className='text-red-500'>FOOD</span> </p>
        </div>
        <div className='items-center flex gap-8'>
            <ul className='gap-4 cursor-pointer hidden sm:flex'>
                <li className='hover:border-b-2 border-red-400 uppercase font-semibold'>Home</li>
                <li className='hover:border-b-2 border-red-400 uppercase font-semibold'>About</li>
                <li className='hover:border-b-2 border-red-400 uppercase font-semibold'>Contact</li>
            </ul>
            <div>
            <button className='rounded-4xl bg-red-500 px-4 py-2'>B</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
