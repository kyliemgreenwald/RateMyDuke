import React from 'react';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';

const Extracurriculars = () => {
  return (
    // add background color
    // style={{backgroundColor: "#14319A", height: "100%", width: "100%"}}
    <div>
        <Box className = "boxLeft"
            sx={{
            '&:hover': {
            opacity: [0.9, 0.8, 0.7] },
            }}
        />
        <Box className = "boxRight"
            sx={{
            '&:hover': {
            opacity: [0.9, 0.8, 0.7] }, }}
            >
            <Typography align="left" marginLeft={1} fontWeight="bold"
                fontSize={20}> 
                Post Title
            </Typography>
            <Typography align="left" marginLeft={1} lineHeight={1.2}
                marginBottom={1}> 
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed 
            </Typography>
        </Box>
        <Box className = "boxLeft"
            sx={{
            '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            },
            }}
        />
        <Box className = "boxRight"
            sx={{
            '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            },
            }}
        />
        <Box className = "boxLeft"
            sx={{
            '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            },
            }}
        />
        <Box className = "boxRight"
            sx={{
            '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            },
            }}
        />
    </div>
  )
}

export default Extracurriculars