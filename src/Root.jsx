import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { CreateTask } from "./components/CreateTask";
import { Task } from "./components/Task";
import { Home } from "./components/Home";
import MobileSearch from "./components/MobileSearch";
import Result from "./components/Result";
import EditPage from "./components/EditPage";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="todos" element={<CreateTask />} />
                    <Route path="allTodos" element={<Task />} />
                    <Route path="todos/:id/editTodo" element={<EditPage />} />
                    <Route path="/Result/:searchQuery" element={<Result />} />
                    <Route path="todos/:id/deleteTodo" element={<Task />} />
                </Route>
                <Route path="/Search" element={<MobileSearch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Root;
