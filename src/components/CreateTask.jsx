import React, { useState } from 'react';
import Save from './Buttons/Save';
import { useParams } from 'react-router-dom';

export const CreateTask = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('')
  const [items, setItems] = useState([]);

  const myPrams = useParams()

  const handleChange = (event) => {
    setTitle(event.target.value);

  }

  const handleNote = (e) => {
    setNote(e.target.value)

  }

  const handleSave = (obj) => {
    setItems(prevItems => [...prevItems, obj]); // Append new item to the list
    setTitle(''); // Clear the title
    setNote('');  // Clear the note
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
    }
  }


  return (
    <div className='px-6  py-4 w-full h-auto'>

      <div className='p-2 w-full my-0 bg-[#CAC6C5] rounded-md '>

        <input
          type="text"
          value={title}
          onChange={handleChange}
          className='title w-full border-[none] outline-none py-2 bg-transparent'
          placeholder='Title'
          onKeyDown={handleKeyDown}
        />
        <textarea name="note" id="note"
          value={note}
          onChange={handleNote}
          className='w-full bg-transparent h-auto outline-none overflow-auto -scroll-ml-56'
          placeholder='Take a notes'>
        </textarea>
        <Save title={title} note={note} onSave={handleSave} />


      </div>
      <ul className='mt-4 w-full flex items-start justify-start gap-2 flex-wrap'>
        {items.map((item, index) => (
          <li
            key={index}
            className='p-2 w-[220px] h-auto bg-slate-50 my-3 overflow-hidden text-gray-950'>
            <h3 className='text-2xl font-semibold uppercase border-b-2'>{item.title}</h3>
            <p className='my-2'>{item.note} </p>
       
          </li>
        ))}
      </ul>
    </div>
  )
}


