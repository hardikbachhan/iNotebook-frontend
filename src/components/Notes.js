import React, { useState, useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
    });

    const ref = useRef(null);
    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });

    const updateNote = (currentNote) => {
        // shows a bootstrap modal
        // console.log("request to update note");
        ref.current.click();
        setNote({ etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    };

    const handleClick = (e) => {
        e.preventDefault();
        // update note after getting data from modal
        // addNote(note.title, note.description, note.tag);
        // setNote({title: "", description: "", tag: "default"});
        console.log("updating the note...", note);
    };

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <AddNote />

            <button
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                ref={ref}
            >
                Launch demo modal
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Note
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="etitle"
                                        name="etitle"
                                        value={note.etitle}
                                        placeholder="Note Title goes here..."
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="edescription"
                                        name="edescription"
                                        value={note.edescription}
                                        placeholder="Note Description goes here..."
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tag">Tag</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="etag"
                                        name="etag"
                                        value={note.etag}
                                        placeholder="Tag for note..."
                                        onChange={handleChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return (
                        <Noteitem key={note._id} note={note} updateNote={updateNote} />
                    );
                })}
            </div>
        </>
    );
};

export default Notes;
