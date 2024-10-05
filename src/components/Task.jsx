import { useContext, useEffect, useState } from "react";
import { toDoesContext } from "./context/ToDoesContext";
import { useParams } from "react-router-dom";

export const Task = () => {
    const [currentTask, setCurrentTask] = useState(null);
    const { tasks } = useContext(toDoesContext);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        if (tasks.length > 0) {
            const task = tasks.find((task) => task.id == id);
            setCurrentTask(task);
            console.log(task);
        }
    }, [id, tasks]);

    return (
        <div className="w-full h-full">
            {currentTask ? (
                <div className="p-5">
                    <h2 className="text-xl font-bold uppercase">
                        {currentTask.title}
                    </h2>
                    <p className="mt-3">{currentTask.todo}</p>
                </div>
            ) : (
                <p>Task not found.</p>
            )}
        </div>
    );
};

export default Task;
