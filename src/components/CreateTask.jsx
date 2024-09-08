import React, { useContext, useState } from 'react';
// import Save from './Buttons/Save';
import { toDoesContext } from './context/ToDoesContext';


// import { useParams } from 'react-router-dom';


export const CreateTask = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('')
  const { tasks, addTask } = useContext(toDoesContext)



  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleNote = (e) => {
    setNote(e.target.value)

  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
    }
  }

  const handleAddBtn = () => {
    if (title.trim() == 0 || note.trim() == 0) {
      alert('enter both title and note')
      return
    } else {
      addTask(title, note)
      setNote('')
      setTitle('')
    }
  }

  return (
    <div className='crete_task_container px-6  py-4 w-full h-auto'>

      <div className='taskInput p-2 w-full my-0 bg-[#FFFFFF]  rounded-md '>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className='title w-full border-[none] outline-none py-2 bg-transparent'
          placeholder='Title'
          onKeyDown={handleKeyDown}
        />
        <textarea name="note"
          value={note}
          onChange={handleNote}
          className='w-full bg-transparent h-auto outline-none overflow-auto -scroll-ml-56'
          placeholder='Take a notes'>
        </textarea>
        {/* <Save title={title} note={note} onSave={handleSave} /> */}
        <button
          className='cursor-pointer py-2 px-6 rounded-sm bg-slate-600 text-white hover:bg-slate-400 hover:text-black'
          onClick={handleAddBtn} >Add</button>

      </div>
      <ul className='mt-4 w-full flex items-start justify-start gap-2 flex-wrap mb-8'>
        {tasks.length > 0 && tasks.map(({ title, _id, description }) => (
          <li
            key={_id}
            className='p-4  w-[220px] h-auto bg-slate-50 my-3 overflow-hidden text-gray-950 mb-10 shadow-md rounded-md'>
            <h3 className='text-sm font-semibold uppercase border-b-2'>{title}</h3>
            <p className='my-4 uppercase text-sm'>{description}</p>

          </li>
        ))}
      </ul>
    </div>
  )
}


