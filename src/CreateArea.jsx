import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props){
    const [zoo, Setzoo] = useState(false);
function handleZoo(){
    Setzoo(true);
}
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
 
    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }

        });
    }
    
    function Add(event){
        props.Addnote(note);
        setNote(() => {return {
            title:"",
            content:""
        }
    })
        event.preventDefault();
    }

    return(
        <div>
            <form autoComplete="off" className="create-note">
                {zoo?
                <input 
                  name="title" 
                  placeholder="Title" 
                  onChange={handleChange} 
                  value={note.title}
                />:null
                }
                <textarea 
                  name="content" 
                  placeholder="Take a Note..."  
                  onChange={handleChange} 
                  value={note.content}
                  onClick={handleZoo} 
                  rows={zoo?3:1}
                />
                {zoo?
                <Zoom in ={true}><Fab onClick= {Add}><AddIcon /></Fab></Zoom>
                :null}
            </form>
        </div>
    );
}

export default CreateArea;