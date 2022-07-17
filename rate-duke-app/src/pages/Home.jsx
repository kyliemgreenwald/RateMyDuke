import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Duke from '../icons/DukeLogo';
import './Home.css';
import Button from '@mui/material/Button';
import ForumMenu from '../components/ForumMenu';
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
                <Box sx= {{backgroundColor: "white", marginLeft: '230px', width: '65%', border: 10, borderRadius: 2, borderColor: 'white'}}>
                    <Typography variant="h4" className="typewriter"> 
                        Duke's largest hub for all things opinionated!
                    </Typography>
                </Box>
                <div className="button">
                    <Button 
                        variant="contained"
                        href={'./ratings/extracurriculars'}
                        sx={{
                            backgroundColor: '#FFBB54',
                            fontSize: "large",
                            color: "black"
                        }}
                    >
                        Take me to the forum page!
                    </Button>
                </div>
            </Box>
        </div>
    );
}

