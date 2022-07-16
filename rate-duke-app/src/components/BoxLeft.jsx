import React from 'react';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import star_filled from '../icons/star_filled.png';
import star_empty from '../icons/star_empty.png';
import Grid from '@mui/material/Grid';

const BoxLeft = () => {

    const handleClick = (e) => {
        if (e.currentTarget.src === star_empty) {
            e.currentTarget.src = star_filled;
        } else {
            e.currentTarget.src = star_empty;
        }
      }

  return (
    <Box className = "boxLeft"
            sx={{
            paddingBottom: '20px'}}
        >
        <Typography align="left" marginLeft={1} fontWeight="bold"
            fontSize={20}> 
            Post Title
        </Typography>
        <Typography align="left" marginLeft={1} lineHeight={1.2}
            marginBottom={0.5}> 
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor Lorem ipsum 
            dolor sit amet, consectetur adipiscing elit, sed 
        </Typography>
        <img src={star_empty} style={{float: "right", marginRight: "3px"}}
            onClick = {handleClick} />
        <img src={star_empty} style={{float: "right", marginRight: "0.35px"}}
            onClick = {handleClick}/>
        <img src={star_empty} style={{float: "right", marginRight: "0.35px"}}
            onClick = {handleClick}/>
        <img src={star_empty} style={{float: "right", marginRight: "0.35px"}}
            onClick = {handleClick}/>
        <img src={star_empty} style={{float: "right", marginRight: "0.35px"}}
            onClick = {handleClick} />
    </Box>
  )
}

export default BoxLeft
    