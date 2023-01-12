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


  const micOffIcon = <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9552 7.17801V6.87752C16.9552 4.66397 15.1624 2.87109 12.9488 2.87109C10.7353 2.87109 8.94238 4.66397 8.94238 6.87752V11.8856" stroke="white" stroke-width="1.66129" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.9834 15.0807C10.7146 15.892 11.7763 16.3928 12.9482 16.3928C15.1617 16.3928 16.9546 14.5999 16.9546 12.3863V11.8855" stroke="white" stroke-width="1.66129" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.71973 17.8451C9.09193 19.1172 10.9249 19.8984 12.9481 19.8984C17.1749 19.8984 20.6104 16.4629 20.6104 12.2361V10.5334" stroke="white" stroke-width="1.66129" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.28516 10.5334V12.2361C5.28516 13.2978 5.49549 14.2994 5.88612 15.2209" stroke="white" stroke-width="1.66129" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.0302 3.7124L4.86426 19.8884" stroke="white" stroke-width="1.66129" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9463 3.87268V6.8775" stroke="white" stroke-width="1.66129" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.9482 19.8984V22.9032" stroke="white" stroke-width="1.66129" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
  

  return (
    <div className='h-[12rem] min-w-[22rem] rounded-lg relative'>
        <img src={imageUrl} className='w-full h-full rounded-2xl object-cover' alt="" />
        <div className="flex absolute bottom-3 gap-2 px-4 w-full items-center justify-between z-10">

            <div className="bg-blackish bg-opacity-80 px-5 p-2 rounded-full z-10">
              <p className='text-white'>
                {name}
              </p>
            </div>
            <div className="z-10">
              {audio?<button className='flex items-center justify-center w-[50px] h-[50px] bg-blue rounded-full'>
                <img src={mic_on} alt="" />
              </button>:
              <button className='flex items-center justify-center w-[50px] h-[50px] bg-red rounded-full'>
                {micOffIcon}
                </button>}
            </div>
          
        </div>
    </div>
  )
}

export default Participant2