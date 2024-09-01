import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from "react"
import { toDoesContext } from "./context/ToDoesContext"
const EditPage = () => {
  const { editTask } = useParams()

  const { tasks } = useContext(toDoesContext);
  

  console.log(editTask, tasks)
  return (
    <div>EditPage</div>
  )
}

export default EditPage