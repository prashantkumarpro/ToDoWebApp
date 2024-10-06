import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toDoesContext } from "./context/ToDoesContext";

const AllTasks = () => {
    const { tasks } = useContext(toDoesContext);

    return (
        <div className='px-5 py-0'>
            <h1 className='text-xl'>All tasks</h1>
            <ul className='mt-3 w-full flex items-start justify-start gap-2 flex-wrap mb-8'>

                {tasks.length > 0 ? (
                    tasks.map(({ title, _id, description }) => (
                        <li
                            key={_id}
                            className='p-2 my-3  w-[220px] h-auto bg-slate-50  overflow-hidden text-gray-950 mb-10 shadow-md rounded-md'>
                            <h3 className='text-sm font-semibold uppercase border-b-2'>{title}</h3>
                            <p className='my-4 uppercase text-sm'>{description}</p>

                        </li>
                    ))
                ) : (
                    <div className='absolute top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/3 text-center'>
                        <p className='m-auto text-xl mb-4'>Empty task</p>
                        <Link
                            className='mt-4'
                            to='/'>Go Home</Link>
                            
                    </div>
                )
                }
            </ul>
        </div>
    )
}

export default AllTasks