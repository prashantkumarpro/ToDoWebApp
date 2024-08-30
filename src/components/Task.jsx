import { useContext } from "react"
import { toDoesContext } from "./context/ToDoesContext"


export const Task = () => {

    const { tasks } = useContext(toDoesContext)
    console.log(tasks)
    
    return (
        <div className='w-full h-full'>
            <ul className='all_tasks w-full px-5 h-auto  flex items-start justify-start gap-5 flex-wrap '>
                {tasks.map((item) => (
                    <li
                        key={item.id}
                        className='p-2 w-[220px] h-auto bg-[#FFFFFF] border-[1.2px] rounded-xl cursor-pointer mb-3  text-gray-950 shadow-white'>
                        <h5 className='text-sm font-bold uppercase border-b-[1px] py-1'>{item.title}</h5>
                        <p className='my-2 text-sm'>{item.note} </p>
                        <p></p>
                    </li>
                ))}
            </ul>

        </div>
    )
}


