import React from 'react'
import TopBar from './lib/components/topBar'
import LeftBar from './lib/components/leftBar'
import Videos from './lib/components/videos'

const Main = () => {
  return (
    <section className='w-screen h-screen bg-dark'>
      <TopBar />

      <div className="h-[calc(100vh-100px)] pt-1 flex gap-1">
        <Videos/>
        <LeftBar />
      </div>


    </section>
  )
}

export default Main