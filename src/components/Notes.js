import React, { useState, useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;

    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("token")){
            getNotes();
        } else {
            history.push("/login");
        }
    });

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const updateNote = (currentNote) => {
        // shows a bootstrap modal
        // console.log("request to update note");
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    };

    const handleClick = (e) => {
        // e.preventDefault();  // button is not in form
        // update note after getting data from modal
        // addNote(note.title, note.description, note.tag);
        // setNote({title: "", description: "", tag: "default"});
        // making API call to edit note.
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Updated successfully", "success");
        // console.log("updating the note...", note);
    };

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <AddNote showAlert={props.showAlert} />

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
                                        onChange={handleChange}
                                        minLength={5}
                                        required
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
                                        onChange={handleChange}
                                        minLength={5}
                                        required
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
                                        onChange={handleChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                ref={refClose}
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container mx-3">
                    {notes.length === 0 && <p>No Notes to display.</p>}
                </div>
                {notes.map((note) => {
                    return (
                        <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />
                    );
                })}
            </div>
        </>
    );
};

export default Notes;
