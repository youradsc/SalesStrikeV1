import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';



export default function EmailVerify(props) {
    const handleClose = () => {
        console.log("done");
        props.changeState(false)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var temp = data.get("Email Code")
        console.log(temp)
        props.changeState(false)
    };

    return (
        <Dialog onClose={handleClose} open={props.open} >
            <DialogTitle>Set backup account</DialogTitle>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{padding:2}}>
            <TextField
                required
                fullWidth
                name="Email Code"
                label="Email Code"
                id="Email Code"
                autoComplete="Email Code"
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width: { xs: "100%", md: "50%" } }}
                onclick={() => (props.buttonf("Step3"))}
            >
                Submit
            </Button>
            </Box>
        </Dialog>
    );
}


