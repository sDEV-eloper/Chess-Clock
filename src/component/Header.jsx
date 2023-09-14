import React, { useState } from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import {BsFillPauseFill} from 'react-icons/bs'

const Header = () => {
    const [audio] = useState(new Audio("/click_sound.mp3"));
    const [toggle, setToggle]=useState(true)


  const start = () => {
    audio.currentTime=0;
    audio.play()
  }
  const toggleHandler=()=>{
start()
setToggle(!toggle)
  }
  return (
<div className='flex justify-center p-8 bg-gray-200'>
<div className='flex justify-evenly w-full'>
<button onClick={()=>start()} className='text-white bg-blue-600 px-12 py-5 hover:bg-[#8510fb] rounded-lg active:scale-95 shadow-md shadow-black transition duration-150'>Reset</button>
<button onClick={()=>toggleHandler()} className='text-white   bg-blue-600 px-6  hover:bg-[#8510fb] rounded-lg active:scale-95 shadow-md shadow-black transition duration-150'>
  {toggle?
    <BsFillPlayFill size={60}/>:
    <BsFillPauseFill size={60}/>}
    </button>
<button onClick={()=>start()} className='text-white bg-blue-600 px-12 py-5 hover:bg-[#8510fb] rounded-lg active:scale-95 shadow-md shadow-black transition duration-150'>Set Time</button>
</div>
</div>
  )
}

export default Header