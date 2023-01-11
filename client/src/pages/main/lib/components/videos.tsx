import React from 'react'
import dummyImage from '../../../../assets/images/img2.png'


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
  


  return (
    <div className='w-full p-5'>
      <div className="active_vid rounded-lg h-[55%] relative">
        <img src={dummyImage} alt="SGSJFG" className='h-full w-full rounded-lg object-cover' />
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
    </div>
  )
}

export default Videos