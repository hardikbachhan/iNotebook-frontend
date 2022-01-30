import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const { note } = props;

    const { deleteNote } = useContext(noteContext);

    const handleClick = () => {
        deleteNote(note._id);
    }

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-edit mx-3"></i>
                        <i className="far fa-trash-alt mx-2" onClick={handleClick}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Noteitem;
