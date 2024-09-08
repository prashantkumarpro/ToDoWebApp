import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { CreateTask } from './components/CreateTask'
import { Task } from './components/Task'
import { Home } from './components/Home'
import MobileSearch from './components/MobileSearch'
import Result from './components/Result'
import EditPage from './components/EditPage'



const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='createTask' element={<CreateTask />} />
                    <Route path='allTask' element={<Task />} />
                    <Route path='/EditTask/:editTaskId' element={<EditPage />} />
                    <Route path='/Result/:searchQuery' element={<Result />} />
                    <Route path='/Task/:taskId' element={<Task />} />
                </Route>
                <Route path='/Search' element={<MobileSearch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root