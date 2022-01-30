import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            _id: "61e936486e71ef70fef1a3d1",
            user: "61e8296610e1745e5ad2d00a",
            title: "This is my Title",
            description: "Please wake up early tomorrow.",
            tag: "Personal",
            date: "2022-01-20T10:15:36.484Z",
            __v: 0,
        },
        {
            _id: "61e9371dfb1fc20c31ef7154",
            user: "61e8296610e1745e5ad2d00a",
            title: "This is my Title",
            description: "I hope i wake up early tomorrow.",
            tag: "Personal",
            date: "2022-01-20T10:19:09.754Z",
            __v: 0,
        },
        {
            _id: "61e937eefb1fc20c31ef7158",
            user: "61e8296610e1745e5ad2d00a",
            title: "Express.js",
            description: "add delete note route to application.",
            tag: "Work",
            date: "2022-01-20T10:22:38.205Z",
            __v: 0,
        },
        {
            _id: "61e98bfdbfb5aace3dc39d05",
            user: "61e8296610e1745e5ad2d00a",
            title: "TODO",
            description: "Complete all videos in React Playlist",
            tag: "YouTube",
            date: "2022-01-20T16:21:17.956Z",
            __v: 0,
        },
        {
            _id: "61e936486e71ef70ffef1a3d1",
            user: "61e8296610e1745e5ad2d00a",
            title: "This is my Title",
            description: "Please wake up early tomorrow.",
            tag: "Personal",
            date: "2022-01-20T10:15:36.484Z",
            __v: 0,
        },
        {
            _id: "61e9371dfb1ufc20c31ef7154",
            user: "61e8296610e1745e5ad2d00a",
            title: "This is my Title",
            description: "I hope i wake up early tomorrow.",
            tag: "Personal",
            date: "2022-01-20T10:19:09.754Z",
            __v: 0,
        },
        {
            _id: "61e937eefb61fc20c31ef7158",
            user: "61e8296610e1745e5ad2d00a",
            title: "Express.js",
            description: "add delete note route to application.",
            tag: "Work",
            date: "2022-01-20T10:22:38.205Z",
            __v: 0,
        },
        {
            _id: "61e98bfdbfb5kaace3dc39d05",
            user: "61e8296610e1745e5ad2d00a",
            title: "TODO",
            description: "Complete all videos in React Playlist",
            tag: "YouTube",
            date: "2022-01-20T16:21:17.956Z",
            __v: 0,
        }
    ];

    const [notes, setNotes] = useState(notesInitial);

    // Add a new Note.
    const addNote = (title, description, tag) => {
        // TODO: API call
        const note = {
            _id: "61e936486e71ef70fef1a3d12",
            user: "61e8296610e1745e5ad2d00a",
            title: title,
            description: description,
            tag: tag,
            date: "2022-01-20T10:15:36.484Z",
            __v: 0,
        }
        console.log("note added");
        setNotes(notes.concat(note));   // concat returns the array, push updates the array
    };
    
    // Edit an existing Note.
    const editNote = (id, title, description, tag) => {};

    // Delete a Note.
    const deleteNote = (id) => {
        // TODO: API call
        console.log("Deleting the note with id: " + id);
        const newNotes = notes.filter((note) => id!==note._id)
        setNotes(newNotes);
    };
    

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
