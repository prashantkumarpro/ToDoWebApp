import { useState } from "react";
import { toDoesContext } from "./ToDoesContext";

// Create a provider component
export const ToDoesProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const addTask = (title, note) => {
        const newTask = { id: Date.now(), title: title, note: note }
        setTasks([...tasks, newTask])
    }

    // Function to update a specific task
    const updateTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };


    // Function to delete a specific task
    const deleteTask = (deletedTask) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) =>
                task.id !== deletedTask.id // Keep tasks that do not match the deleted task's id
            )
        );
    };

    return (
        <toDoesContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </toDoesContext.Provider>
    )
}

