import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';



export default function ErrorHandleBank(props) {
    const handleClose = () => {
        console.log("done");
        props.changeState(false)
    };
    console.log(props.error)

    return (
        <Dialog onClose={handleClose} open={props.open} >
            <DialogTitle>Bank Error</DialogTitle>
            <div>
                <Typography sx={{ margin: "auto", padding: 2 }}>{props.error}</Typography>
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
                        onClick={() => (props.changeState(false))}
                    >
                        Try Again

                    </Button>
                </Box>

            </div>
        </Dialog >
    );
}


