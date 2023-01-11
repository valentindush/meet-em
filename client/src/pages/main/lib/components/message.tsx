import React from 'react'
import { MessageType } from '../data/data'

const Message = ({name, imageUrl, message,time}: MessageType) => {
  return (
    <div className='flex justify-between items-center mt-3'>
        <div className="flex items-center gap-8">
            <div className="w-[50px] h-[50px]">
                <img src={imageUrl} alt="USER IMAGE" className='w-full h-full rounded-full object-cover' />
            </div>
            <div className="bg-black p-3 rounded-lg">
                <p className='text-xs text-white opacity-70'>{name}</p>
                <p className='text-white text-lg mt-1'>{message}</p>
            </div>
        </div>
        <div className="">
            <p className='text-white text-sm opacity-90'>{time.getHours()}:{time.getMinutes()}</p>
        </div>
    </div>
  )
}

export default Message