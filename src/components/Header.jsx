import {useState } from 'react'
import { RiMenu3Fill } from '@remixicon/react'
import { Link } from 'react-router-dom'
import Search from './Search'


export const Header = () => {

  const [isActive, setIsActive] = useState(false)

  const handleMenu = () => {
    setIsActive(!isActive)
  }


  return (
    <div className='header_container w-full h-16 bg-[#FFFFFF] py-2 px-6 flex items-center justify-between fixed top-0 left-0 z-50  shadow-md'>

      <div className='left_part flex items-center justify-between gap-4 cursor-pointer'>
        <div className='menu'
          onClick={handleMenu}
        >
          <RiMenu3Fill />
        </div>
        <Link to="/">
          <h1 className='text-2xl'>ToDoes</h1>
        </Link>
      </div>
      <div className='w-full max-w-md h-auto relative'>
        <Search />
      </div>

      <div className='flex items-center justify-between gap-8'>
        <Link
          to="/Search"
          className='search_icon hidden cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
        </Link>
        <div className='profilte_container size-8 rounded-full bg-slate-700 cursor-pointer'></div>

      </div>

    </div>
  )
}
