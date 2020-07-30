import React, { useState } from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx"

function App(){
    const[notes, setNotes] = useState([]);
    function Addnote(note){
        setNotes((prevValue) => {
            return [...prevValue, note];
        })
    }
    function Delete(id){
        setNotes((prevValue) =>{
            return prevValue.filter((notes,index) =>{
                return index !== id;
            });
        });

    }
    return (
        <div>
        <Header />
        <CreateArea 
            Addnote ={Addnote} 
        />
        {notes.map((noteItem, index) => {
            return <Note 
                key={index}
                title={noteItem.title}
                content={noteItem.content}
                onDel = {Delete}
                id={index}
            />
        }
        )
        }
        <Footer />
        </div>
    );
}
export default App;