import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Duke from '../icons/DukeLogo';

export default function Home() {
    return (
        <Box 
            sx={{ 
                flexGrow: 1, 
                backgroundColor: 'blue',
                height: '100%',
                display: 'block',
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Typography sx={{color: 'white'}}>
                        Rate My
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Duke />
                </Grid>
            </Grid>
        </Box>
    );
}

