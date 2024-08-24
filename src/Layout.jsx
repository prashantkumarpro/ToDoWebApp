
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { SideNav } from './components/SideNav'

const Layout = () => {
    return (
        <main className='bg-slate-200 w-full h-full flex items-start justify-between'>
            <SideNav />
            <div className='flex flex-col w-full gap-2'>
                <Header />
                <Outlet />
            </div>
        </main>
    )
}

export default Layout