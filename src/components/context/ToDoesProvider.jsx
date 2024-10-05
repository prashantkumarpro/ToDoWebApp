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
            // console.log(data[0]);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const addTask = async (title, todo) => {
        const res = await fetch("http://localhost:8000/api/todos", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                todo: todo,
            }),
        });

        const newTodo = res.json();

        const newTask = {
            id: newTodo.id, // ID returned from API
            title: newTodo.title,
            todo: newTodo.todo, // 'todo' from API response
        };
        console.log(newTask);
        setTasks([...tasks, newTask]);
    };

    // Function to update a specific task
    const updateTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task,
            ),
        );
    };

    // Function to delete a specific task
    const deleteTask = async (deletedTask) => {
        const res = await fetch(
            `http://localhost:8000/api/todos/${deletedTask}`,
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
        console.log(tasks[0].id);
    }, []);

    return (
        <toDoesContext.Provider
            value={{ tasks, addTask, updateTask, deleteTask }}
        >
            {children}
        </toDoesContext.Provider>
    );
};
