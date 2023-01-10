import React, { useState } from 'react'

import logo from '../../../../assets/icons/logo1.svg'
import img1 from '../../../../assets/images/img2.png'
import { participants } from '../data/data'



const TopBar = () => {

    type User = {
        username: string,
        title: string,
        imageUrl: string
    }

    const [user, setUser] = useState<User>({ username: "Adam Joseph", title: "Moderator", imageUrl: img1 })

    const ClipIcon = <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0649 25.4605H24.2505C28.6215 25.4605 32.211 21.8855 32.211 17.5C32.211 13.129 28.636 9.53949 24.2505 9.53949H22.0649" stroke="#1A71FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.3948 9.53949H11.2237C6.83818 9.53949 3.26318 13.1145 3.26318 17.5C3.26318 21.8711 6.83818 25.4605 11.2237 25.4605H13.3948" stroke="#1A71FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.9473 17.5H23.5262" stroke="#1A71FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    const LineIcon = <svg width="2" height="21" viewBox="0 0 2 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.236816" y="0.368439" width="1.44737" height="20.2632" fill="#1A71FF" />
    </svg>

    const DotsIcon = <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.53259 17.7337C4.53259 18.3348 4.29382 18.9112 3.8688 19.3362C3.44379 19.7612 2.86735 20 2.26629 20C1.66523 20 1.08879 19.7612 0.663781 19.3362C0.238769 18.9112 -7.27897e-08 18.3348 -9.90628e-08 17.7337C-1.25336e-07 17.1326 0.238769 16.5562 0.663781 16.1312C1.08879 15.7062 1.66523 15.4674 2.26629 15.4674C2.86735 15.4674 3.44379 15.7062 3.8688 16.1312C4.29382 16.5562 4.53259 17.1326 4.53259 17.7337ZM4.53259 10.1794C4.53259 10.7805 4.29382 11.3569 3.8688 11.7819C3.44379 12.2069 2.86735 12.4457 2.26629 12.4457C1.66523 12.4457 1.08879 12.2069 0.663781 11.7819C0.238769 11.3569 -4.02999e-07 10.7805 -4.29272e-07 10.1794C-4.55545e-07 9.57834 0.238769 9.0019 0.663781 8.57689C1.08879 8.15188 1.66523 7.91311 2.26629 7.91311C2.86735 7.91311 3.44379 8.15188 3.8688 8.57689C4.29382 9.0019 4.53259 9.57834 4.53259 10.1794ZM4.53258 2.62509C4.53258 3.22615 4.29382 3.80259 3.8688 4.2276C3.44379 4.65261 2.86735 4.89138 2.26629 4.89138C1.66523 4.89138 1.08879 4.65261 0.663781 4.2276C0.238768 3.80259 -7.33208e-07 3.22615 -7.59481e-07 2.62509C-7.85755e-07 2.02403 0.238768 1.44759 0.663781 1.02258C1.08879 0.597567 1.66523 0.358797 2.26629 0.358797C2.86735 0.358797 3.44379 0.597566 3.8688 1.02258C4.29382 1.44759 4.53258 2.02403 4.53258 2.62509Z" fill="#A2A7B4" />
    </svg>



    return (
        <div className=' h-[100px] bg-black  flex items-center gap-3 justify-between p-4 px-8'>
            <div className="flex items-center gap-12">
                <div className="logo ">
                    {/* Logo */}

                    <img src={logo} alt="Logo" className='' />

                </div>
                <div className="title">
                    <p className='text-white text-lg font-medium'>[Internal] Weekly Report Marketing + Sales  </p>
                    <p className='time text-xs text-white mt-1 opacity-70'>June 12th, 2022 | 11:00 AM </p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex">
                    <div className="w-[50px] h-[50px] rounded-full border-[3px] border-black relative">
                        <img src={participants[0].imageUrl} alt="participant" className='w-full h-full rounded-full object-cover' />
                    </div>
                    <div className="w-[50px] h-[50px] rounded-full border-[3px] z-0 border-black -ml-4">
                        <img src={participants[1].imageUrl} alt="participant" className='w-full h-full rounded-full object-cover' />
                    </div>
                    <div className="w-[50px] h-[50px] rounded-full border-[3px] z-0 border-black -ml-4">
                        <img src={participants[2].imageUrl} alt="participant" className='w-full h-full rounded-full object-cover' />
                    </div>
                    <div className="w-[50px] h-[50px] rounded-full border-[3px] z-0 border-black -ml-4">
                        <img src={participants[3].imageUrl} alt="participant" className='w-full h-full rounded-full object-cover' />
                    </div>
                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blueish border-[3px] z-0 border-black -ml-4">
                        <p className='text-blue text-lg font-medium'>+9</p>
                    </div>
                </div>
                <button className='flex items-center gap-1 bg-blueish px-6 py-3 rounded-full scale-95'>
                    {ClipIcon}
                    {LineIcon}
                    <p className='text-blue'>cem-jnmt-hsu</p>
                </button>
                <div className="flex p-3 pr-4 ml-4 w-[19rem] items-center rounded-full bg-blackish relative scale-95">
                    <div className="flex items-center gap-4">
                        <div className="img border-[4px] border-black w-[50px] h-[50px] rounded-full">
                            <img src={user.imageUrl} alt="USER PROFILE" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className="">
                            <p className='text-lg text-white'>{user.username}</p>
                            <p className='text-sm text-white opacity-70'>{user.title}</p>
                        </div>
                    </div>
                    <div className="dots absolute right-12 cursor-pointer">
                        {DotsIcon}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default TopBar