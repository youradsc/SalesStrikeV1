import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function SuccessHandle(props) {
    const navigate = useNavigate()
    const handleClose = () => {
        console.log("done");
        props.changeState(false)
    };
    console.log(props.error)

    return (
        <Dialog onClose={handleClose} open={props.open} >
            <DialogTitle>Set backup account</DialogTitle>
            <div>
                <Typography sx={{ margin: "auto", padding: 2 }}>Password Changed</Typography>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ margin: "auto", width: { xs: "100%", md: "50%" } }}
                        onClick={() => {props.changeState(false); navigate("/login")}}
                    >
                        Login

                    </Button>
                </Box>

            </div>
        </Dialog >
    );
}


