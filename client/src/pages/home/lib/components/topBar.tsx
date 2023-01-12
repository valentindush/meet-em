import logo from '../../../../assets/icons/logo.svg'
import { helpIcon, settingsIcon } from './icons'

const TopBar = () => {

    const date = new Date()

    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric"
    }

  return (
    <div className='flex items-center justify-between'>
        <div className="logo">
            <img src={logo} className='scale-80' alt="logo" />
        </div>
        <div className='flex item-center gap-6'>
            <div className="flex items-center gap-3">
                <p className='date text-white text-xl font-medium'>{date.getHours()}:{date.getMinutes()}</p>  
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <p className='date text-white text-xl font-medium'>{date.toLocaleDateString('en-US', dateOptions)}</p>
            </div>
            <div className="flex items-center gap-4">
                <button className='scale-[1.3] p-2 rounded-lg hover:bg-blueish hover:bg-opacity-40'>{helpIcon}</button>
                <button className='scale-[1.3] p-2 rounded-lg hover:bg-blueish hover:bg-opacity-40'>{settingsIcon}</button>
            </div>
        </div>
        
    </div>
  )
}

export default TopBar