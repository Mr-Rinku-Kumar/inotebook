import Noteitem from './Noteitem';
import { useContext, useEffect, useRef, useState } from 'react'
import AddNote from './AddNote'
import NoteContext from '../context/notes/notecontext'
import { useNavigate } from 'react-router-dom';
import '../styles/Notes.css'; // Update the import path to reflect the new folder structure


const Notes = (props) => {
  const context = useContext(NoteContext)
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [navigate]);


  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const ref = useRef(null)
  const closeRef = useRef(null)

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })

  }



  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    closeRef.current.click()
    props.showAlert("UPDATED THE NOTE")
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className=' row my-3 notes-container'>
        <h2>Your Notes </h2>
        <div className='mx-1 my-2'><h4>{notes.length === 0 && "No Notes To Display"}</h4></div>
        {notes.map((note, index) => {
          return <Noteitem className="note-card" key={note._id || index} updateNote={updateNote} showAlert={props.showAlert} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes