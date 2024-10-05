import { useContext } from "react";
import { toDoesContext } from "../context/ToDoesContext";

const Save = ({ todo, title, onSave }) => {
  const { tasks } = useContext(toDoesContext);

  const handleSaveBtn = () => {
    if (title === "") {
      alert("enter the title");
      return;
    }
    if (todo === "") {
      alert("enter the note");
      return;
    }

    onSave(title, todo);
    console.log(tasks);
  };

  return (
    <>
      <button className="py-2 px-3 bg-black text-white" onClick={handleSaveBtn}>
        Save
      </button>
    </>
  );
};

export default Save;
