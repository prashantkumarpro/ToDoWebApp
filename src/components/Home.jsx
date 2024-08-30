import { useContext } from "react"
import Edit from "./Buttons/Edit"
import Remove from "./Buttons/Remove"
import { toDoesContext } from "./context/ToDoesContext"


export const Home = () => {

    const { tasks } = useContext(toDoesContext)

    return (
        <div className='p-5'>
            <h1 className="text-2xl">Tasks</h1>
            <ul className='w-full max-w-[720px] h-[auto] bg-white shadow-lg p-4 mt-3 rounded-lg' >
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className='w-full h-auto bg-slate-100 flex items-center justify-between p-2 my-3 rounded-md cursor-pointer shadow-inner'>
                        <h3 className="text-sm">{task.title}</h3>
                        <div className="flex items-center justify-center gap-5">
                            <Edit />
                            <Remove />
                        </div>
                    </li>
                ))}



            </ul>

        </div>
    )
}
