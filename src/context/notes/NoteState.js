import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    // const s1 = {
    //     "name": "hardik",
    //     "class": "berozgar"
    // }
    // const [state, setState] = useState(s1);

    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //             "name": "ridhi",
    //             "class": "9b"
    //         });
    //     }, 2000);
    // }
    return (
        <NoteContext.Provider value={{}}>  {/*{state, update}*/}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 