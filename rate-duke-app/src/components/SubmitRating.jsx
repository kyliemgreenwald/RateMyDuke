import Modal from '@mui/material/Modal';
import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./SubmitRating.css";
import Container from '@mui/material/Container';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { UserContext } from '../pages/Extracurriculars';
const SubmitRating = () => {
    const { description, setDescription, tags, setTags , title, setTitle} = React.useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    //const [submit, setSubmit] = React.useState(false);
    const [change, setChange] = React.useState(false);
    const [data, setData] = React.useState("");
    const [data1, setData1] = React.useState("");
    const [data2, setData2] = React.useState("");
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleChange = () => {
        setChange(true);
    }
    const handleSubmit = () => {
        setDescription(data);
        setTags(data1);
        setTitle(data2);
    }
    
    return(
        <div>
            <Button onClick={handleOpen}>Submit a Rating</Button>
            <Modal
                open = {open}
                onClose = {handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >   

                <Grid container spacing={2}  direction={'row'}>
                    {/*<Grid item xs={10}>*/}
                        <Container className='modal-border'>
                            <Box
                                        
                                        className='modal-inside' 
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: 'whitesmoke',
                                            boxShadow: 1,
                                        }}
                                    >
                                    <Grid container spacing={2} direction={'row'} padding={4}>
                                        <Grid item xs={7}>
                                            <TextField fullWidth id="title" label="Title" variant="outlined" alignContent="baseline"
                                            value={data2} onChange={(e) => setData2(e.target.value)}/>
                                        </Grid>
                                        <Grid item xs ={5}>
                                            <FormControl fullWidth>
                                                <InputLabel id="category-label">Category</InputLabel>
                                                <Select
                                                    labelId="category-label"
                                                    id="category-select"
                                                    //value={category}
                                                    label="Category"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={"extracurriculars"}>Extracurriculars</MenuItem>
                                                    <MenuItem value={"dining"}>Dining</MenuItem>
                                                    <MenuItem value={"social"}>Social</MenuItem>
                                                    <MenuItem value={"sports"}>Sports</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs ={12}>
                                            <TextField fullWidth id="description" label="Write your description here ..." variant="outlined" multiline maxRows={6} minRows={6} 
                                            value={data} onChange={(e) => setData(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs ={12}>
                                            <TextField fullWidth id="tags" label="Tags ..." variant="outlined" 
                                            value={data1} onChange={(e) => setData1(e.target.value)}/>

                                        </Grid>
                                        <Button onClick={handleSubmit}>Submit</Button>
                                    </Grid>
                            </Box>

                            
                        </Container>
                </Grid>
            </Modal>

        </div>
        

    )
    

};

export default SubmitRating;