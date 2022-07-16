import React from 'react';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';

const Extracurriculars = () => {
  return (
    <div>
      <Box className = "box1"
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