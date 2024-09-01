import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Task } from './Task'

const Result = () => {
  const { searchQuery } = useParams()

  return (
    <div className='flex  flex-col gap-6'>
      <h1>Result {searchQuery}</h1>
      <div>
        <Task />
      </div>
      
      <Link
        className='py-2 px-4 bg-slate-600 w-fit'
        to='/'>Go Back</Link>
    </div>
  )
}

export default Result