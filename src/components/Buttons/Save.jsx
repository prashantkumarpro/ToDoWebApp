

const Save = ({ note, title, onSave }) => {



  const handleSaveBtn = () => {
    if (title === "") {
      alert('enter the title');
      return
    }
    if (note === "") {
      alert('enter the note');
      return
    }
    // Create an object and call the onSave function passed as prop
    const obj = { title, note };
    onSave(obj);
  }

  return (
    <>
      <button
        className='py-2 px-3 bg-black text-white'
        onClick={handleSaveBtn}
      >Save</button>
    </>
  )
}

export default Save