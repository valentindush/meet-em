import React from 'react'
import TopBar from './lib/components/topBar'
import { camIcon, keyBoardIcon } from './lib/components/icons'

const Home = () => {
  return (
    <section className='text-white px-8 py-4'>
        <TopBar />

        <div className="mt-24">
          <div className="text-4xl font-semibold">
            <h2>Premium video meetings.</h2>
            <h2 className='mt-3'>Now free for everyone.</h2>
          </div>
          <div className="mt-12 max-w-3xl">
            <p className='text-white text-xl font-medium'>
              A video meeting app that allows you to connect with colleagues, clients, and friends from anywhere, on any device. Features include screen sharing, recording, and virtual backgrounds for a seamless and productive remote meeting experience.
            </p>
            <p className='text-white text-sm opacity-80 mt-5'>
              With our app, you can easily schedule and join meetings, share documents and collaborate in real-time, all while being able to see and hear each other clearly. Additionally, our app also offers advanced security measures to ensure the privacy of your meetings, making it the ideal choice for businesses and individuals alike.
            </p>
          </div>

          {/* New meeting */}


          <div className="mt-12 flex items-center gap-4">
            <button className='p-4 px-6 bg-blue text-white rounded-full flex items-center justify-center gap-3'>
              {camIcon}
              <p className='text-lg font-medium'>New meeting</p>
            </button>
            <div className="flex items-center gap-2 border border-white p-2 rounded-full px-6">
              {keyBoardIcon}
              <input type="text" placeholder='Enter a code or a link' className='outline-none h-full p-2 bg-transparent' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home