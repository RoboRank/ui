import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cardStyles = makeStyles(() => ({
    root: {
        width: "90vw",
        backgroundColor: "#282c34",
        color: "#D5EC05",
    }
}));

export default function ChallengeCard(props) {
    const classes = cardStyles();
    return (
        <Route render={({ history }) => (
            <Card className={classes.root} onClick={() => history.push({
                pathname: `/challenges/${props.challenge.id}`,
                state: props
            })}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="240"
                        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.challenge.name}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                            {props.domain.description}
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </ Card>
        )} />
    )
};