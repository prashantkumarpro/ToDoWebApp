
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { SideNav } from './components/SideNav'

const Layout = () => {
    return (
        <main className=' w-full h-full bg-[#FFFFFF]  flex-col'>
            <Header />
            <div className='w-full  h-[100vh] overflow-hidden  flex items-start justify-start gap-5'>
                <SideNav />
                <div className='w-full h-[100vh] mt-20 p-5 overflow-x-hidden overflow-y-scroll'>
                    <Outlet />
                </div>
            </div>


        </main>
    )
}

export default Layout