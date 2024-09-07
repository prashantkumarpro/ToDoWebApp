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

        const newTodo = res.json()

        const newTask = {
            _id: newTodo.id, // ID returned from API
            title: title,
            note: newTodo.todo, // 'todo' from API response
        }
        console.log(newTask)
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


    useEffect(() => {
        fetchedData()
    }, [])

    return (
        <toDoesContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </toDoesContext.Provider>
    )
}

