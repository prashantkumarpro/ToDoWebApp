
import { Link } from 'react-router-dom'
import Add from './Buttons/Add'

export const SideNav = () => {
  return (
    <ul className='sideNavContainer bg-[#8D8787] w-[280px] h-[100vh] flex items-center flex-col' >
      <Link to="/" className='w-full h-20 border-b-1 text-center text-white  text-xl font-medium flex items-center justify-center border-b-[1.5px] border-[#e5e0e0]'>
        <li>
          <h1>Home</h1>
        </li>
      </Link>
      <Link to="/CreateTask" className='w-full h-20 text-white text-xl font-medium flex items-center justify-center border-b-[1.5px] border-[#fff]'>
        <li>
          <Add />
        </li>
      </Link>
      <Link to="/allTask" className='w-full h-20 text-center text-white text-xl font-medium flex items-center justify-center  border-b-[1.5px] border-[#fff]'>
        <li>
          <h1>All Tasks</h1>
        </li>
      </Link>

    </ul>
  )
}
