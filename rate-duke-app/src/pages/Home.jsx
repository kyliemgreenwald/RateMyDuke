import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Duke from '../icons/DukeLogo';
import './Home.css';
import Button from '@mui/material/Button';

export default function Home() {
    const ref = React.useRef();

    // const handleScroll = React.useCallback(() => {
    //     console.log("scrolling")
    //   }, [])

    // React.useEffect(() => {
    //     const div = ref.current
    //     div.addEventListener("scroll", handleScroll)
    //   }, [handleScroll])

    return (
        <div className="home">  
            <Box className="about">
                <div className="logo">
                    <Duke />
                </div>
                <div className="button">
                    <Button 
                        variant="contained"
                        href={'./ratings/extracurriculars'}
                        sx={{
                            backgroundColor: 'orange'
                        }}
                    >
                        Take me to the forum page!
                    </Button>
                </div>
                <Box>
                    <div className="about-title">
                        <Typography> about </Typography>
                    </div>
                </Box>
            </Box>
        </div>
    );
}

