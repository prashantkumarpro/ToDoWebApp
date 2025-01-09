import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import { CreateTask } from './pages/CreateTask'
import Task from './pages/Task'
import AllTasks from './pages/AllTasks'
import EditPage from './pages/EditPage'
import Result from './pages/Result'
import MobileSearch from './components/search/MobileSearch'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/createTask' element={<CreateTask />} />
          <Route path='/task' element={<Task />} />
          <Route path='/allTasks' element={<AllTasks />} />
          <Route path='/EditTask/:editTaskId' element={<EditPage />} />
          <Route path='/Result/:searchQuery' element={<Result />} />
          <Route path='/Task/:taskId' element={<Task />} />
        </Route>
        <Route path='/Search' element={<MobileSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
