import React from 'react';
import SubmitRating from '../components/SubmitRating';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import BoxLeft from '../components/BoxLeft';
import BoxRight from '../components/BoxRight';
import Button from '@mui/material/Button';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { useEffect} from 'react';
import { UserContext } from '../App'


const Extracurriculars = () => {
    const { description, setDescription, tags, setTags , title, setTitle} = React.useContext(UserContext);
    const[boxList, setBoxList] = React.useState([]);
    
    
    useEffect(() => {
        setBoxList(boxList.concat(<BoxLeft key={boxList.length}/>));
    }, [description]);
    
    return(
        
            <div className="page">
            <BoxLeft />
            <BoxRight />
            <BoxLeft />
            <BoxRight />
            <BoxLeft />
            <BoxRight />
            {boxList}
            <SubmitRating />
             </div>

        
        
        
    );
}

export default Extracurriculars