import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""});

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
                <div className="form-group my-3">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control my-2"
                        id="title"
                        name="title"
                        value={note.title}
                        onChange={handleChange}
                        minLength={5}
                        required
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control my-2"
                        id="description"
                        name="description"
                        value={note.description}
                        onChange={handleChange}
                        minLength={5}
                        required
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="tag">Tag</label>
                    <input
                        type="text"
                        className="form-control my-2"
                        id="tag"
                        name="tag"
                        value={note.tag}
                        onChange={handleChange}
                    />
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-dark" onClick={handleClick}>
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default AddNote;
