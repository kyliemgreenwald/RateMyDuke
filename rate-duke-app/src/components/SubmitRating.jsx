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
import { UserContext } from '../App';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { useEffect} from 'react';

/*value={data} onChange={(e) => setData(e.target.value)}*/
const SubmitRating = (props) => {
    const { description, setDescription, tags, setTags , title, setTitle} = React.useContext(UserContext);
    const [open, setOpen] = React.useState(props.clicked);
    const [submit, setSubmit] = React.useState(false);
    const [change, setChange] = React.useState(false);
    const [data, setData] = React.useState("");
    const [data1, setData1] = React.useState("");
    const [data2, setData2] = React.useState("");
   
    const handleClose = () => {
        setOpen(false);
        setDescription(data);
        setTags(data1);
        console.log(description);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleChange = () => {
        setChange(true);
    }
    
    
    
    return(
        <div>
            <Button variant="contained" startIcon={<AddBoxRoundedIcon />} 
                style={{fontSize: "large", backgroundColor: "#FFBB54", color: "black",
                float: "right", marginBottom: "20px", marginRight: "320px"}}
                onClick={handleOpen}>
                Add
            </Button>
            <Modal
                open = {open}
                onClose = {handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >   

                <Grid container spacing={2}  direction={'row'}>
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
                                            value={title} onChange={(e) => setTitle(e.target.value)}/>
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
                                            value={data1} onChange={(e) => setData1(e.target.value)}
                                            />

                                        </Grid>
                                        <Grid item xs = {2}>
                                            <Button onClick={handleClose}>Submit</Button>

                                        </Grid>
                                        
                                    </Grid>
                            </Box>

                            
                        </Container>
                </Grid>
            </Modal>

        </div>
        

    )
    

};

export default SubmitRating;