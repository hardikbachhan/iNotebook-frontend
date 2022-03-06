import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"

    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);
    
    // Get all Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const notes = await response.json();
        setNotes(notes);
    }
    
    // Add a new Note.
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({title, description, tag}),
        });

        const note = await response.json();
        // console.log(json);

        // TODO: below id and user are not correct. - CORRECTED
        // const note = json;
        // {
        //     _id: "61e936486e71ef70fef1a3d12",
        //     user: "61e8296610e1745e5ad2d00a",
        //     title: title,
        //     description: description,
        //     tag: tag,
        //     date: "2022-01-20T10:15:36.484Z",
        //     __v: 0,
        // };
        // console.log("note added");
        setNotes(notes.concat(note)); // concat returns the array, push updates the array
    };

    // Edit an existing Note.
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({title, description, tag}),
        });

        const json = await response.json();
        console.log(json);

        // Logic to edit in Client
        const newNotes = notes.map((note) => {
            if (note._id === id) {
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
            return note;
        });
        setNotes(newNotes);
    };

    // Delete a Note.
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        console.log(json);
        
        // console.log("Deleting the note with id: " + id);
        const newNotes = notes.filter((note) => id !== note._id);
        setNotes(newNotes);
    };

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
