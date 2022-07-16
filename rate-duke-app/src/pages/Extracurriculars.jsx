import React from 'react';
import SubmitRating from '../components/SubmitRating';
export const UserContext = React.createContext();


export default function Extracurriculars(){
    const[description, setDescription] = React.createContext();
    const[tags, setTags] = React.createContext();
    const[title, setTitle] = React.createContext();
    return(
        <div>
            

            
            
            <h1>hi</h1>
            <UserContext.Provider value={{description, setDescription, tags, setTags, title, setTitle}}>
                <SubmitRating/>
            </UserContext.Provider>

        </div>
        
    );
}