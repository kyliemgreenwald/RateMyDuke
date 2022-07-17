import React from 'react';
import { slide as Menu } from "react-burger-menu";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ForumMenu(props) {
    return(
        <Box sx={{backgroundColor: 'white'}}>
            <Menu {...props} width={300}>
            <Typography variant='h4' className="menu-item" href="/ratings">
                Home
            </Typography>

            <Typography variant='h4' className="menu-item" href="/ratings/extracurriculars">
                Extracurriculars
            </Typography>

            <Typography variant='h4' className="menu-item" href="/ratings/dining">
                Dining
            </Typography>

            <Typography variant='h4' className="menu-item" href="/ratings/other">
                Other
            </Typography>
            </Menu>
        </Box>
    );
}