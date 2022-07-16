import React from 'react';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import BoxLeft from '../components/BoxLeft';
import BoxRight from '../components/BoxRight';
import Button from '@mui/material/Button';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

const Extracurriculars = () => {
  return (
    // add background color
    // style={{backgroundColor: "#14319A", height: "100%", width: "100%"}}
    <div>
        <BoxLeft />
        <BoxRight />
        <BoxLeft />
        <BoxRight />
        <BoxLeft />
        <BoxRight />
        <Button variant="outlined" startIcon={<AddBoxRoundedIcon />}>
            Delete
        </Button>
    </div>
  )
}

export default Extracurriculars