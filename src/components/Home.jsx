import { useContext } from "react"
import Edit from "./Buttons/Edit"
import Remove from "./Buttons/Remove"
import { toDoesContext } from "./context/ToDoesContext"
import { useNavigate } from "react-router-dom"


export const Home = () => {

    const { tasks } = useContext(toDoesContext);
    const navigate = useNavigate();

    const handleTask = () => {
        navigate('/Task')

    }

    return (
        <div className='home_container p-5'>
            <h1 className="text-2xl">Tasks</h1>
            <ul className='w-full max-w-[720px] h-[auto] bg-white shadow-lg p-4 mt-3 rounded-lg' >
                {tasks.map(({ id, title }) => (
                    <li
                        key={id}
                        className='w-full h-auto bg-slate-100 flex items-center justify-between p-2 my-3 rounded-md cursor-pointer shadow-inner'>
                        <h3
                            onClick={handleTask}
                            className="text-sm">{title}</h3>
                        <div className="flex items-center justify-center gap-5">
                            <Edit id={id} />
                            <Remove />
                        </div>
                    </li>
                ))}



            </ul>

        </div>
    )
}
