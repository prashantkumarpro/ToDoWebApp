import { useState } from "react";
import { toDoesContext } from "./ToDoesContext";

// Create a provider component
export const ToDoesProvider = ({ children }) => {
    const [tasks, setTasks] = useState([{ id: `${Date.now()}`, title: "Web Development", note: "Thsi is default text for testing is working or not. Brother I use context for passing props" }])

    const addTask = (title, note) => {
        const newTask = { id: Date.now(), title: title, note: note }
        setTasks([...tasks, newTask])
    }
    return (
        <toDoesContext.Provider value={{ tasks, addTask }}>
            {children}
        </toDoesContext.Provider>
    )
}

