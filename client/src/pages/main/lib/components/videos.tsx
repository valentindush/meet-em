import React from 'react'
import dummyImage from '../../../../assets/images/img2.png'
import { participants } from '../data/data'
import Participant2 from './participant2'


const Videos = () => {

  const fullScreenIcon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.3335 10.5V7.58331C2.3335 4.67831 4.6785 2.33331 7.5835 2.33331H10.5002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.501 2.33331H20.4176C23.3226 2.33331 25.6676 4.67831 25.6676 7.58331V10.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.667 18.6667V20.4167C25.667 23.3217 23.322 25.6667 20.417 25.6667H18.667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5002 25.6667H7.5835C4.6785 25.6667 2.3335 23.3217 2.3335 20.4167V17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
  const recordIcon = <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15.5825" cy="15.5823" r="15.1406" fill="white" fill-opacity="0.63"/>
                      <circle cx="15.5823" cy="15.5823" r="5.74297" fill="#EB5757"/>
                      </svg>
  
  
  const streamIcon = <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 11L5 28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 13L12 26" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19 5.14583V32.8542" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M26 13V26" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M33 11L33 28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
  

  const MicIcon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0002 18.0833C16.5785 18.0833 18.6668 15.995 18.6668 13.4166V6.99998C18.6668 4.42165 16.5785 2.33331 14.0002 2.33331C11.4218 2.33331 9.3335 4.42165 9.3335 6.99998V13.4166C9.3335 15.995 11.4218 18.0833 14.0002 18.0833Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.07568 11.2584V13.2417C5.07568 18.165 9.07735 22.1667 14.0007 22.1667C18.924 22.1667 22.9257 18.165 22.9257 13.2417V11.2584" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 22.1667V25.6667" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

  const CamIcon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6185 23.8233H7.24516C3.5585 23.8233 2.3335 21.3733 2.3335 18.9116V9.0883C2.3335 5.40164 3.5585 4.17664 7.24516 4.17664H14.6185C18.3052 4.17664 19.5302 5.40164 19.5302 9.0883V18.9116C19.5302 22.5983 18.2935 23.8233 14.6185 23.8233Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.7736 19.95L19.5303 17.675V10.3133L22.7736 8.0383C24.3603 6.92997 25.6669 7.60664 25.6669 9.55497V18.445C25.6669 20.3933 24.3603 21.07 22.7736 19.95Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.417 12.8334C14.3835 12.8334 15.167 12.0499 15.167 11.0834C15.167 10.1169 14.3835 9.33337 13.417 9.33337C12.4505 9.33337 11.667 10.1169 11.667 11.0834C11.667 12.0499 12.4505 12.8334 13.417 12.8334Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
  
  const presentIcon =<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5002 25.6666H17.5002C23.3335 25.6666 25.6668 23.3333 25.6668 17.5V10.5C25.6668 4.66665 23.3335 2.33331 17.5002 2.33331H10.5002C4.66683 2.33331 2.3335 4.66665 2.3335 10.5V17.5C2.3335 23.3333 4.66683 25.6666 10.5002 25.6666Z" stroke="#1A71FF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.5 11.095L14 7.59503L17.5 11.095" stroke="#1A71FF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 7.59503V16.9284" stroke="#1A71FF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 19.2617C11.5383 20.7783 16.4617 20.7783 21 19.2617" stroke="#1A71FF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
  
  const recorderIcon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.965 25.6666C20.4083 25.6666 25.6317 20.4433 25.6317 14C25.6317 7.55666 20.4083 2.33331 13.965 2.33331C7.52168 2.33331 2.29834 7.55666 2.29834 14C2.29834 20.4433 7.52168 25.6666 13.965 25.6666Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.0004 18.935C16.726 18.935 18.9354 16.7255 18.9354 14C18.9354 11.2745 16.726 9.065 14.0004 9.065C11.2749 9.065 9.06543 11.2745 9.06543 14C9.06543 16.7255 11.2749 18.935 14.0004 18.935Z" stroke="white" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="14" cy="14" r="4" fill="white" fill-opacity="0.6"/>
                      </svg>
  

  const messageIcon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.91683 22.1666H9.3335C4.66683 22.1666 2.3335 21 2.3335 15.1666V9.33331C2.3335 4.66665 4.66683 2.33331 9.3335 2.33331H18.6668C23.3335 2.33331 25.6668 4.66665 25.6668 9.33331V15.1666C25.6668 19.8333 23.3335 22.1666 18.6668 22.1666H18.0835C17.7218 22.1666 17.3718 22.3416 17.1502 22.6333L15.4002 24.9666C14.6302 25.9933 13.3702 25.9933 12.6002 24.9666L10.8502 22.6333C10.6635 22.3766 10.2318 22.1666 9.91683 22.1666Z" stroke="#1A71FF" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.6629 12.8334H18.6733" stroke="#1A71FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.9949 12.8334H14.0054" stroke="#1A71FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.32741 12.8334H9.33789" stroke="#1A71FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
  

  const moreIcon = <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0003 0.666687C8.71699 0.666687 7.66699 1.71669 7.66699 3.00002C7.66699 4.28335 8.71699 5.33335 10.0003 5.33335C11.2837 5.33335 12.3337 4.28335 12.3337 3.00002C12.3337 1.71669 11.2837 0.666687 10.0003 0.666687ZM17.0003 0.666687C15.717 0.666687 14.667 1.71669 14.667 3.00002C14.667 4.28335 15.717 5.33335 17.0003 5.33335C18.2837 5.33335 19.3337 4.28335 19.3337 3.00002C19.3337 1.71669 18.2837 0.666687 17.0003 0.666687ZM3.00033 0.666687C1.71699 0.666687 0.666992 1.71669 0.666992 3.00002C0.666992 4.28335 1.71699 5.33335 3.00033 5.33335C4.28366 5.33335 5.33366 4.28335 5.33366 3.00002C5.33366 1.71669 4.28366 0.666687 3.00033 0.666687Z" fill="#1A71FF"/>
                    </svg>



  

  return (
    <div className='w-[calc(100%-500px)] p-5 relative'>
      <div className="active_vid rounded-lg h-[55%] relative">
        <img src={dummyImage} alt="SGSJFG" className='h-full w-full rounded-2xl object-cover' />
        <div className="w-full h-full flex justify-between p-4  absolute top-0">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-3 rounded-full bg-blackish bg-opacity-50 p-2">
              {recordIcon}
              <p className='text-white pr-3'>24:01:45</p>
            </div>
            <div className="bg-blackish bg-opacity-50 py-3 px-4 rounded-full">
              <p className='text-white text-center text-[17px]'>Adam Joesph</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-[65px] h-[65px] flex items-center justify-center rounded-full bg-blackish bg-opacity-60 p-4 scale-90">
              {fullScreenIcon}
            </div>
            <div className=" w-[65px] h-[65px] flex items-center justify-center rounded-full bg-blackish bg-opacity-60 p-4 scale-90">
              {streamIcon}
            </div>
           
          </div>
        </div>
      </div>
      <div className="participants flex w-full overflow-auto pt-4 gap-5 pb-3">
        {participants.map((part,idx)=>{
          return <Participant2 key={idx} name={part.name} email={part.email} imageUrl={part.imageUrl} audio={part.audio} video={part.video} />
        })}
      </div>

      <div className="buttons flex items-center gap-5   bg-black w-full bottom-0 p-6 justify-center absolute">
        <button className='w-[60px] h-[60px] flex items-center justify-center bg-blue rounded-full'>
          {MicIcon}
        </button>
        <button className='w-[60px] h-[60px] flex items-center justify-center bg-blue rounded-full'>
          {CamIcon}
        </button>
        <button className='w-[60px] h-[60px] flex items-center justify-center bg-blueish rounded-full'>
          {presentIcon}
        </button>

        <button className='border-4 border-blackish rounded-full p-1'>
          <div className='w-[60px] h-[60px] flex items-center justify-center bg-red rounded-full border-2 border-black'>
            <div className="rounded-full border border-white border-opacity-60 p-[2px]">
              {recorderIcon}
            </div>
          </div>
        </button>

        <button className='w-[60px] h-[60px] flex items-center justify-center bg-blueish rounded-full'>
          {messageIcon}
        </button>        
        <button className='w-[60px] h-[60px] flex items-center justify-center bg-blueish rounded-full'>
          {moreIcon}
        </button>

        <button className='bg-red text-white py-4 px-8 rounded-full absolute right-12'>
          End Call
        </button>
      </div>
    </div>
  )
}

export default Videos