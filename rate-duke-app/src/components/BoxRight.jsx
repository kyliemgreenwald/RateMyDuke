import React from 'react';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import star_filled from '../icons/star_filled.png';
import star_empty from '../icons/star_empty.png';

const BoxRight = (props) => {
    const des = props.description;
    const titl = props.title;
    const tag = props.tags;
    const handleClick = (e) => {
        if (e.currentTarget.src === star_empty) {
            e.currentTarget.src = star_filled;
        } else {
            e.currentTarget.src = star_empty;
        }
      }
// hover effects
// onMouseOver= {e => (e.currentTarget.src = star_filled)}
// onMouseOut= {e => (e.currentTarget.src = star_empty)}
  return (
    <Box className = "boxRight"
            sx={{
            paddingBottom: '20px' }}
            >
        <Typography align="left" marginLeft={1} fontWeight="bold"
            fontSize={20}> 
            {titl}
        </Typography>
        <Typography align="left" marginLeft={1} lineHeight={1.2}
            marginBottom={0.5}> 
            {des}
        </Typography>
        <img src={star_empty} style={{float: "left", marginLeft: "3px"}}
            onClick = {handleClick} />
        <img src={star_empty} style={{float: "left", marginLeft: "0.35px"}}
            onClick = {handleClick} />
        <img src={star_empty} style={{float: "left", marginLeft: "0.35px"}}
            onClick = {handleClick} />
        <img src={star_empty} style={{float: "left", marginLeft: "0.35px"}}
            onClick = {handleClick} />
        <img src={star_empty} style={{float: "left", marginLeftt: "0.35px"}}
            onClick = {handleClick}
            />
    </Box>
  )
}

export default BoxRight