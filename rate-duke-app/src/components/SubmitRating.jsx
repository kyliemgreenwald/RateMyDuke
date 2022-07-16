import Modal from '@mui/material/Modal';
import React from 'react';
import { useState } from 'react';


const SubmitRating = () => {
    [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    return(
        <div>
            <Button onClick={handleOpen}>Submit a Rating</Button>
            <Modal
                open = {open}
                onClose = {handleClose}
            >
                <TextField id="filled-basic" label="Filled" variant="filled" />

            </Modal>

        </div>
        

    )
    

};

export default SubmitRating;