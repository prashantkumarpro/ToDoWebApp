import { useEffect, useState } from "react";
import { toDoesContext } from "./ToDoesContext";

// Create a provider component
export const ToDoesProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    // Fetch initial data
    const fetchedData = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/todos");
            const data = await res.json();
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }

    };


    }


    // Function to add/create a specific task

    const addTask = async (title, note) => {
        try {
            const res = await fetch("http://localhost:8000/api/todos", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: title,
                    todo: note,
                }),
            });

            const newTodo = await res.json();

            const newTask = {
                title: title,

                todo: note, // 'todo' from API response
            };
            console.log(newTask);
            setTasks([...tasks, newTask]);
        } catch (error) {
            console.error("something went wrong: ", error);
        }
    };

    // Function to update a specific task
    // const updateTask = (updatedTask) => {
    //     setTasks((prevTasks) =>
    //         prevTasks.map((task) =>
    //             task.id === updatedTask.id ? updatedTask : task,
    //         ),
    //     );
    // };

    const updateTask = async (updatedTask) => {
        try {
            const res = await fetch(
                `http://localhost:8000/api/todos/${updatedTask.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedTask),
                },
            );

            if (!res.ok) {
                throw new Error("Failed to update task");
            }

            const updateTaskBackend = await res.json(); // This gets the updated task from the server

            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === updateTaskBackend.id ? updateTaskBackend : task,
                ),
            );
        } catch (error) {
            console.error("Error updating task: ", error);
        }

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
        const res = await fetch(
            `http://localhost:8000/api/todos/${deletedTask.id}`,
            {
                method: "DELETE",
            },
        );

        setTasks((prevTasks) =>
            prevTasks.filter(
                (task) => task.id !== deletedTask.id, // Keep tasks that do not match the deleted task's id
            ),
        );
    };


    useEffect(() => {
        fetchedData();
    }, []);

    return (
        <toDoesContext.Provider
            value={{ tasks, addTask, updateTask, deleteTask }}
        >


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
    );
};
