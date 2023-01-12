import React, { useEffect, useState } from 'react'
import TopBar from './lib/components/topBar'
import { camIcon, keyBoardIcon } from './lib/components/icons'
import image1 from '../../assets/images/1.png'
import image2 from '../../assets/images/2.png'
import image3 from '../../assets/images/3.png'

const Home = () => {

  const  [isTyping, setIsTyping] = useState(false)
  const [code,setCode] = useState("")

  return (
    <section className='text-white h-fit px-24 py-12 md:flex-wrap md:p-4'>
        <TopBar />

        <div className="mt-[10rem] md:mt-12 h-fit flex lg:flex-wrap justify-between">
          <div className="z-10 w-1/2 md:w-full">
            <div className="text-4xl min-w-[500px] md:min-w-full font-semibold md:text-center">
              <h2>Premium video meetings.</h2>
              <h2 className='mt-3'>Now free for everyone.</h2>
            </div>
            <div className="mt-12  z-10 min-w-[500px] md:min-w-full">
              <p className='text-[#d9d7d7e4] text-xl md:text-center'>
                A video meeting app that allows you to connect with colleagues, clients, and friends from anywhere, on any device. Features include screen sharing, recording, and virtual backgrounds for a seamless and productive remote meeting experience.
              </p>
            </div>

            {/* New meeting */}


            <div className="mt-12 flex items-center  gap-4 z-10 md:gap-2 md:justify-center flex-wrap">
              <button className='p-4 px-6 bg-blue text-white rounded-full flex items-center justify-center gap-3 min-w-[200px]'>
                {camIcon}
                <p className='text-lg font-medium'>New meeting</p>
              </button>
              <div className={`flex items-center gap-2 border ${isTyping?"border-blue": "border-white"} border-opacity-75 p-3 rounded-full px-6`}>
                {keyBoardIcon}
                <input value={code} onChange={(e)=>setCode(e.target.value)} onFocus={()=>setIsTyping(true)} onBlur={()=>setIsTyping(false)} type="text" placeholder='Enter a code or a link' className='outline-none h-full p-2 bg-transparent' />
              </div>

              <button className={`text-lg ml-5 ${code !== ""? "text-blue": ""}`} disabled={code === ""?true:false}>Join</button>
        
            </div>

          </div>
          <div className="flex">
            <img src={image1} alt="" className='object-cover' />
          </div>
        </div>
        <hr className='mt-12 opacity-40' />
    </section>
  )
}

export default Home