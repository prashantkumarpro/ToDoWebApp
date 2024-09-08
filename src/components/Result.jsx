import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toDoesContext } from './context/ToDoesContext'

const Result = () => {
  const { searchQuery } = useParams()
  const { tasks } = useContext(toDoesContext)
  const [searchTask, setSearchTask] = useState([])

  const searchedTasks = () => {
    const includedTasks = tasks.filter(task => task.title.includes(searchQuery));
    setSearchTask(includedTasks)
  }

  useEffect(() => {
    searchedTasks()
  }, [searchQuery, tasks])

  return (
    <div className='flex  flex-col gap-6'>
      <h1 className='text-2xl normal-case'>Result:{searchQuery}</h1>
      <Link
        className='py-2 px-4 bg-slate-500 text-[#fff] w-fit rounded-sm'
        to='/'>Go Back</Link>
      {searchTask.length > 0 ? (
        <ul className='flex items-start justify-start gap-2'>
          {tasks.length > 0 && tasks.map(({ title, _id, description }) => (
            <li
              key={_id}
              className='p-4  w-[220px] h-auto bg-slate-50 my-3 overflow-hidden text-gray-950 mb-10 shadow-md rounded-md'>
              <h3 className='text-sm font-semibold uppercase border-b-2'>{title}</h3>
              <p className='my-4 uppercase text-sm'>{description}</p>

            </li>
          ))}

        </ul>
      ) : (
        <p className='m-auto text-red-600  text-2xl'>Not found </p>
      )}
    </div>
  )
}

export default Result