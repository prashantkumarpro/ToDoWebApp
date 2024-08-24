import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { CreateTask } from './components/CreateTask'
import { Task } from './components/Task'
import { Home } from './components/Home'

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='createTask' element={<CreateTask />} />
                    <Route path='allTask' element={<Task />} />
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Root