import React from 'react'

import cam_off from '../../../../assets/icons/cam_off.svg'
import cam_on from '../../../../assets/icons/cam_on.svg'
import mic_on from '../../../../assets/icons/mic_on.svg'
import mic_off from '../../../../assets/icons/muted.svg'



type propsType = {
    name: string,
    imageUrl: string,
    video: boolean,
    audio: boolean
}

const Participant = ({name,imageUrl,video,audio}: propsType) => {



  return (
    <div className='bg-black flex justify-between p-2 rounded-full mt-2 cursor-pointer'>
        <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px]">
                <img src={imageUrl} className="rounded-full w-full h-full object-cover" alt="" />
            </div>
            <p className='text-white'>{name}</p>
        </div>
        <div className="flex items-center gap-2 pr-4">
            {audio?<img src={mic_on} alt="" />:
                <img src={mic_off} alt="" />}
            {video?<img src={cam_on} alt="" />:
                <img src={cam_off} alt="" />}
        </div>
    </div>
  )
}

export default Participant