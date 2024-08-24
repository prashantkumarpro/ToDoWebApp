import { Header } from './components/Header'
import { SideNav } from './components/SideNav'
import { Task } from './components/Task'


function App() {


  return (
    <>
      <main className='bg-slate-200 w-full h-full flex items-start justify-between'>
        <SideNav />
        <div className='flex flex-col w-full gap-2'>
          <Header />
          <Task />


        </div>
      </main>
    </>
  )
}

export default App
