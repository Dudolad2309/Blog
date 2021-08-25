import React from "react";
import {
    Box,
    Button, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton, TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Dialog from "@material-ui/core/Dialog";
import {makeStyles} from "@material-ui/core/styles";
import {Route} from "react-router-dom";
import Test from "./Test";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
}))



export const Header = ()=>{

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <Toolbar>
            <IconButton className={classes.menuButton}
                        edge="start" color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <Typography className={classes.title} variant="h5">Dims Developer Blog</Typography>
            <Box mr={3}>
                <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log in</Button>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"> LOG IN </DialogTitle>
                    <DialogContent>
                        <DialogContentText>Welcome </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email adress"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="pass"
                            label="Password"
                            type="password"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button onClick={handleClose} color="primary">Log in</Button>
                    </DialogActions>
                </Dialog>
            </Box>
            <Button color="secondary" variant="contained">Sign up</Button>
        </Toolbar>
    )

}