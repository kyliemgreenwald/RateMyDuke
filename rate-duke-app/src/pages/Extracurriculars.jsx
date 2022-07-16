import React from 'react';
import SubmitRating from '../components/SubmitRating';
export const UserContext = React.createContext();


export default function Extracurriculars(){
    const[description, setDescription] = React.useState("");
    const[tags, setTags] = React.useState("");
    const[title, setTitle] = React.useState("");
    
    return(
        <div>
            
            
            <h1>hi</h1>
            <UserContext.Provider value={{description, setDescription, tags, setTags, title, setTitle}}>
                <SubmitRating/>
            </UserContext.Provider>

        </div>
        
    );
}