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
    const[right, setRight] = React.useState(true);
    const[first, setFirst] = React.useState(true);
    
    /*useEffect(()=>{
        if(right){
            setBoxList(boxList.concat(<BoxRight key={boxList.length} description={description} tags={tags} title={title}/>));
            setRight(false);
        }
        else{
            setBoxList(boxList.concat(<BoxLeft key={boxList.length} description={description} tags={tags} title={title}/>));
            setRight(true);
        }
        
    }, [])
    */
    
    useEffect(() => {
        if(first){
            console.log("happy day!")
            setFirst(false);
        }
        else if(right && !first){
            setBoxList(boxList.concat(<BoxRight key={boxList.length} description={description} tags={tags} title={title}/>));
            setRight(false);
        }
        else{
            setBoxList(boxList.concat(<BoxLeft key={boxList.length} description={description} tags={tags} title={title}/>));
            setRight(true);
        }
        
    }, [description]);
    
    return(
        
            <div className="page">
            <BoxLeft title="post" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <BoxRight title="post" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <BoxLeft title="post" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <BoxRight title="post" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <BoxLeft title="post" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            {boxList}
            <SubmitRating />
             </div>

        
        
        
    );
}

export default Extracurriculars