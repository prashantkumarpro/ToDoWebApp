import { useEffect, useState } from "react";
import { toDoesContext } from "./ToDoesContext";

// Create a provider component
export const ToDoesProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])


    // Fetch initial data
    const fetchedData = async () => {
        try {
            const res = await fetch('https://api.freeapi.app/api/v1/todos')
            const data = await res.json()
            setTasks(data.data)
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }


    // Function to add/create a specific task
    const addTask = async (title, note) => {
        const res = await fetch('https://api.freeapi.app/api/v1/todos/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: note,
                title: title,
                completed: false,
            }),
        })

        const newTodo = await res.json()

        const newTask = {
            title: newTodo.data.title,
            description: newTodo.data.description,
            _id: newTodo.data._id
        }

        setTasks([...tasks, newTask])
    }

    // Function to update a specific task
    const updateTask = async (updatedTask) => {
        const res = await fetch(`https://api.freeapi.app/api/v1/todos/${updatedTask._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: updatedTask.description,
                title: updatedTask.title,
            }),
        })

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task._id === updatedTask._id ? updatedTask : task
            )
        );
    };


    // Function to delete a specific task
    const deleteTask = async (deletedTask) => {
        const res = await fetch(`https://api.freeapi.app/api/v1/todos/${deletedTask._id}`, {
            method: "DELETE"
        })

        setTasks((prevTasks) =>
            prevTasks.filter((task) =>
                task._id !== deletedTask._id // Keep tasks that do not match the deleted task's id
            )
        );
    };


    const [isActive, setIsActive] = useState(false)

    const handleMenu = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        fetchedData()

    }, [])

    return (
        <toDoesContext.Provider value={{ tasks, addTask, updateTask, deleteTask, handleMenu, setIsActive, isActive }}>
            {children}
        </toDoesContext.Provider>
    )
}

