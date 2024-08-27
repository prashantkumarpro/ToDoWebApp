
import { Link } from 'react-router-dom'
import { RiAddCircleFill, RiHome3Fill, RiTaskFill } from '@remixicon/react'

export const SideNav = () => {
  return (
    <ul className='sideNavContainer  w-[220px] h-[calc(100% - 5rem)]  flex items-center flex-col mt-20 ' >
      <Link to="/" className='w-full h-14  text-center text-[#000]  text-xl  flex items-center justify-center '>
        <li className='w-full px-5 py-2'>
          <div className='flex items-center justify-start gap-6'>
            <RiHome3Fill />
            <h1>Home</h1>
          </div>
        </li>
      </Link>
      <Link to="/CreateTask" className='w-full h-14  text-[#000] text-xl  flex items-center justify-center '>
        <li className='w-full px-5 py-2'>
          <div className='flex items-center justify-start gap-6'>
            <RiAddCircleFill/>
            <h1>Add</h1>
          </div>

        </li>
      </Link>
      <Link to="/allTask" className='w-full h-14  text-center text-[#000]  text-xl  flex items-center justify-center '>
        <li className='w-full px-5 py-2'>
          <div className='flex items-center justify-start gap-6'>
            <RiTaskFill />
            <h1>All Tasks</h1>
          </div>
        </li>
      </Link>
    </ul>
  )
}
