import React from 'react';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import BoxLeft from '../components/BoxLeft';
import BoxRight from '../components/BoxRight';
import Button from '@mui/material/Button';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
// import Item from '@mui/material/Item';

const Extracurriculars = () => {
  return (
    // add background color
    // style={{backgroundColor: "#14319A", height: "100%", width: "100%"}}
    <div className="page">
        <div className="scrollable-div">
            <BoxLeft />
            <BoxRight />
            <BoxLeft />
            <BoxRight />
            <BoxLeft />
            <BoxRight />
        </div>
        <div style={{float: "right"}}>
        <Button variant="contained" startIcon={<AddBoxRoundedIcon />} 
            style={{fontSize: "large", backgroundColor: "#FFBB54", color: "black",
            float: "right", marginRight: "40px"}}>
            Post
        </Button>
        </div>

    </div>
  )
}

export default Extracurriculars