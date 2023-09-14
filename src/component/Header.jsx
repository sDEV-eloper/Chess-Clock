import React from 'react'

const Header = () => {
  return (
<div className='flex justify-center p-8 bg-gray-200'>
<div className='flex justify-evenly w-full'>
<button className='text-white bg-blue-600 px-12 py-5 hover:bg-[#8510fb] rounded-lg active:scale-95 shadow-md shadow-black transition duration-150'>Reset</button>
<button className='text-white bg-blue-600 px-12 py-5 hover:bg-[#8510fb] rounded-lg active:scale-95 shadow-md shadow-black transition duration-150'>Play|Pause</button>
<button className='text-white bg-blue-600 px-12 py-5 hover:bg-[#8510fb] rounded-lg active:scale-95 shadow-md shadow-black transition duration-150'>Set Time</button>
</div>
</div>
  )
}

export default Header