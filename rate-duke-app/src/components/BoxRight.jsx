import React from 'react';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import star_filled from '../icons/star_filled.png';
import star_empty from '../icons/star_empty.png';

const BoxRight = () => {
  return (
    <Box className = "boxRight"
            sx={{
            paddingBottom: '20px',
            '&:hover': {
            opacity: [0.9, 0.8, 0.7] }, }}
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
        <img src={star_empty} style={{float: "left", marginLeft: "3px"}}/>
        <img src={star_empty} style={{float: "left", marginLeft: "0.35px"}}/>
        <img src={star_empty} style={{float: "left", marginLeft: "0.35px"}}/>
        <img src={star_empty} style={{float: "left", marginLeft: "0.35px"}}/>
        <img src={star_empty} style={{float: "left", marginLeftt: "0.35px"}}/>
    </Box>
  )
}

export default BoxRight