import { useContext } from "react"
import Edit from "./Buttons/Edit"
import Remove from "./Buttons/Remove"
import { toDoesContext } from "./context/ToDoesContext"
import { useNavigate } from "react-router-dom"


export const Home = () => {

    const { tasks } = useContext(toDoesContext);
    const navigate = useNavigate();
   
    const handleTask = (e) => {
        const taskId = e.target.getAttribute('data-current-task');
        navigate(`/Task/${taskId}`)
    }



    return (
        <>
            {tasks.length > 0 ? (
                <div className='home_container p-5'>
                    <h1 className="text-2xl">Tasks</h1>
                    <ul className='w-full max-w-[720px] h-[auto] bg-white shadow-lg p-4 mt-3 rounded-lg' >
                        {tasks.map(({ _id, title }) => (

                            <li key={_id}
                                className='item w-full h-auto bg-slate-100 flex items-center justify-between p-2 my-3 rounded-md shadow-inner'>
                                <h3
                                    data-current-task={_id}
                                    onClick={handleTask}
                                    className="text-sm cursor-pointer uppercase">{title}</h3>
                                <div className="buttons flex items-center justify-center gap-5">
                                    <Edit taskId={_id} />
                                    <Remove taskId={_id} />
                                  
                                    
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            ) : (
                <div className="absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%]">
                    <p className="emty_home_text text-2xl ">Notes you add appere here</p>
                </div>

            )}
        </>
    )
}
