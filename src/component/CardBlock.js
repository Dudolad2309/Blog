import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import ContactlessOutlinedIcon from "@material-ui/icons/ContactlessOutlined";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "56%",

    },
    cardContent: {
        flexGrow: 1
    },

}))

 export const CardBlock = (props) => {
     const classes = useStyles()





    return (
        <Grid container spacing={4}>

            {props.cards.map((card) => (

                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia}
                                   image="https://picsum.photos/640/360"
                                   title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                Blog post
                            </Typography>
                            <Typography>
                                Использование этого подхода в продакшене не рекомендуется
                                - клиент вынужден загружать
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                View
                            </Button>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
                            <ContactlessOutlinedIcon color="secondary"/>
                            <AccessAlarmIcon color="primary"/>
                        </CardActions>
                    </Card>
                </Grid>

            ))}

        </Grid>

    )
}
