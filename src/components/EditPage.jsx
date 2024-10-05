import { useContext, useEffect, useState } from "react";
import { toDoesContext } from "./context/ToDoesContext";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [currentTask, setCurrentTask] = useState(null);
  const { tasks, updateTask } = useContext(toDoesContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("current Id", id);
    if (tasks.length > 0) {
      const task = tasks.find((task) => task.id == id);
      console.log(task);
      setCurrentTask(task);
    }
  }, [id, tasks]);

  const handleTitleChange = (e) => {
    setCurrentTask({ ...currentTask, title: e.target.value });
    tasks.find();
  };

  const handletodoChange = (e) => {
    setCurrentTask({ ...currentTask, todo: e.target.value });
  };

  const handleSave = () => {
    updateTask(currentTask);
    navigate("/");
  };

  return (
    <div className="crete_task_container px-6 py-4 w-full h-auto">
      {currentTask && (
        <div className="taskInput p-2 w-full my-0 bg-[#FFFFFF] rounded-md">
          <input
            type="text"
            value={currentTask.title}
            onChange={handleTitleChange}
            className="title w-full border-[none] outline-none py-2 bg-transparent"
            placeholder="Title"
          />
          <textarea
            name="note"
            id="note"
            value={currentTask.todo}
            onChange={handletodoChange}
            className="w-full bg-transparent h-auto outline-none overflow-auto -scroll-ml-56"
            placeholder="Take a todos"
          />
          <button
            onClick={handleSave}
            className="cursor-pointer py-2 px-6 rounded-sm bg-slate-600 text-white hover:bg-slate-400 hover:text-black"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditPage;
