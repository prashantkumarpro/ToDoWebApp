
import { Link } from 'react-router-dom'


export const SideNav = () => {
  return (
    <ul className='sideNavContainer  w-[220px] h-[calc(100% - 5rem)]overflow-hidden flex items-center flex-col mt-20 gap-2' >
      <Link to="/" className='w-full text-center text-[#000]  text-xl  flex items-center justify-start '>
        <li className='w-full flex items-center justify-start py-2'>
          <div className='px-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path></svg>

          </div>
          <h1 className='text-sm'>Home</h1>
        </li>
      </Link>
      <Link to="/CreateTask" className='w-full text-[#000] text-xl  flex items-center justify-start '>
        <li className='w-full flex items-center justify-start py-2'>
          <div className='px-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
          </div>
          <h1 className='text-sm'>Add</h1>
        </li>
      </Link>
      <Link to="/allTask" className='w-full text-center text-[#000]  text-xl  flex items-center justify-start '>
        <li className='w-full flex items-center justify-start py-2'>
          <div className='px-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 3V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H20C20.5523 2 21 2.44772 21 3ZM11.2929 13.1213L8.81802 10.6464L7.40381 12.0607L11.2929 15.9497L16.9497 10.2929L15.5355 8.87868L11.2929 13.1213Z"></path></svg>
          </div>
          <h1 className='text-sm'>All Tasks</h1>
        </li>
      </Link>
    </ul>
  )
}
