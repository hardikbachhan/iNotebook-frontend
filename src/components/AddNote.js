import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"});

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: "default"});
    };

    const handleChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    };

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={note.title}
                        placeholder="Note Title goes here..."
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={note.description}
                        placeholder="Note Description goes here..."
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-outline-dark" onClick={handleClick}>
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default AddNote;
