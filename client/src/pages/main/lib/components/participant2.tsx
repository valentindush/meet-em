import React from 'react'

import cam_off from '../../../../assets/icons/cam_off.svg'
import cam_on from '../../../../assets/icons/cam_on.svg'
import mic_on from '../../../../assets/icons/mic_on_white.svg'
import mic_off from '../../../../assets/icons/muted.svg'

type Participant = {
    name: string,
    email: string,
    video: boolean,
    audio: boolean,
    imageUrl: string,
}


const Participant2 = ({name,email,video,audio,imageUrl}:Participant) => {
  return (
    <div className='h-[12rem] min-w-[22rem] rounded-lg relative'>
        <img src={imageUrl} className='w-full h-full rounded-2xl object-cover' alt="" />
        <div className="absolute w-full top-0 h-full bg-gradient-to-b from-transparent to-dark1 bg-opacity-40 rounded-lg">
            
        </div>
        <div className="flex absolute bottom-3 gap-2 px-4 w-full items-center justify-between z-10">

            <div className="bg-blackish opacity-60 px-5 p-2 rounded-full z-10">
              <p className='text-white'>
                {name}
              </p>
            </div>
            <div className="z-10">
              <button className='flex items-center justify-center w-[50px] h-[50px] bg-blue rounded-full'>
                {audio?<img src={mic_on} alt="" />:
                    <img src={mic_off} alt="" />}
              </button>
            </div>
          
        </div>
    </div>
  )
}

export default Participant2