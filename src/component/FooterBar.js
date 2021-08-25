import {BottomNavigation, BottomNavigationAction, Typography} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    footer: {
        marginTop: theme.spacing(10),

        color: "black"
    },
    root:{

    }
}))



export const FooterBar=()=>{
    const classes = useStyles()
    const [value, setValue] = React.useState("recents")
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


    return(
        <footer className={classes.footer}>
            <Typography variant="h5" align="center" gutterBottom> Navigation </Typography>
            <BottomNavigation color="primary" value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon/>}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon/>}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon/>}
                />
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon/>}
                />
            </BottomNavigation>
            <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
                Copyright 2021
            </Typography>
        </footer>
    )
}