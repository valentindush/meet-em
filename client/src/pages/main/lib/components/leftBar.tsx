import React, { useState } from 'react'
import { messages, participants } from '../data/data'
import Participant from './participant'
import image2 from '../../../../assets/images/img2.png'
import Message from './message'

import paperClipIcon from '../../../../assets/icons/paper_clip.svg'
import sendMsgIcon from '../../../../assets/icons/send.svg'

const LeftBar = () => {

    const [chats, setChats] = useState("group")


    const PersonIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99967 9.99999C12.3009 9.99999 14.1663 8.13451 14.1663 5.83332C14.1663 3.53214 12.3009 1.66666 9.99967 1.66666C7.69849 1.66666 5.83301 3.53214 5.83301 5.83332C5.83301 8.13451 7.69849 9.99999 9.99967 9.99999Z" stroke="#1A71FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.8418 18.3333C2.8418 15.1083 6.05013 12.5 10.0001 12.5C10.8001 12.5 11.5751 12.6083 12.3001 12.8083" stroke="#1A71FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3337 15C18.3337 15.2667 18.3003 15.525 18.2337 15.775C18.1587 16.1083 18.0253 16.4333 17.8503 16.7167C17.2753 17.6833 16.217 18.3333 15.0003 18.3333C14.142 18.3333 13.367 18.0083 12.7837 17.475C12.5337 17.2583 12.317 17 12.1503 16.7167C11.842 16.2167 11.667 15.625 11.667 15C11.667 14.1 12.0253 13.275 12.6087 12.675C13.217 12.05 14.067 11.6667 15.0003 11.6667C15.9837 11.6667 16.8753 12.0917 17.4753 12.775C18.0087 13.3667 18.3337 14.15 18.3337 15Z" stroke="#1A71FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.2421 14.9833H13.7588" stroke="#1A71FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 13.7667V16.2584" stroke="#1A71FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
    const ArrowUp = <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7L7 1L13 7" stroke="#1A71FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
    
    

  return (
    <div className="h-full bg-black w-[500px] relative">
        <header className='flex justify-between p-4 items-center'>
            <div className="">
                <h2 className='text-md text-white'>Participants</h2>
            </div>
            <div className="flex items-center gap-3">
                <button className='bg-blueish text-blue flex items-center gap-4 py-3 px-5 rounded-full'>
                    <p className='text-sm'>Add Participant</p>
                    {PersonIcon}
                </button>
                <div className="cursor-pointer">
                    {ArrowUp}
                </div>
            </div>
        </header>
        <div className="participants bg-blackish p-2 h-[10rem] overflow-y-auto">
            {
                participants.map((part, idx)=>{
                    return <Participant name={part.name} imageUrl = {image2} video={part.video} audio={part.audio} />
                })
            }
        </div>  

            {/* CHATS DIV ===> */}

        <header className='flex justify-between p-4 items-center'>
            <div className="">
                <h2 className='text-md text-white'>Chats</h2>
            </div>
            <div className="flex bg-blueish p-1 rounded-full">
                <button onClick={()=>setChats("group")} className={`bg-blue p-2 w-[6rem] rounded-full text-white`}>Group</button>
                <button onClick={()=>setChats("personal")} className={`bg-blueish p-2 w-[6rem] rounded-full text-white`}>Personal</button>
            </div>
        </header>

        <div className="bg-blackish p-2 h-[20rem] overflow-y-auto">
            {messages.map((msg, idx)=>{
                return <Message name={msg.name} imageUrl={msg.imageUrl} message={msg.message} time={msg.time} />
            })}
        </div>


            {/* Messaage BBOOOxxx */}
        
        <div className="absolute w-full bottom-12">
            <div className="flex items-center bg-blackish p-3 py-1 pr-2 rounded-full w-[95%] mx-auto relative justify-between">
                <img src={paperClipIcon}  alt="" className='ml-4'/>
                <input type="text" placeholder='Type Something' className='p-3 bg-transparent placeholder:text-lg text-white text-md outline-none' />
                <button  className='bg-blue p-2 rounded-full flex items-center justify-center'>
                    <img src={sendMsgIcon} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default LeftBar