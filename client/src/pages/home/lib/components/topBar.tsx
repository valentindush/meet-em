import { Link } from 'react-router-dom'
import logo from '../../../../assets/icons/logo.svg'
import logosm from '../../../../assets/icons/logo_sm.svg'
import { helpIcon, settingsIcon } from './icons'

const TopBar = () => {

    const date = new Date()

    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric"
    }

  return (
    <div className='flex items-center justify-between md:flex-wrap relative'>
        <div className="logo md:scale-75 md:-ml-10">
            <img src={logo} className='scale-80' alt="logo" />
        </div>
        <div className='flex item-center gap-6 sm:absolute md:right-3'>
            <div className="flex items-center gap-3 sm:hidden">
                <p className='date text-white text-xl font-medium'>{date.getHours()}:{date.getMinutes()}</p>  
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <p className='date text-white text-xl font-medium'>{date.toLocaleDateString('en-US', dateOptions)}</p>
            </div>
            <div className="flex items-center gap-4">
                <button className='scale-[1.3] p-2 rounded-lg hover:bg-blueish hover:bg-opacity-40'>{helpIcon}</button>
                <button className='scale-[1.3] p-2 rounded-lg hover:bg-blueish hover:bg-opacity-40'>{settingsIcon}</button>
            </div>
            <Link to={"/auth/signup"} className="bg-blue p-3 rounded-full px-5">Sign up</Link>
        </div>
        
    </div>
  )
}

export default TopBar